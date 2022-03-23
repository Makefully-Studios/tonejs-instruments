import {Sampler} from 'tone';

// Audio Files
import A0 from './A0.wav';
import A1 from './A1.wav';
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import A5 from './A5.wav';
import A6 from './A6.wav';
import As0 from './As0.wav';
import As1 from './As1.wav';
import As2 from './As2.wav';
import As3 from './As3.wav';
import As4 from './As4.wav';
import As5 from './As5.wav';
import As6 from './As6.wav';
import B0 from './B0.wav';
import B1 from './B1.wav';
import B2 from './B2.wav';
import B3 from './B3.wav';
import B4 from './B4.wav';
import B5 from './B5.wav';
import B6 from './B6.wav';
import C0 from './C0.wav';
import C1 from './C1.wav';
import C2 from './C2.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import C6 from './C6.wav';
import C7 from './C7.wav';
import Cs0 from './Cs0.wav';
import Cs1 from './Cs1.wav';
import Cs2 from './Cs2.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import Cs5 from './Cs5.wav';
import Cs6 from './Cs6.wav';
import D0 from './D0.wav';
import D1 from './D1.wav';
import D2 from './D2.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import D5 from './D5.wav';
import D6 from './D6.wav';
import Ds0 from './Ds0.wav';
import Ds1 from './Ds1.wav';
import Ds2 from './Ds2.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import Ds5 from './Ds5.wav';
import Ds6 from './Ds6.wav';
import E0 from './E0.wav';
import E1 from './E1.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';
import E6 from './E6.wav';
import F0 from './F0.wav';
import F1 from './F1.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import F5 from './F5.wav';
import F6 from './F6.wav';
import Fs0 from './Fs0.wav';
import Fs1 from './Fs1.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import Fs5 from './Fs5.wav';
import Fs6 from './Fs6.wav';
import G0 from './G0.wav';
import G1 from './G1.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';
import G6 from './G6.wav';
import Gs0 from './Gs0.wav';
import Gs1 from './Gs1.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';
import Gs4 from './Gs4.wav';
import Gs5 from './Gs5.wav';
import Gs6 from './Gs6.wav';

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

export default class InstrumentPianoWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
