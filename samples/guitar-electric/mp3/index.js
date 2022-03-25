import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import C6 from './C6.mp3';
import Cs2 from './Cs2.mp3';
import Ds3 from './Ds3.mp3';
import Ds4 from './Ds4.mp3';
import Ds5 from './Ds5.mp3';
import E2 from './E2.mp3';
import Fs2 from './Fs2.mp3';
import Fs3 from './Fs3.mp3';
import Fs4 from './Fs4.mp3';
import Fs5 from './Fs5.mp3';

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

export default class InstrumentGuitarElectricMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
