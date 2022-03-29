import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.wav';
import As1 from './As1.wav';
import B3 from './B3.wav';
import C2 from './C2.wav';
import Cs3 from './Cs3.wav';
import D2 from './D2.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import Fs1 from './Fs1.wav';
import Fs2 from './Fs2.wav';
import G1 from './G1.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';

const
  AUDIO = {
    "A2": A2,
    "A#1": As1,
    "B3": B3,
    "C2": C2,
    "C#3": Cs3,
    "D2": D2,
    "E2": E2,
    "E3": E3,
    "F#1": Fs1,
    "F#2": Fs2,
    "G1": G1,
    "G#2": Gs2,
    "G#3": Gs3
  },
  AUDIO_MIN = {
    "A2": A2,
    "A#1": As1,
    "B3": B3,
    "C2": C2,
    "C#3": Cs3,
    "D2": D2,
    "E2": E2,
    "E3": E3,
    "F#1": Fs1,
    "F#2": Fs2,
    "G1": G1,
    "G#2": Gs2,
    "G#3": Gs3
  };

export default class InstrumentContrabassWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
