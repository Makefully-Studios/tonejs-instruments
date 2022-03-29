import {Sampler} from 'tone';

// Audio Files
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import A6 from './A6.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import C6 from './C6.mp3';
import C7 from './C7.mp3';
import E4 from './E4.mp3';
import E5 from './E5.mp3';
import E6 from './E6.mp3';

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

export default class InstrumentFluteMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
