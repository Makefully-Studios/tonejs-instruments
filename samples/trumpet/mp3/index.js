import Tone from 'tone';

// Audio Files
import A2 from './A2.mp3';
import A4 from './A4.mp3';
import As3 from './As3.mp3';
import C3 from './C3.mp3';
import C5 from './C5.mp3';
import D4 from './D4.mp3';
import Ds3 from './Ds3.mp3';
import F2 from './F2.mp3';
import F3 from './F3.mp3';
import F4 from './F4.mp3';
import G3 from './G3.mp3';

const
  AUDIO = {
    "A2": A2,
    "A4": A4,
    "A#3": As3,
    "C3": C3,
    "C5": C5,
    "D4": D4,
    "D#3": Ds3,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "G3": G3
  },
  AUDIO_MIN = {
    "A2": A2,
    "A4": A4,
    "A#3": As3,
    "C3": C3,
    "C5": C5,
    "D4": D4,
    "D#3": Ds3,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "G3": G3
  };

export default class InstrumentTrumpetMp3 extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
