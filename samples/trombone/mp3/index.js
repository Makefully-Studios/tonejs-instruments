import {Sampler} from 'tone';

// Audio Files
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import Cs2 from './Cs2.mp3';
import Cs4 from './Cs4.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import Ds2 from './Ds2.mp3';
import Ds3 from './Ds3.mp3';
import Ds4 from './Ds4.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import Gs2 from './Gs2.mp3';
import Gs3 from './Gs3.mp3';

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

export default class InstrumentTromboneMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
