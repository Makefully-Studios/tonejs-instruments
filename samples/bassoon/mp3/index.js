import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.mp3';
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import C2 from './C2.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import E3 from './E3.mp3';
import G1 from './G1.mp3';
import G2 from './G2.mp3';
import G3 from './G3.mp3';

const
  AUDIO = {
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "E3": E3,
    "G1": G1,
    "G2": G2,
    "G3": G3
  },
  AUDIO_MIN = {
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "E3": E3,
    "G1": G1,
    "G2": G2,
    "G3": G3
  };

export default class InstrumentBassoonMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
