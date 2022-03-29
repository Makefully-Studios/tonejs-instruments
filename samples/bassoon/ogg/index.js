import {Sampler} from 'tone';

// Audio Files
import A2 from './A2.ogg';
import A3 from './A3.ogg';
import A4 from './A4.ogg';
import C3 from './C3.ogg';
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import E4 from './E4.ogg';
import G2 from './G2.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';

const
  AUDIO = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "E4": E4,
    "G2": G2,
    "G3": G3,
    "G4": G4
  },
  AUDIO_MIN = {
    "A2": A2,
    "A3": A3,
    "A4": A4,
    "C3": C3,
    "C4": C4,
    "C5": C5,
    "E4": E4,
    "G2": G2,
    "G3": G3,
    "G4": G4
  };

export default class InstrumentBassoonOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
