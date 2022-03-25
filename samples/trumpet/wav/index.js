import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.wav';
import A4 from './A4.wav';
import As3 from './As3.wav';
import C3 from './C3.wav';
import C5 from './C5.wav';
import D4 from './D4.wav';
import Ds3 from './Ds3.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import G3 from './G3.wav';

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

export default class InstrumentTrumpetWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
