// Instrument Types
import ViolinMp3 from './mp3/index.js';
import ViolinOgg from './ogg/index.js';
import ViolinWav from './wav/index.js';

const
  typeMap = {
    mp3: ViolinMp3,
    ogg: ViolinOgg,
    wav: ViolinWav
  },
  Violins = {
    ViolinMp3,
    ViolinOgg,
    ViolinWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Violins;
