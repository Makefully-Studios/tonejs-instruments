import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.mp3';
import A2 from './A2.mp3';
import A3 from './A3.mp3';
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import B1 from './B1.mp3';
import B2 from './B2.mp3';
import B3 from './B3.mp3';
import C2 from './C2.mp3';
import C3 from './C3.mp3';
import C4 from './C4.mp3';
import Cs2 from './Cs2.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import D1 from './D1.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import D4 from './D4.mp3';
import Ds1 from './Ds1.mp3';
import Ds2 from './Ds2.mp3';
import Ds3 from './Ds3.mp3';
import E1 from './E1.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import F1 from './F1.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import Fs1 from './Fs1.mp3';
import Fs2 from './Fs2.mp3';
import Fs3 from './Fs3.mp3';
import G1 from './G1.mp3';
import G2 from './G2.mp3';
import G3 from './G3.mp3';
import Gs1 from './Gs1.mp3';
import Gs2 from './Gs2.mp3';
import Gs3 from './Gs3.mp3';

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

export default class InstrumentGuitarAcousticMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
