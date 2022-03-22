import Tone from 'tone';

// Audio Files
import As0 from './As0.mp3';
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import C2 from './C2.mp3';
import C3 from './C3.mp3';
import Cs1 from './Cs1.mp3';
import Cs3 from './Cs3.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import Ds1 from './Ds1.mp3';
import Ds2 from './Ds2.mp3';
import Ds3 from './Ds3.mp3';
import F1 from './F1.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import Gs1 from './Gs1.mp3';
import Gs2 from './Gs2.mp3';

const
  AUDIO = {
    "A#0": As0,
    "A#1": As1,
    "A#2": As2,
    "C2": C2,
    "C3": C3,
    "C#1": Cs1,
    "C#3": Cs3,
    "D2": D2,
    "D3": D3,
    "D#1": Ds1,
    "D#2": Ds2,
    "D#3": Ds3,
    "F1": F1,
    "F2": F2,
    "F3": F3,
    "G#1": Gs1,
    "G#2": Gs2
  },
  AUDIO_MIN = {
    "A#0": As0,
    "A#2": As2,
    "C3": C3,
    "C#3": Cs3,
    "D3": D3,
    "D#2": Ds2,
    "F1": F1,
    "F3": F3,
    "G#2": Gs2
  };

export default class InstrumentTromboneMp3 extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
