import {Sampler} from 'tone';

// Audio Files
import C4 from './C4.mp3';
import C5 from './C5.mp3';
import C6 from './C6.mp3';
import C7 from './C7.mp3';
import G3 from './G3.mp3';
import G4 from './G4.mp3';
import G5 from './G5.mp3';
import G6 from './G6.mp3';

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

export default class InstrumentXylophoneMp3 extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
