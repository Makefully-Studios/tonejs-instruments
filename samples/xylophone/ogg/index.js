import {Sampler} from 'tone';

// Audio Files
import C4 from './C4.ogg';
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import C7 from './C7.ogg';
import G3 from './G3.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';
import G6 from './G6.ogg';

const
  AUDIO = {
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  },
  AUDIO_MIN = {
    "C4": C4,
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "G3": G3,
    "G4": G4,
    "G5": G5,
    "G6": G6
  };

export default class InstrumentXylophoneOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
