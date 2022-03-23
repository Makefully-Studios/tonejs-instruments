import {Sampler} from 'tone';

// Audio Files

const
  AUDIO = {},
  AUDIO_MIN = {};

export default class Instrument extends Sampler {
  constructor (options, minify = false) {
    super({
      urls: minify ? AUDIO_MIN : AUDIO,
      onload: options.onload
    });
  }
}
