import {Sampler} from 'tone';

// Audio Files
import C5 from './C5.wav';
import C6 from './C6.wav';
import C7 from './C7.wav';
import C8 from './C8.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';
import G6 from './G6.wav';
import G7 from './G7.wav';

const
  AUDIO = {
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C8": C8,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G7": G7
  },
  AUDIO_MIN = {
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C8": C8,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G7": G7
  };

export default class InstrumentXylophoneWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
