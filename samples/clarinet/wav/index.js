import {Sampler} from 'tone';

// Audio Files
import As2 from './As2.wav';
import As3 from './As3.wav';
import As4 from './As4.wav';
import D2 from './D2.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import D5 from './D5.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import Fs5 from './Fs5.wav';

const
  AUDIO = {
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#5": Fs5
  },
  AUDIO_MIN = {
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#5": Fs5
  };

export default class InstrumentClarinetWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
