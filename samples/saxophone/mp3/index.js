import {Sampler} from 'tone';

// Audio Files
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import As3 from './As3.mp3';
import As4 from './As4.mp3';
import B3 from './B3.mp3';
import B4 from './B4.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import Cs5 from './Cs5.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import D5 from './D5.mp3';
import Ds3 from './Ds3.mp3';
import Ds4 from './Ds4.mp3';
import Ds5 from './Ds5.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import E5 from './E5.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import F5 from './F5.mp3';
import Fs3 from './Fs3.mp3';
import Fs4 from './Fs4.mp3';
import Fs5 from './Fs5.mp3';
import G3 from './G3.mp3';
import G4 from './G4.mp3';
import G5 from './G5.mp3';
import Gs3 from './Gs3.mp3';
import Gs4 from './Gs4.mp3';
import Gs5 from './Gs5.mp3';

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

export default class InstrumentSaxophoneMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
