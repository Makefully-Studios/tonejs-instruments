import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.wav';
import As0 from './As0.wav';
import B2 from './B2.wav';
import C1 from './C1.wav';
import Cs2 from './Cs2.wav';
import D1 from './D1.wav';
import E1 from './E1.wav';
import E2 from './E2.wav';
import Fs0 from './Fs0.wav';
import Fs1 from './Fs1.wav';
import G0 from './G0.wav';
import Gs1 from './Gs1.wav';
import Gs2 from './Gs2.wav';

const
  AUDIO = {
    "A1": A1,
    "A#0": As0,
    "B2": B2,
    "C1": C1,
    "C#2": Cs2,
    "D1": D1,
    "E1": E1,
    "E2": E2,
    "F#0": Fs0,
    "F#1": Fs1,
    "G0": G0,
    "G#1": Gs1,
    "G#2": Gs2
  },
  AUDIO_MIN = {
    "A1": A1,
    "A#0": As0,
    "B2": B2,
    "C1": C1,
    "C#2": Cs2,
    "D1": D1,
    "E1": E1,
    "E2": E2,
    "F#0": Fs0,
    "F#1": Fs1,
    "G0": G0,
    "G#1": Gs1,
    "G#2": Gs2
  };

export default class InstrumentContrabassWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
