import Tone from 'tone';

// Audio Files
import A1 from './A1.wav';
import A2 from './A2.wav';
import A3 from './A3.wav';
import As1 from './As1.wav';
import As2 from './As2.wav';
import As3 from './As3.wav';
import B1 from './B1.wav';
import B2 from './B2.wav';
import B3 from './B3.wav';
import C2 from './C2.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import Cs2 from './Cs2.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import D1 from './D1.wav';
import D2 from './D2.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import Ds1 from './Ds1.wav';
import Ds2 from './Ds2.wav';
import Ds3 from './Ds3.wav';
import E1 from './E1.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import F1 from './F1.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import Fs1 from './Fs1.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import G1 from './G1.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import Gs1 from './Gs1.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';

const
  AUDIO = {
    "A1": A1,
    "A2": A2,
    "A3": A3,
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "B1": B1,
    "B2": B2,
    "B3": B3,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "D1": D1,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D#1": Ds1,
    "D#2": Ds2,
    "D#3": Ds3,
    "E1": E1,
    "E2": E2,
    "E3": E3,
    "F1": F1,
    "F2": F2,
    "F3": F3,
    "F#1": Fs1,
    "F#2": Fs2,
    "F#3": Fs3,
    "G1": G1,
    "G2": G2,
    "G3": G3,
    "G#1": Gs1,
    "G#2": Gs2,
    "G#3": Gs3
  },
  AUDIO_MIN = {
    "A1": A1,
    "A#2": As2,
    "B3": B3,
    "C#2": Cs2,
    "D2": D2,
    "D#2": Ds2,
    "E3": E3,
    "F#1": Fs1,
    "G2": G2,
    "G#3": Gs3
  };

export default class InstrumentGuitarAcousticWav extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
