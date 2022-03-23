import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.ogg';
import A2 from './A2.ogg';
import A3 from './A3.ogg';
import A4 from './A4.ogg';
import A5 from './A5.ogg';
import C1 from './C1.ogg';
import C2 from './C2.ogg';
import C3 from './C3.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import Ds1 from './Ds1.ogg';
import Ds2 from './Ds2.ogg';
import Ds3 from './Ds3.ogg';
import Ds4 from './Ds4.ogg';
import Ds5 from './Ds5.ogg';
import Fs1 from './Fs1.ogg';
import Fs2 from './Fs2.ogg';
import Fs3 from './Fs3.ogg';
import Fs4 from './Fs4.ogg';
import Fs5 from './Fs5.ogg';

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

export default class InstrumentOrganOgg extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
