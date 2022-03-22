// Instrument Types
import ContrabassMp3 from './mp3/index.js';
import ContrabassOgg from './ogg/index.js';
import ContrabassWav from './wav/index.js';

const
  typeMap = {
    mp3: ContrabassMp3,
    ogg: ContrabassOgg,
    wav: ContrabassWav
  },
  Contrabasss = {
    ContrabassMp3,
    ContrabassOgg,
    ContrabassWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Contrabasss;
