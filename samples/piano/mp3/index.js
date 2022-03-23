import {Sampler} from 'tone';

// Audio Files
import A0 from './A0.mp3';
import A1 from './A1.mp3';
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import A4 from './A4.mp3';
import A5 from './A5.mp3';
import A6 from './A6.mp3';
import As0 from './As0.mp3';
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import As4 from './As4.mp3';
import As5 from './As5.mp3';
import As6 from './As6.mp3';
import B0 from './B0.mp3';
import B1 from './B1.mp3';
import B2 from './B2.mp3';
import B3 from './B3.mp3';
import B4 from './B4.mp3';
import B5 from './B5.mp3';
import B6 from './B6.mp3';
import C0 from './C0.mp3';
import C1 from './C1.mp3';
import C2 from './C2.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import C6 from './C6.mp3';
import C7 from './C7.mp3';
import Cs0 from './Cs0.mp3';
import Cs1 from './Cs1.mp3';
import Cs2 from './Cs2.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import Cs5 from './Cs5.mp3';
import Cs6 from './Cs6.mp3';
import D0 from './D0.mp3';
import D1 from './D1.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import D5 from './D5.mp3';
import D6 from './D6.mp3';
import Ds0 from './Ds0.mp3';
import Ds1 from './Ds1.mp3';
import Ds2 from './Ds2.mp3';
import Ds3 from './Ds3.mp3';
import Ds4 from './Ds4.mp3';
import Ds5 from './Ds5.mp3';
import Ds6 from './Ds6.mp3';
import E0 from './E0.mp3';
import E1 from './E1.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import E5 from './E5.mp3';
import E6 from './E6.mp3';
import F0 from './F0.mp3';
import F1 from './F1.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import F5 from './F5.mp3';
import F6 from './F6.mp3';
import Fs0 from './Fs0.mp3';
import Fs1 from './Fs1.mp3';
import Fs2 from './Fs2.mp3';
import Fs3 from './Fs3.mp3';
import Fs4 from './Fs4.mp3';
import Fs5 from './Fs5.mp3';
import Fs6 from './Fs6.mp3';
import G0 from './G0.mp3';
import G1 from './G1.mp3';
import G2 from './G2.mp3';
import G3 from './G3.mp3';
import G4 from './G4.mp3';
import G5 from './G5.mp3';
import G6 from './G6.mp3';
import Gs0 from './Gs0.mp3';
import Gs1 from './Gs1.mp3';
import Gs2 from './Gs2.mp3';
import Gs3 from './Gs3.mp3';
import Gs4 from './Gs4.mp3';
import Gs5 from './Gs5.mp3';
import Gs6 from './Gs6.mp3';

const
  AUDIO = {
    "A0": A0,
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "A#0": As0,
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "A#5": As5,
    "A#6": As6,
    "B0": B0,
    "B1": B1,
    "B2": B2,
    "B3": B3,
    "B4": B4,
    "B5": B5,
    "B6": B6,
    "C0": C0,
    "C1": C1,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C#0": Cs0,
    "C#1": Cs1,
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "C#6": Cs6,
    "D0": D0,
    "D1": D1,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D6": D6,
    "D#0": Ds0,
    "D#1": Ds1,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "D#5": Ds5,
    "D#6": Ds6,
    "E0": E0,
    "E1": E1,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "F0": F0,
    "F1": F1,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "F6": F6,
    "F#0": Fs0,
    "F#1": Fs1,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "F#5": Fs5,
    "F#6": Fs6,
    "G0": G0,
    "G1": G1,
    "G2": G2,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G#0": Gs0,
    "G#1": Gs1,
    "G#2": Gs2,
    "G#3": Gs3,
    "G#4": Gs4,
    "G#5": Gs5,
    "G#6": Gs6
  },
  AUDIO_MIN = {
    "A0": A0,
    "A#3": As3,
    "B6": B6,
    "C#1": Cs1,
    "D4": D4,
    "E0": E0,
    "F3": F3,
    "F#6": Fs6,
    "G#2": Gs2
  };

export default class InstrumentPianoMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
