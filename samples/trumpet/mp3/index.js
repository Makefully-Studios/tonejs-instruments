import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.mp3';
import A5 from './A5.mp3';
import As3 from './As3.mp3';
import C3 from './C3.mp3';
import C6 from './C6.mp3';
import D5 from './D5.mp3';
import Ds4 from './Ds4.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import F5 from './F5.mp3';
import G4 from './G4.mp3';

const
  AUDIO = {
    "A3": A3,
    "A5": A5,
    "A#3": As3,
    "C3": C3,
    "C6": C6,
    "D5": D5,
    "D#4": Ds4,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "G4": G4
  },
  AUDIO_MIN = {
    "A3": A3,
    "A5": A5,
    "A#3": As3,
    "C3": C3,
    "C6": C6,
    "D5": D5,
    "D#4": Ds4,
    "F3": F3,
    "F4": F4,
    "F5": F5,
    "G4": G4
  };

export default class InstrumentTrumpetMp3 extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
