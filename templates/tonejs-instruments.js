import {Sampler} from 'tone';

// Audio Files

const
  AUDIO = {},
  AUDIO_MIN = {};

export default class Instrument extends Sampler {
  constructor (options = {}) {
    super({
      urls: options.minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
