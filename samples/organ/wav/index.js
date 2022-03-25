import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.wav';
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import C1 from './C1.wav';
import C2 from './C2.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import Ds1 from './Ds1.wav';
import Ds2 from './Ds2.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import Ds5 from './Ds5.wav';
import Fs1 from './Fs1.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import Fs5 from './Fs5.wav';

const
  AUDIO = {
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "C1": C1,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "D#1": Ds1,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "D#5": Ds5,
    "F#1": Fs1,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5
  },
  AUDIO_MIN = {
    "A1": A1,
    "A3": A3,
    "A5": A5,
    "C2": C2,
    "C4": C4,
    "C6": C6,
    "D#2": Ds2,
    "D#4": Ds4,
    "F#1": Fs1,
    "F#3": Fs3,
    "F#5": Fs5
  };

export default class InstrumentOrganWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
