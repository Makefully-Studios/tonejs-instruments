import {Sampler} from 'tone';

// Audio Files
import A4 from './A4.wav';
import A5 from './A5.wav';
import As3 from './As3.wav';
import As4 from './As4.wav';
import B3 from './B3.wav';
import B4 from './B4.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import Cs5 from './Cs5.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import D5 from './D5.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import Ds5 from './Ds5.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import F5 from './F5.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import Fs5 from './Fs5.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';
import Gs3 from './Gs3.wav';
import Gs4 from './Gs4.wav';
import Gs5 from './Gs5.wav';

const
  AUDIO = {
    "A4": A4,
    "A5": A5,
    "A#3": As3,
    "A#4": As4,
    "B3": B3,
    "B4": B4,
    "C4": C4,
    "C5": C5,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D#3": Ds3,
    "D#4": Ds4,
    "D#5": Ds5,
    "E3": E3,
    "E4": E4,
    "E5": E5,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G#3": Gs3,
    "G#4": Gs4,
    "G#5": Gs5
  },
  AUDIO_MIN = {
    "A4": A4,
    "B3": B3,
    "C#3": Cs3,
    "D4": D4,
    "D#5": Ds5,
    "F3": F3,
    "F#4": Fs4,
    "G5": G5
  };

export default class InstrumentSaxophoneWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
