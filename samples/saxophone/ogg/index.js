import {Sampler} from 'tone';

// Audio Files
import A4 from './A4.ogg';
import A5 from './A5.ogg';
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import B3 from './B3.ogg';
import B4 from './B4.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import Cs3 from './Cs3.ogg';
import Cs4 from './Cs4.ogg';
import Cs5 from './Cs5.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import D5 from './D5.ogg';
import Ds3 from './Ds3.ogg';
import Ds4 from './Ds4.ogg';
import Ds5 from './Ds5.ogg';
import E3 from './E3.ogg';
import E4 from './E4.ogg';
import E5 from './E5.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import F5 from './F5.ogg';
import Fs3 from './Fs3.ogg';
import Fs4 from './Fs4.ogg';
import Fs5 from './Fs5.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';
import Gs3 from './Gs3.ogg';
import Gs4 from './Gs4.ogg';
import Gs5 from './Gs5.ogg';

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

export default class InstrumentSaxophoneOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
