import {Sampler} from 'tone';

// Audio Files
import As1 from './As1.mp3';
import As2 from './As2.mp3';
import As3 from './As3.mp3';
import As4 from './As4.mp3';
import Cs1 from './Cs1.mp3';
import Cs2 from './Cs2.mp3';
import Cs3 from './Cs3.mp3';
import Cs4 from './Cs4.mp3';
import Cs5 from './Cs5.mp3';
import E1 from './E1.mp3';
import E2 from './E2.mp3';
import E3 from './E3.mp3';
import E4 from './E4.mp3';
import G1 from './G1.mp3';
import G2 from './G2.mp3';
import G3 from './G3.mp3';
import G4 from './G4.mp3';

const
  AUDIO = {
    "A#1": As1,
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "C#1": Cs1,
    "C#2": Cs2,
    "C#3": Cs3,
    "C#4": Cs4,
    "C#5": Cs5,
    "E1": E1,
    "E2": E2,
    "E3": E3,
    "E4": E4,
    "G1": G1,
    "G2": G2,
    "G3": G3,
    "G4": G4
  },
  AUDIO_MIN = {
    "A#1": As1,
    "A#3": As3,
    "C#1": Cs1,
    "C#3": Cs3,
    "C#5": Cs5,
    "E2": E2,
    "E4": E4,
    "G2": G2,
    "G4": G4
  };

export default class InstrumentBassElectricMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
