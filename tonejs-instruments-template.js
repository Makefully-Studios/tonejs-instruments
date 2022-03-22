import Tone from 'tone';

// Audio Files

const
  AUDIO = {},
  AUDIO_MIN = {};

export default class Instrument extends Tone.Sampler {
  constructor (onload, minify = false) {
    super(minify ? AUDIO_MIN : AUDIO, '', onload);
  }
}
