import {Sampler} from 'tone';

// Audio Files
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import C7 from './C7.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';
import G6 from './G6.wav';

const
  AUDIO = {
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  },
  AUDIO_MIN = {
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  };

export default class InstrumentXylophoneWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
