// Instrument Types
import PianoMp3 from './mp3/index.js';
import PianoOgg from './ogg/index.js';
import PianoWav from './wav/index.js';

const
  typeMap = {
    mp3: PianoMp3,
    ogg: PianoOgg,
    wav: PianoWav
  },
  Pianos = {
    PianoMp3,
    PianoOgg,
    PianoWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Pianos;
