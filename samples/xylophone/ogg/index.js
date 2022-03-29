import {Sampler} from 'tone';

// Audio Files
import C5 from './C5.ogg';
import C6 from './C6.ogg';
import C7 from './C7.ogg';
import C8 from './C8.ogg';
import G4 from './G4.ogg';
import G5 from './G5.ogg';
import G6 from './G6.ogg';
import G7 from './G7.ogg';

const
  AUDIO = {
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C8": C8,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G7": G7
  },
  AUDIO_MIN = {
    "C5": C5,
    "C6": C6,
    "C7": C7,
    "C8": C8,
    "G4": G4,
    "G5": G5,
    "G6": G6,
    "G7": G7
  };

export default class InstrumentXylophoneOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
