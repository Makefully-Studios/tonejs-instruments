// Instrument Types
import BassoonMp3 from './mp3/index.js';
import BassoonOgg from './ogg/index.js';
import BassoonWav from './wav/index.js';

const
  typeMap = {
    mp3: BassoonMp3,
    ogg: BassoonOgg,
    wav: BassoonWav
  },
  Bassoons = {
    BassoonMp3,
    BassoonOgg,
    BassoonWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Bassoons;
