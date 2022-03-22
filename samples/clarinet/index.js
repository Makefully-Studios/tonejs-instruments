// Instrument Types
import ClarinetMp3 from './mp3/index.js';
import ClarinetOgg from './ogg/index.js';
import ClarinetWav from './wav/index.js';

const
  typeMap = {
    mp3: ClarinetMp3,
    ogg: ClarinetOgg,
    wav: ClarinetWav
  },
  Clarinets = {
    ClarinetMp3,
    ClarinetOgg,
    ClarinetWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Clarinets;
