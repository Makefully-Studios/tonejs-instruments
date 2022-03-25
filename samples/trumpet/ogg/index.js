import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.ogg';
import A4 from './A4.ogg';
import As3 from './As3.ogg';
import C3 from './C3.ogg';
import C5 from './C5.ogg';
import D4 from './D4.ogg';
import Ds3 from './Ds3.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import G3 from './G3.ogg';

const
  AUDIO = {
    "A2": A2,
    "A4": A4,
    "A#3": As3,
    "C3": C3,
    "C5": C5,
    "D4": D4,
    "D#3": Ds3,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "G3": G3
  },
  AUDIO_MIN = {
    "A2": A2,
    "A4": A4,
    "A#3": As3,
    "C3": C3,
    "C5": C5,
    "D4": D4,
    "D#3": Ds3,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "G3": G3
  };

export default class InstrumentTrumpetOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
