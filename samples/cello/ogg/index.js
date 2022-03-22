import Tone from 'tone';

// Audio Files
import A2 from './A2.ogg';
import A3 from './A3.ogg';
import A4 from './A4.ogg';
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import B2 from './B2.ogg';
import B3 from './B3.ogg';
import B4 from './B4.ogg';
import C2 from './C2.ogg';
import C3 from './C3.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import Cs3 from './Cs3.ogg';
import Cs4 from './Cs4.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import Ds2 from './Ds2.ogg';
import Ds3 from './Ds3.ogg';
import Ds4 from './Ds4.ogg';
import E2 from './E2.ogg';
import E3 from './E3.ogg';
import E4 from './E4.ogg';
import F2 v2 from './F2 v2.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import Fs3 from './Fs3.ogg';
import Fs4 from './Fs4.ogg';
import G2 v2 from './G2 v2.ogg';
import G2 from './G2.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import Gs2 from './Gs2.ogg';
import Gs3 from './Gs3.ogg';
import Gs4 from './Gs4.ogg';

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

export default class InstrumentCelloOgg extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
