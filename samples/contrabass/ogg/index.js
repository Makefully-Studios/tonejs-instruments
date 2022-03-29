import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.ogg';
import As1 from './As1.ogg';
import B3 from './B3.ogg';
import C2 from './C2.ogg';
import Cs3 from './Cs3.ogg';
import D2 from './D2.ogg';
import E2 from './E2.ogg';
import E3 from './E3.ogg';
import Fs1 from './Fs1.ogg';
import Fs2 from './Fs2.ogg';
import G1 from './G1.ogg';
import Gs2 from './Gs2.ogg';
import Gs3 from './Gs3.ogg';

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

export default class InstrumentContrabassOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
