import Tone from 'tone';

// Audio Files
import A2 from './A2.mp3';
import A4 from './A4.mp3';
import A6 from './A6.mp3';
import B1 from './B1.mp3';
import B3 from './B3.mp3';
import B5 from './B5.mp3';
import B6 from './B6.mp3';
import C3 from './C3.mp3';
import C5 from './C5.mp3';
import D2 from './D2.mp3';
import D4 from './D4.mp3';
import D6 from './D6.mp3';
import D7 from './D7.mp3';
import E1 from './E1.mp3';
import E3 from './E3.mp3';
import E5 from './E5.mp3';
import F2 from './F2.mp3';
import F4 from './F4.mp3';
import F6 from './F6.mp3';
import F7 from './F7.mp3';
import G1 from './G1.mp3';
import G3 from './G3.mp3';
import G5 from './G5.mp3';

const
  AUDIO = {
    "A2": A2,
    "A4": A4,
    "A6": A6,
    "B1": B1,
    "B3": B3,
    "B5": B5,
    "B6": B6,
    "C3": C3,
    "C5": C5,
    "D2": D2,
    "D4": D4,
    "D6": D6,
    "D7": D7,
    "E1": E1,
    "E3": E3,
    "E5": E5,
    "F2": F2,
    "F4": F4,
    "F6": F6,
    "F7": F7,
    "G1": G1,
    "G3": G3,
    "G5": G5
  },
  AUDIO_MIN = {
    "A2": A2,
    "A6": A6,
    "B3": B3,
    "B6": B6,
    "C5": C5,
    "D4": D4,
    "D7": D7,
    "E3": E3,
    "F2": F2,
    "F6": F6,
    "G1": G1,
    "G5": G5
  };

export default class InstrumentHarpMp3 extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
