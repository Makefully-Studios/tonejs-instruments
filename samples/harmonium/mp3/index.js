import Tone from 'tone';

// Audio Files
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import A4 from './A4.mp3';
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import As4 from './As4.mp3';
import B2 from './B2.mp3';
import B3 from './B3.mp3';
import B4 from './B4.mp3';
import C2 from './C2.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import Cs2 from './Cs2.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import Cs5 from './Cs5.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import D5 from './D5.mp3';
import Ds2 from './Ds2.mp3';
import Ds3 from './Ds3.mp3';
import Ds4 from './Ds4.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import Fs2 from './Fs2.mp3';
import Fs3 from './Fs3.mp3';
import G2 from './G2.mp3';
import G3 from './G3.mp3';
import G4 from './G4.mp3';
import Gs2 from './Gs2.mp3';
import Gs3 from './Gs3.mp3';
import Gs4 from './Gs4.mp3';

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
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "D#2": Ds2,
    "D#3": Ds3,
    "D#4": Ds4,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#2": Fs2,
    "F#3": Fs3,
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
    "C#5": Cs5,
    "D5": D5,
    "E2": E2,
    "F3": F3,
    "G2": G2,
    "G#3": Gs3
  };

export default class InstrumentHarmoniumMp3 extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
