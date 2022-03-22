// Instrument Types
import TromboneMp3 from './mp3/index.js';
import TromboneOgg from './ogg/index.js';
import TromboneWav from './wav/index.js';

const
  typeMap = {
    mp3: TromboneMp3,
    ogg: TromboneOgg,
    wav: TromboneWav
  },
  Trombones = {
    TromboneMp3,
    TromboneOgg,
    TromboneWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Trombones;
