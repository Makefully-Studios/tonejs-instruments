import Tone from 'tone';

// Audio Files
import As0 from './As0.ogg';
import As1 from './As1.ogg';
import As2 from './As2.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import Ds1 from './Ds1.ogg';
import F0 from './F0.ogg';
import F1 from './F1.ogg';
import F2 from './F2.ogg';

const
  AUDIO = {
    "A#0": As0,
    "A#1": As1,
    "A#2": As2,
    "D2": D2,
    "D3": D3,
    "D#1": Ds1,
    "F0": F0,
    "F1": F1,
    "F2": F2
  },
  AUDIO_MIN = {
    "A#0": As0,
    "A#1": As1,
    "A#2": As2,
    "D2": D2,
    "D3": D3,
    "D#1": Ds1,
    "F0": F0,
    "F1": F1,
    "F2": F2
  };

export default class InstrumentTubaOgg extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
