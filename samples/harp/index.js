// Instrument Types
import HarpMp3 from './mp3/index.js';
import HarpOgg from './ogg/index.js';
import HarpWav from './wav/index.js';

const
  typeMap = {
    mp3: HarpMp3,
    ogg: HarpOgg,
    wav: HarpWav
  },
  Harps = {
    HarpMp3,
    HarpOgg,
    HarpWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Harps;
