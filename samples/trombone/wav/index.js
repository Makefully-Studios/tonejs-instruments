import {Sampler} from 'tone';

// Audio Files
import As1 from './As1.wav';
import As2 from './As2.wav';
import As3 from './As3.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import Cs2 from './Cs2.wav';
import Cs4 from './Cs4.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import Ds2 from './Ds2.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';

const
  AUDIO = {
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "C3": C3,
    "C4": C4,
    "C#2": Cs2,
    "C#4": Cs4,
    "D3": D3,
    "D4": D4,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "G#2": Gs2,
    "G#3": Gs3
  },
  AUDIO_MIN = {
    "A#1": As1,
    "A#3": As3,
    "C4": C4,
    "C#4": Cs4,
    "D4": D4,
    "D#3": Ds3,
    "F2": F2,
    "F4": F4,
    "G#3": Gs3
  };

export default class InstrumentTromboneWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
