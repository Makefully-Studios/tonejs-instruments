import Tone from 'tone';

// Audio Files
import As2 from './As2.ogg';
import As3 from './As3.ogg';
import As4 from './As4.ogg';
import D2 from './D2.ogg';
import D3 from './D3.ogg';
import D4 from './D4.ogg';
import D5 from './D5.ogg';
import F2 from './F2.ogg';
import F3 from './F3.ogg';
import F4 from './F4.ogg';
import Fs5 from './Fs5.ogg';

const
  AUDIO = {
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#5": Fs5
  },
  AUDIO_MIN = {
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    "D2": D2,
    "D3": D3,
    "D4": D4,
    "D5": D5,
    "F2": F2,
    "F3": F3,
    "F4": F4,
    "F#5": Fs5
  };

export default class InstrumentClarinetOgg extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
