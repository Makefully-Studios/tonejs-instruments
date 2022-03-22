// Instrument Types
import TrumpetMp3 from './mp3/index.js';
import TrumpetOgg from './ogg/index.js';
import TrumpetWav from './wav/index.js';

const
  typeMap = {
    mp3: TrumpetMp3,
    ogg: TrumpetOgg,
    wav: TrumpetWav
  },
  Trumpets = {
    TrumpetMp3,
    TrumpetOgg,
    TrumpetWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Trumpets;
