import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.mp3';
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import C6 from './C6.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import E5 from './E5.mp3';

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

export default class InstrumentFluteMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
