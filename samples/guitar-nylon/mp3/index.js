import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import As5 from './As5.mp3';
import B1 from './B1.mp3';
import B2 from './B2.mp3';
import B3 from './B3.mp3';
import B4 from './B4.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import Cs5 from './Cs5.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import D5 from './D5.mp3';
import Ds4 from './Ds4.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import E5 from './E5.mp3';
import Fs2 from './Fs2.mp3';
import Fs3 from './Fs3.mp3';
import Fs4 from './Fs4.mp3';
import Fs5 from './Fs5.mp3';
import G3 from './G3.mp3';
import G5 from './G5.mp3';
import Gs2 from './Gs2.mp3';
import Gs4 from './Gs4.mp3';
import Gs5 from './Gs5.mp3';

const
  AUDIO = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A#5": As5,
    "B1": B1,
    "B2": B2,
    "B3": B3,
    "B4": B4,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "D2": D2,
    "D3": D3,
    "D5": D5,
    "D#4": Ds4,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "E5": E5,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5,
    "G3": G3,
    "G5": G5,
    "G#2": Gs2,
    "G#4": Gs4,
    "G#5": Gs5
  },
  AUDIO_MIN = {
    "A2": A2,
    "A5": A5,
    "B2": B2,
    "C#3": Cs3,
    "D2": D2,
    "D#4": Ds4,
    "E4": E4,
    "F#3": Fs3,
    "G3": G3,
    "G#4": Gs4
  };

export default class InstrumentGuitarNylonMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
