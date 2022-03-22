// Instrument Types
import FrenchHornMp3 from './mp3/index.js';
import FrenchHornOgg from './ogg/index.js';
import FrenchHornWav from './wav/index.js';

const
  typeMap = {
    mp3: FrenchHornMp3,
    ogg: FrenchHornOgg,
    wav: FrenchHornWav
  },
  FrenchHorns = {
    FrenchHornMp3,
    FrenchHornOgg,
    FrenchHornWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default FrenchHorns;
