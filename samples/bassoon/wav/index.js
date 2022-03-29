import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import E4 from './E4.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';

const
  AUDIO = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "E4": E4,
    "G2": G2,
    "G3": G3,
    "G4": G4
  },
  AUDIO_MIN = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "E4": E4,
    "G2": G2,
    "G3": G3,
    "G4": G4
  };

export default class InstrumentBassoonWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
