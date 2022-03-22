import Tone from 'tone';

// Audio Files
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import As5 from './As5.ogg';
import Cs2 from './Cs2.ogg';
import Cs3 from './Cs3.ogg';
import Cs4 from './Cs4.ogg';
import Cs5 from './Cs5.ogg';
import Cs6 from './Cs6.ogg';
import E2 from './E2.ogg';
import E3 from './E3.ogg';
import E4 from './E4.ogg';
import E5 from './E5.ogg';
import G2 from './G2.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';

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

export default class InstrumentBassElectricOgg extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
