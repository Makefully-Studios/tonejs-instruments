import {Sampler} from 'tone';

// Audio Files
import As3 from './As3.wav';
import As4 from './As4.wav';
import As5 from './As5.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import D5 from './D5.wav';
import D6 from './D6.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import F5 from './F5.wav';
import Fs6 from './Fs6.wav';

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

export default class InstrumentClarinetWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
