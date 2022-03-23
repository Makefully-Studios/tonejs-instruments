import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.wav';
import A2 from './A2.wav';
import A3 from './A3.wav';
import C2 from './C2.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import E3 from './E3.wav';
import G1 from './G1.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';

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

export default class InstrumentBassoonWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
