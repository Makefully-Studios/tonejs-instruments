import {Sampler} from 'tone';

// Audio Files
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import As5 from './As5.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import D5 from './D5.ogg';
import D6 from './D6.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import F5 from './F5.ogg';
import Fs6 from './Fs6.ogg';

const
  AUDIO = {
    "A#3": As3,
    "A#4": As4,
    "A#5": As5,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D6": D6,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "F#6": Fs6
  },
  AUDIO_MIN = {
    "A#3": As3,
    "A#4": As4,
    "A#5": As5,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D6": D6,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "F#6": Fs6
  };

export default class InstrumentClarinetOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
