import {Sampler} from 'tone';

// Audio Files
import A3 from './A3.ogg';
import A5 from './A5.ogg';
import As3 from './As3.ogg';
import C3 from './C3.ogg';
import C6 from './C6.ogg';
import D5 from './D5.ogg';
import Ds4 from './Ds4.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import F5 from './F5.ogg';
import G4 from './G4.ogg';

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

export default class InstrumentTrumpetOgg extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
