import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.ogg';
import A4 from './A4.ogg';
import A5 from './A5.ogg';
import A6 from './A6.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import C7 from './C7.ogg';
import E4 from './E4.ogg';
import E5 from './E5.ogg';
import E6 from './E6.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';
import G6 from './G6.ogg';

const
  AUDIO = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  },
  AUDIO_MIN = {
    "A3": A3,
    "A4": A4,
    "A5": A5,
    "A6": A6,
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "E4": E4,
    "E5": E5,
    "E6": E6,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  };

export default class InstrumentViolinOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
