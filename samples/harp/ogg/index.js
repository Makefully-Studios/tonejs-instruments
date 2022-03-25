import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.ogg';
import A4 from './A4.ogg';
import A6 from './A6.ogg';
import B1 from './B1.ogg';
import B3 from './B3.ogg';
import B5 from './B5.ogg';
import B6 from './B6.ogg';
import C3 from './C3.ogg';
import C5 from './C5.ogg';
import D2 from './D2.ogg';
import D4 from './D4.ogg';
import D6 from './D6.ogg';
import D7 from './D7.ogg';
import E1 from './E1.ogg';
import E3 from './E3.ogg';
import E5 from './E5.ogg';
import F2 from './F2.ogg';
import F4 from './F4.ogg';
import F6 from './F6.ogg';
import F7 from './F7.ogg';
import G1 from './G1.ogg';
import G3 from './G3.ogg';
import G5 from './G5.ogg';

const
  AUDIO = {
    "A2": A2,
    "A4": A4,
    "A6": A6,
    "B1": B1,
    "B3": B3,
    "B5": B5,
    "B6": B6,
    "C3": C3,
    "C5": C5,
    "D2": D2,
    "D4": D4,
    "D6": D6,
    "D7": D7,
    "E1": E1,
    "E3": E3,
    "E5": E5,
    "F2": F2,
    "F4": F4,
    "F6": F6,
    "F7": F7,
    "G1": G1,
    "G3": G3,
    "G5": G5
  },
  AUDIO_MIN = {
    "A2": A2,
    "A6": A6,
    "B3": B3,
    "B6": B6,
    "C5": C5,
    "D4": D4,
    "D7": D7,
    "E3": E3,
    "F2": F2,
    "F6": F6,
    "G1": G1,
    "G5": G5
  };

export default class InstrumentHarpOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
