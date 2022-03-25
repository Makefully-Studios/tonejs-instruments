import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import A6 from './A6.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import C7 from './C7.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';
import E6 from './E6.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';
import G6 from './G6.wav';

const
  AUDIO = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  },
  AUDIO_MIN = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  };

export default class InstrumentViolinWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
