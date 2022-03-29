import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.mp3';
import A3 from './A3.mp3';
import C2 from './C2.mp3';
import C4 from './C4.mp3';
import D3 from './D3.mp3';
import D5 from './D5.mp3';
import Ds2 from './Ds2.mp3';
import F3 from './F3.mp3';
import F5 from './F5.mp3';
import G2 from './G2.mp3';

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

export default class InstrumentFrenchHornMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
