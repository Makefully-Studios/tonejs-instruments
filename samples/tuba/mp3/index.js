import {Sampler} from 'tone';

// Audio Files
import As0 from './As0.mp3';
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import D2 from './D2.mp3';
import D3 from './D3.mp3';
import Ds1 from './Ds1.mp3';
import F0 from './F0.mp3';
import F1 from './F1.mp3';
import F2 from './F2.mp3';

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

export default class InstrumentTubaMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
