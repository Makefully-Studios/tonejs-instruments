import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import Cs2 from './Cs2.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import Ds5 from './Ds5.wav';
import E2 from './E2.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import Fs5 from './Fs5.wav';

const
  AUDIO = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C#2": Cs2,
    "D#3": Ds3,
    "D#4": Ds4,
    "D#5": Ds5,
    "E2": E2,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5
  },
  AUDIO_MIN = {
    "A2": A2,
    "A4": A4,
    "C3": C3,
    "C5": C5,
    "C#2": Cs2,
    "D#4": Ds4,
    "E2": E2,
    "F#3": Fs3,
    "F#5": Fs5
  };

export default class InstrumentGuitarElectricWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
