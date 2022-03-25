import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import As5 from './As5.wav';
import B1 from './B1.wav';
import B2 from './B2.wav';
import B3 from './B3.wav';
import B4 from './B4.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import Cs5 from './Cs5.wav';
import D2 from './D2.wav';
import D3 from './D3.wav';
import D5 from './D5.wav';
import Ds4 from './Ds4.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import Fs5 from './Fs5.wav';
import G3 from './G3.wav';
import G5 from './G5.wav';
import Gs2 from './Gs2.wav';
import Gs4 from './Gs4.wav';
import Gs5 from './Gs5.wav';

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

export default class InstrumentGuitarNylonWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
