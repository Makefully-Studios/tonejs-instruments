import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.wav';
import A4 from './A4.wav';
import As2 from './As2.wav';
import As3 from './As3.wav';
import B2 from './B2.wav';
import B3 from './B3.wav';
import C3 from './C3.wav';
import C4 from './C4.wav';
import Cs2 from './Cs2.wav';
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
import F2 from './F2.wav';
import F3 from './F3.wav';
import F4 from './F4.wav';
import Fs2 from './Fs2.wav';
import Fs3 from './Fs3.wav';
import Fs4 from './Fs4.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import Gs2 from './Gs2.wav';
import Gs3 from './Gs3.wav';
import Gs4 from './Gs4.wav';

const
  AUDIO = {
    "A3": A3,
    "A4": A4,
    "A#2": As2,
    "A#3": As3,
    "B2": B2,
    "B3": B3,
    "C3": C3,
    "C4": C4,
    "C#2": Cs2,
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
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#2": Fs2,
    "F#3": Fs3,
    "F#4": Fs4,
    "G2": G2,
    "G3": G3,
    "G4": G4,
    "G#2": Gs2,
    "G#3": Gs3,
    "G#4": Gs4
  },
  AUDIO_MIN = {
    "A3": A3,
    "B2": B2,
    "C#2": Cs2,
    "D3": D3,
    "D#4": Ds4,
    "F2": F2,
    "F#3": Fs3,
    "G4": G4
  };

export default class InstrumentSaxophoneWav extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
