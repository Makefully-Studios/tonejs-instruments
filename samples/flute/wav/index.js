import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';

const
  AUDIO = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "E3": E3,
    "E4": E4,
    "E5": E5
  },
  AUDIO_MIN = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "E3": E3,
    "E4": E4,
    "E5": E5
  };

export default class InstrumentFluteWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
