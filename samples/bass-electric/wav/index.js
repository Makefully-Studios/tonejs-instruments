import {Sampler} from 'tone';

// Audio Files
import As2 from './As2.wav';
import As3 from './As3.wav';
import As4 from './As4.wav';
import As5 from './As5.wav';
import Cs2 from './Cs2.wav';
import Cs3 from './Cs3.wav';
import Cs4 from './Cs4.wav';
import Cs5 from './Cs5.wav';
import Cs6 from './Cs6.wav';
import E2 from './E2.wav';
import E3 from './E3.wav';
import E4 from './E4.wav';
import E5 from './E5.wav';
import G2 from './G2.wav';
import G3 from './G3.wav';
import G4 from './G4.wav';
import G5 from './G5.wav';

const
  AUDIO = {
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "A#5": As5,
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "C#6": Cs6,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "E5": E5,
    "G2": G2,
    "G3": G3,
    "G4": G4,
    "G5": G5
  },
  AUDIO_MIN = {
    "A#2": As2,
    "A#4": As4,
    "C#2": Cs2,
    "C#4": Cs4,
    "C#6": Cs6,
    "E3": E3,
    "E5": E5,
    "G3": G3,
    "G5": G5
  };

export default class InstrumentBassElectricWav extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
