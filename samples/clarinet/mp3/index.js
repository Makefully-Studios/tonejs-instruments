import {Sampler} from 'tone';

// Audio Files
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import As4 from './As4.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import D5 from './D5.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import Fs5 from './Fs5.mp3';

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

export default class InstrumentClarinetMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
