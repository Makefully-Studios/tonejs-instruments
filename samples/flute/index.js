// Instrument Types
import FluteMp3 from './mp3/index.js';
import FluteOgg from './ogg/index.js';
import FluteWav from './wav/index.js';

const
  typeMap = {
    mp3: FluteMp3,
    ogg: FluteOgg,
    wav: FluteWav
  },
  Flutes = {
    FluteMp3,
    FluteOgg,
    FluteWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Flutes;
