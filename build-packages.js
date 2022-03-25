const
    fs = require("fs"),
    getJSONSync = (path) => {
        try {
            return JSON.parse(fs.readFileSync(path));
        } catch (e) {
            return null;
        }
    },
    pkg = getJSONSync('./package.json'),
    version = pkg.version,
    massPublish = getJSONSync('./mass-publish.json'),
    publishList = massPublish.packages,
    template = new String(fs.readFileSync('./templates/tonejs-instruments.js')),
    templateTypes = new String(fs.readFileSync('./templates/tonejs-instrument-types.js')),
    templateReadme = new String(fs.readFileSync('./templates/README.md')),
    camelCase = (str) => {
        return str.replace(/(?:^|-)([a-z])/g, (g) => (g[1] || g[0]).toUpperCase());
    },
    getLatestVersion = (version1 = '0.0.0', version2 = '0.0.0') => {
        const
            v1 = version1.split('.'),
            v2 = version2.split('.');

        for (let i = 0; i < 3; i++) {
            if (+v1[i] > +v2[i]) {
                return version1;
            } else if (+v2[i] > +v1[i]) {
                return version2;
            }
        }

        return version1;
    },
    updateTemplate = (files, instrument) => {
        const
            minBy = files.length >> 3;

        return template.replace('// Audio Files', `// Audio Files\n${files.map((file) => {
            return `import ${file.id} from '${file.path}';`;
        }).join('\n')}`).replace('AUDIO = {}', `AUDIO = {\n${files.map((file) => {
            return `    "${file.id.replace('s', '#')}": ${file.id}`;
        }).join(',\n')}\n  }`).replace('AUDIO_MIN = {}', `AUDIO_MIN = {\n${files.filter((value, index) => index % minBy === 0).map((file) => {
            return `    "${file.id.replace('s', '#')}": ${file.id}`;
        }).join(',\n')}\n  }`).replace('Instrument', `Instrument${instrument}`);
    },
    updateTypesTemplate = (instrument, types) => {
        const
            typeMap = {};

        types.forEach((type) => {
            typeMap[type] = `${instrument}${camelCase(type)}`;
        });

        return templateTypes.replace('// Instrument types', `// Instrument Types\n${types.map((type) => {
            return `import ${typeMap[type]} from './${type}/index.js';`;
        }).join('\n')}`).replace('typeMap = {}', `typeMap = {\n${types.map((type) => {
            return `    ${type}: ${typeMap[type]}`;
        }).join(',\n')}\n  }`).replace('instruments = {', `instruments = {\n${types.map((type) => {
            return `    ${typeMap[type]}`;
        }).join(',\n')},`).replace(/instruments/g, `${instrument}s`);
    },
    updateReadme = (instrumentName, instrument, types) => {
        const
            typeMap = {};
        let readme = templateReadme;

        if (types) {
            types.forEach((type) => {
                typeMap[type] = camelCase(`${instrument}-${type}`);
            });
            readme = readme.replace("## Basic Usage", `This instrument can be instantiated using various audio formats:\n${types.map((type) => {
                return `- [${typeMap[type]}](./${type}/README.md)`;
            }).join('\n')}\n\n## Basic Usage`).replace("import INSTRUMENT_NAME", `import {${types.map((type) => typeMap[type]).join(', ')}}`).replace(/INSTRUMENT_NAME\(/g, `${typeMap[types[0]]}(`);
        }

        return readme.replace(/INSTRUMENT_NAME/g, instrumentName).replace(/INSTRUMENT/g, instrument);
    },
    allInstruments = [];

delete pkg.scripts;
delete pkg.devDependencies;

fs.readdirSync('samples').forEach((folder) => {
    const
        instrumentPath = `samples/${folder}`,
        types = [];
    
    allInstruments.push(folder);
    pkg.name = `tonejs-instrument-${folder}`;
    pkg.description = `NPM package for all tonejs-instruments ${folder} samples.`;
    pkg.version = getLatestVersion(version, getJSONSync(`${instrumentPath}/package.json`)?.version);
    fs.writeFileSync(`${instrumentPath}/package.json`, `${JSON.stringify(pkg)}\n`);
    console.log(`Create package for ${instrumentPath}/`);
    fs.readdirSync(instrumentPath).filter((file) => (file.indexOf('.') === -1)).forEach((ext) => {
        const
            instrumentTypePath = `${instrumentPath}/${ext}`,
            thisExts = [],
            instrumentName = camelCase(`${folder}-${ext}`);

        types.push(ext);

        pkg.name = `tonejs-instrument-${folder}-${ext}`;
        pkg.description = `NPM package for tonejs-instruments ${folder} ${ext.toUpperCase()} samples.`;
        pkg.version = getLatestVersion(version, getJSONSync(`${instrumentTypePath}/package.json`)?.version);
        fs.writeFileSync(`${instrumentTypePath}/package.json`, `${JSON.stringify(pkg)}\n`);
        console.log(`Create package for ${instrumentTypePath}/`);

        fs.readdirSync(instrumentTypePath).filter((file) => (file.indexOf('.') >= 0) && (file.indexOf('.js') === -1) && (file.indexOf('.md') === -1)).forEach((audio) => {
            thisExts.push({
                id: audio.split('.')[0],
                path: `./${audio}`
            });
        });

        fs.writeFileSync(`${instrumentTypePath}/index.js`, updateTemplate(thisExts, instrumentName));
        fs.writeFileSync(`${instrumentTypePath}/README.md`, updateReadme(instrumentName, `${folder}-${ext}`));
    });
    fs.writeFileSync(`${instrumentPath}/index.js`, updateTypesTemplate(camelCase(folder), types));
    fs.writeFileSync(`${instrumentPath}/README.md`, updateReadme(camelCase(folder), folder, types));
});

fs.writeFileSync('index.js', (() => {
    const
        instruments = {};

    allInstruments.forEach((instrument) => {
        instruments[instrument] = camelCase(instrument);
    });

    return templateTypes.replace('// Instrument types', `// Instruments\n${allInstruments.map((instrument) => {
        return `import ${instruments[instrument]} from './samples/${instrument}/index.js';`;
    }).join('\n')}`).replace('typeMap = {}', `instrumentMap = {\n${allInstruments.map((instrument) => {
        return `    '${instrument}': ${instruments[instrument]}`;
    }).join(',\n')}\n  }`).replace('instruments = {', `instruments = {\n${allInstruments.map((instrument) => {
        return `    ${instruments[instrument]}`;
    }).join(',\n')},`).replace(/typeMap/g, `instrumentMap`);
})());
fs.writeFileSync('README.md', (() => {
    const
        readme = new String(fs.readFileSync('./README.md'));

    return `${readme.split('Included instruments:')[0]}Included instruments:\n${allInstruments.map((instrument) => {
        return `- [${instrument}](./samples/${instrument}/README.md)`;
    }).join('\n')}\n\n## To do:${readme.split('## To do:')[1]}`;
})());

// Update NPM publish list.
publishList.length = 0;
publishList.push('samples/', ...allInstruments.map((instrument) => `samples/${instrument}/`));
fs.writeFileSync('mass-publish.json', `${JSON.stringify(massPublish)}\n`);
