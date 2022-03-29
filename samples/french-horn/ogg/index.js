import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.ogg';
import A3 from './A3.ogg';
import C2 from './C2.ogg';
import C4 from './C4.ogg';
import D3 from './D3.ogg';
import D5 from './D5.ogg';
import Ds2 from './Ds2.ogg';
import F3 from './F3.ogg';
import F5 from './F5.ogg';
import G2 from './G2.ogg';

const
  AUDIO = {
    "A1": A1,
    "A3": A3,
    "C2": C2,
    "C4": C4,
    "D3": D3,
    "D5": D5,
    "D#2": Ds2,
    "F3": F3,
    "F5": F5,
    "G2": G2
  },
  AUDIO_MIN = {
    "A1": A1,
    "A3": A3,
    "C2": C2,
    "C4": C4,
    "D3": D3,
    "D5": D5,
    "D#2": Ds2,
    "F3": F3,
    "F5": F5,
    "G2": G2
  };

export default class InstrumentFrenchHornOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
