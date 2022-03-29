import {Sampler} from 'tone';

// Audio Files
import A4 from './A4.ogg';
import A5 from './A5.ogg';
import A6 from './A6.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import C7 from './C7.ogg';
import E4 from './E4.ogg';
import E5 from './E5.ogg';
import E6 from './E6.ogg';

const
  AUDIO = {
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6
  },
  AUDIO_MIN = {
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6
  };

export default class InstrumentFluteOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
