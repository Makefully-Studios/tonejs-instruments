import {Sampler} from 'tone';

// Audio Files
import As0 from './As0.ogg';
import As1 from './As1.ogg';
import As2 from './As2.ogg';
import C2 from './C2.ogg';
import C3 from './C3.ogg';
import Cs1 from './Cs1.ogg';
import Cs3 from './Cs3.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import Ds1 from './Ds1.ogg';
import Ds2 from './Ds2.ogg';
import Ds3 from './Ds3.ogg';
import F1 from './F1.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import Gs1 from './Gs1.ogg';
import Gs2 from './Gs2.ogg';

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

export default class InstrumentTromboneOgg extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
