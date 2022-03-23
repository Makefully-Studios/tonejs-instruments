import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.mp3';
import As0 from './As0.mp3';
import B2 from './B2.mp3';
import C1 from './C1.mp3';
import Cs2 from './Cs2.mp3';
import D1 from './D1.mp3';
import E1 from './E1.mp3';
import E2 from './E2.mp3';
import Fs0 from './Fs0.mp3';
import Fs1 from './Fs1.mp3';
import G0 from './G0.mp3';
import Gs1 from './Gs1.mp3';
import Gs2 from './Gs2.mp3';

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

export default class InstrumentContrabassMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
