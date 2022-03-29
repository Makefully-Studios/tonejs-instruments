# ToneJS Instrument ViolinMp3

ViolinMp3 extends Tone.Sampler by automatically loading the list of audio clips for each note.

For all audio formats, check out [Violin](../README.md).

## Basic Usage

Install using `npm install tonejs-instrument-violin-mp3`. Once installed, you can include ViolinMp3 as an import as shown:

```javascript
import ViolinMp3 from 'tonejs-instrument-violin-mp3';
```

To use this instrument as a source:

```javascript
const
  instrument = new ViolinMp3();
```

You can also pass an options object with an `onload` event to perform actions once the instrument is loaded:

```javascript
const
  instrument = new ViolinMp3({
    onload: () => {
      instrument.triggerAttack("A3");
    }
  });
```

If you want to reduce the number of samples to load, set `minify: true` as shown here:

```javascript
const
  instrument = new ViolinMp3({
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
