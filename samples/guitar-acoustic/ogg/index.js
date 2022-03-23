import {Sampler} from 'tone';

// Audio Files
import A1 from './A1.ogg';
import A2 from './A2.ogg';
import A3 from './A3.ogg';
import As1 from './As1.ogg';
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import B1 from './B1.ogg';
import B2 from './B2.ogg';
import B3 from './B3.ogg';
import C2 from './C2.ogg';
import C3 from './C3.ogg';
import C4 from './C4.ogg';
import Cs2 from './Cs2.ogg';
import Cs3 from './Cs3.ogg';
import Cs4 from './Cs4.ogg';
import D1 from './D1.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import Ds1 from './Ds1.ogg';
import Ds2 from './Ds2.ogg';
import Ds3 from './Ds3.ogg';
import E1 from './E1.ogg';
import E2 from './E2.ogg';
import E3 from './E3.ogg';
import F1 from './F1.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import Fs1 from './Fs1.ogg';
import Fs2 from './Fs2.ogg';
import Fs3 from './Fs3.ogg';
import G1 from './G1.ogg';
import G2 from './G2.ogg';
import G3 from './G3.ogg';
import Gs1 from './Gs1.ogg';
import Gs2 from './Gs2.ogg';
import Gs3 from './Gs3.ogg';

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

export default class InstrumentGuitarAcousticOgg extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
