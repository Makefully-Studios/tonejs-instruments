import Tone from 'tone';

// Audio Files
import A2 from './A2.wav';
import A3 from './A3.wav';
import A4 from './A4.wav';
import As2 from './As2.wav';
import As3 from './As3.wav';
import As4 from './As4.wav';
import B2 from './B2.wav';
import B3 from './B3.wav';
import B4 from './B4.wav';
import C2 from './C2.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import C5 from './C5.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import D2 from './D2.wav';
import D3 from './D3.wav';
import D4 from './D4.wav';
import Ds2 from './Ds2.wav';
import Ds3 from './Ds3.wav';
import Ds4 from './Ds4.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import F2 v2 from './F2 v2.wav';
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import G2 v2 from './G2 v2.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';
import Gs4 from './Gs4.wav';

const
  AUDIO = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "B2": B2,
    "B3": B3,
    "B4": B4,
    "C2": C2,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "C#3": Cs3,
    "C#4": Cs4,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "F2 v2": F2 v2,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#3": Fs3,
    "F#4": Fs4,
    "G2 v2": G2 v2,
    "G2": G2,
    "G3": G3,
    "G4": G4,
    "G#2": Gs2,
    "G#3": Gs3,
    "G#4": Gs4
  },
  AUDIO_MIN = {
    "A2": A2,
    "A#3": As3,
    "B4": B4,
    "C5": C5,
    "D3": D3,
    "D#4": Ds4,
    "F2 v2": F2 v2,
    "F#3": Fs3,
    "G3": G3,
    "G#4": Gs4
  };

export default class InstrumentCelloWav extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
