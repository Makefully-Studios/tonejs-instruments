// Instrument Types
import TubaMp3 from './mp3/index.js';
import TubaOgg from './ogg/index.js';
import TubaWav from './wav/index.js';

const
  typeMap = {
    mp3: TubaMp3,
    ogg: TubaOgg,
    wav: TubaWav
  },
  Tubas = {
    TubaMp3,
    TubaOgg,
    TubaWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Tubas;
