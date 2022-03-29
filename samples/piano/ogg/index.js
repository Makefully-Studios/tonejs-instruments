import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.ogg';
import A2 from './A2.ogg';
import A3 from './A3.ogg';
import A4 from './A4.ogg';
import A5 from './A5.ogg';
import A6 from './A6.ogg';
import A7 from './A7.ogg';
import As1 from './As1.ogg';
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import As5 from './As5.ogg';
import As6 from './As6.ogg';
import As7 from './As7.ogg';
import B1 from './B1.ogg';
import B2 from './B2.ogg';
import B3 from './B3.ogg';
import B4 from './B4.ogg';
import B5 from './B5.ogg';
import B6 from './B6.ogg';
import B7 from './B7.ogg';
import C1 from './C1.ogg';
import C2 from './C2.ogg';
import C3 from './C3.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import C7 from './C7.ogg';
import C8 from './C8.ogg';
import Cs1 from './Cs1.ogg';
import Cs2 from './Cs2.ogg';
import Cs3 from './Cs3.ogg';
import Cs4 from './Cs4.ogg';
import Cs5 from './Cs5.ogg';
import Cs6 from './Cs6.ogg';
import Cs7 from './Cs7.ogg';
import D1 from './D1.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import D5 from './D5.ogg';
import D6 from './D6.ogg';
import D7 from './D7.ogg';
import Ds1 from './Ds1.ogg';
import Ds2 from './Ds2.ogg';
import Ds3 from './Ds3.ogg';
import Ds4 from './Ds4.ogg';
import Ds5 from './Ds5.ogg';
import Ds6 from './Ds6.ogg';
import Ds7 from './Ds7.ogg';
import E1 from './E1.ogg';
import E2 from './E2.ogg';
import E3 from './E3.ogg';
import E4 from './E4.ogg';
import E5 from './E5.ogg';
import E6 from './E6.ogg';
import E7 from './E7.ogg';
import F1 from './F1.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import F5 from './F5.ogg';
import F6 from './F6.ogg';
import F7 from './F7.ogg';
import Fs1 from './Fs1.ogg';
import Fs2 from './Fs2.ogg';
import Fs3 from './Fs3.ogg';
import Fs4 from './Fs4.ogg';
import Fs5 from './Fs5.ogg';
import Fs6 from './Fs6.ogg';
import Fs7 from './Fs7.ogg';
import G1 from './G1.ogg';
import G2 from './G2.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';
import G6 from './G6.ogg';
import G7 from './G7.ogg';
import Gs1 from './Gs1.ogg';
import Gs2 from './Gs2.ogg';
import Gs3 from './Gs3.ogg';
import Gs4 from './Gs4.ogg';
import Gs5 from './Gs5.ogg';
import Gs6 from './Gs6.ogg';
import Gs7 from './Gs7.ogg';

const
  AUDIO = {
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "A7": A7,
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "A#5": As5,
    "A#6": As6,
    "A#7": As7,
    "B1": B1,
    "B2": B2,
    "B3": B3,
    "B4": B4,
    "B5": B5,
    "B6": B6,
    "B7": B7,
    "C1": C1,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C8": C8,
    "C#1": Cs1,
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "C#6": Cs6,
    "C#7": Cs7,
    "D1": D1,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D6": D6,
    "D7": D7,
    "D#1": Ds1,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "D#5": Ds5,
    "D#6": Ds6,
    "D#7": Ds7,
    "E1": E1,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "E7": E7,
    "F1": F1,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "F6": F6,
    "F7": F7,
    "F#1": Fs1,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5,
    "F#6": Fs6,
    "F#7": Fs7,
    "G1": G1,
    "G2": G2,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G7": G7,
    "G#1": Gs1,
    "G#2": Gs2,
    "G#3": Gs3,
    "G#4": Gs4,
    "G#5": Gs5,
    "G#6": Gs6,
    "G#7": Gs7
  },
  AUDIO_MIN = {
    "A1": A1,
    "A#4": As4,
    "B7": B7,
    "C#2": Cs2,
    "D5": D5,
    "E1": E1,
    "F4": F4,
    "F#7": Fs7,
    "G#3": Gs3
  };

export default class InstrumentPianoOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
