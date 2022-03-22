// Instrument Types
import HarmoniumMp3 from './mp3/index.js';
import HarmoniumOgg from './ogg/index.js';
import HarmoniumWav from './wav/index.js';

const
  typeMap = {
    mp3: HarmoniumMp3,
    ogg: HarmoniumOgg,
    wav: HarmoniumWav
  },
  Harmoniums = {
    HarmoniumMp3,
    HarmoniumOgg,
    HarmoniumWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Harmoniums;
