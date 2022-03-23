import {Sampler} from 'tone';

// Audio Files
import A0 from './A0.mp3';
import A2 from './A2.mp3';
import C1 from './C1.mp3';
import C3 from './C3.mp3';
import D2 from './D2.mp3';
import D4 from './D4.mp3';
import Ds1 from './Ds1.mp3';
import F2 from './F2.mp3';
import F4 from './F4.mp3';
import G1 from './G1.mp3';

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

export default class InstrumentFrenchHornMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
