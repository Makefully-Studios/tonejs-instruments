# tonejs-instruments

This project provides instrument samples as separate packages for each instrument so that the entire sample library doesn't need to be installed: developers can just install the instruments in the audio format that they need to reduce the overall dependency footprint.

Each instrument is a class that extends Tone.Sampler by automatically loading the list of audio clips for the given instrument in each note.

## About the samples

These instrument samples come from a variety of public domain sources (see the sample-source-info.txt for more information)

All the samples have been edited for consistency: trimming silence, on/off ramp, volume-matching, normalizing, noise removal, and some pitch-correction where necessary.

Included instruments:
- [bass-electric](./samples/bass-electric/README.md)
- [bassoon](./samples/bassoon/README.md)
- [cello](./samples/cello/README.md)
- [clarinet](./samples/clarinet/README.md)
- [contrabass](./samples/contrabass/README.md)
- [flute](./samples/flute/README.md)
- [french-horn](./samples/french-horn/README.md)
- [guitar-acoustic](./samples/guitar-acoustic/README.md)
- [guitar-electric](./samples/guitar-electric/README.md)
- [guitar-nylon](./samples/guitar-nylon/README.md)
- [harmonium](./samples/harmonium/README.md)
- [harp](./samples/harp/README.md)
- [organ](./samples/organ/README.md)
- [piano](./samples/piano/README.md)
- [saxophone](./samples/saxophone/README.md)
- [trombone](./samples/trombone/README.md)
- [trumpet](./samples/trumpet/README.md)
- [tuba](./samples/tuba/README.md)
- [violin](./samples/violin/README.md)
- [xylophone](./samples/xylophone/README.md)

## To do:
- Add drumkits
- Add Synths

## LICENSE

Code: MIT License (see LICENSE.md)

Samples: [CC-by 3.0](https://creativecommons.org/licenses/by/3.0/)
