import {Sampler} from 'tone';

// Audio Files
import A0 from './A0.ogg';
import A2 from './A2.ogg';
import C1 from './C1.ogg';
import C3 from './C3.ogg';
import D2 from './D2.ogg';
import D4 from './D4.ogg';
import Ds1 from './Ds1.ogg';
import F2 from './F2.ogg';
import F4 from './F4.ogg';
import G1 from './G1.ogg';

const
  AUDIO = {
    "A0": A0,
    "A2": A2,
    "C1": C1,
    "C3": C3,
    "D2": D2,
    "D4": D4,
    "D#1": Ds1,
    "F2": F2,
    "F4": F4,
    "G1": G1
  },
  AUDIO_MIN = {
    "A0": A0,
    "A2": A2,
    "C1": C1,
    "C3": C3,
    "D2": D2,
    "D4": D4,
    "D#1": Ds1,
    "F2": F2,
    "F4": F4,
    "G1": G1
  };

export default class InstrumentFrenchHornOgg extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
