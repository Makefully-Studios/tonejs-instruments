const
    fs = require("fs"),
    pkg = JSON.parse(fs.readFileSync('./package.json')),
    template = new String(fs.readFileSync('./tonejs-instruments-template.js')),
    templateTypes = new String(fs.readFileSync('./tonejs-instrument-types-template.js')),
    camelCase = (str) => {
        return str.replace(/(?:^|-)([a-z])/g, (g) => (g[1] || g[0]).toUpperCase());
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
    createRootIndex = () => {
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
    },
    allInstruments = [];

delete pkg.scripts;

fs.readdirSync('samples').forEach((folder) => {
    const
        instrumentPath = `samples/${folder}`,
        types = [];
    
    allInstruments.push(folder);
    pkg.name = `tonejs-instrument-${folder}`;
    pkg.description = `NPM package for all tonejs-instruments ${folder} samples.`;
    fs.writeFileSync(`${instrumentPath}/package.json`, JSON.stringify(pkg, null, 2));
    console.log(`Create package for ${instrumentPath}/`);
    fs.readdirSync(instrumentPath).filter((file) => (file.indexOf('.') === -1)).forEach((ext) => {
        const
            instrumentTypePath = `${instrumentPath}/${ext}`,
            thisExts = [],
            instrumentName = camelCase(`${folder}-${ext}`);

        types.push(ext);

        pkg.name = `tonejs-instrument-${folder}-${ext}`;
        pkg.description = `NPM package for tonejs-instruments ${folder} ${ext.toUpperCase()} samples.`;
        fs.writeFileSync(`${instrumentTypePath}/package.json`, JSON.stringify(pkg, null, 2));
        console.log(`Create package for ${instrumentTypePath}/`);

        fs.readdirSync(instrumentTypePath).filter((file) => (file.indexOf('.') >= 0) && (file.indexOf('.js') === -1)).forEach((audio) => {
            thisExts.push({
                id: audio.split('.')[0],
                path: `./${audio}`
            });
        });

        fs.writeFileSync(`${instrumentTypePath}/index.js`, updateTemplate(thisExts, instrumentName));
        //if (!fs.existsSync(`samples/${folder}/${ext}`)){
        //    fs.mkdirSync(`samples/${folder}/${ext}`);
        //}
        //fs.renameSync(`samples/${folder}/${file}`, `samples/${folder}/${ext}/${file}`);
    });
    fs.writeFileSync(`${instrumentPath}/index.js`, updateTypesTemplate(camelCase(folder), types));
});

fs.writeFileSync(`index.js`, createRootIndex());
