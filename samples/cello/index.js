// Instrument Types
import CelloMp3 from './mp3/index.js';
import CelloOgg from './ogg/index.js';
import CelloWav from './wav/index.js';

const
  typeMap = {
    mp3: CelloMp3,
    ogg: CelloOgg,
    wav: CelloWav
  },
  Cellos = {
    CelloMp3,
    CelloOgg,
    CelloWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Cellos;
