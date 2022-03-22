// Instrument Types
import SaxophoneMp3 from './mp3/index.js';
import SaxophoneOgg from './ogg/index.js';
import SaxophoneWav from './wav/index.js';

const
  typeMap = {
    mp3: SaxophoneMp3,
    ogg: SaxophoneOgg,
    wav: SaxophoneWav
  },
  Saxophones = {
    SaxophoneMp3,
    SaxophoneOgg,
    SaxophoneWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Saxophones;
