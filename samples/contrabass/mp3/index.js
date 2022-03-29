import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.mp3';
import As1 from './As1.mp3';
import B3 from './B3.mp3';
import C2 from './C2.mp3';
import Cs3 from './Cs3.mp3';
import D2 from './D2.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import Fs1 from './Fs1.mp3';
import Fs2 from './Fs2.mp3';
import G1 from './G1.mp3';
import Gs2 from './Gs2.mp3';
import Gs3 from './Gs3.mp3';

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

export default class InstrumentContrabassMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
