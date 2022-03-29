import {Sampler} from 'tone';

// Audio Files
import As1 from './As1.ogg';
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import Ds2 from './Ds2.ogg';
import F1 from './F1.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';

const
  AUDIO = {
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "D3": D3,
    "D4": D4,
    "D#2": Ds2,
    "F1": F1,
    "F2": F2,
    "F3": F3
  },
  AUDIO_MIN = {
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "D3": D3,
    "D4": D4,
    "D#2": Ds2,
    "F1": F1,
    "F2": F2,
    "F3": F3
  };

export default class InstrumentTubaOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
