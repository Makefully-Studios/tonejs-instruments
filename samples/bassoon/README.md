# ToneJS Instrument Bassoon

Bassoon extends Tone.Sampler by automatically loading the list of audio clips for each note.

This instrument can be instantiated using various audio formats:
- [BassoonMp3](./mp3/README.md)
- [BassoonOgg](./ogg/README.md)
- [BassoonWav](./wav/README.md)

## Basic Usage

Install using `npm install tonejs-instrument-bassoon`. Once installed, you can include Bassoon as an import as shown:

```javascript
import {BassoonMp3, BassoonOgg, BassoonWav} from 'tonejs-instrument-bassoon';
```

To use this instrument as a source:

```javascript
const
  instrument = new BassoonMp3();
```

You can also pass an options object with an `onload` event to perform actions once the instrument is loaded:

```javascript
const
  instrument = new BassoonMp3({
    onload: () => {
      instrument.triggerAttack("A3");
    }
  });
```

If you want to reduce the number of samples to load, set `minify: true` as shown here:

```javascript
const
  instrument = new BassoonMp3({
    minify: true,
    onload: () => {
      instrument.triggerAttack("A3");
    }
  });
```

## About the samples

These instrument samples come from a variety of public domain sources (see the sample-source-info.txt for more information)

All the samples have been edited for consistency: trimming silence, on/off ramp, volume-matching, normalizing, noise removal, and some pitch-correction where necessary.

## LICENSE

Code: MIT License (see LICENSE.md)

Samples: [CC-by 3.0](https://creativecommons.org/licenses/by/3.0/)
