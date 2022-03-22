// Instrument Types
import GuitarElectricMp3 from './mp3/index.js';
import GuitarElectricOgg from './ogg/index.js';
import GuitarElectricWav from './wav/index.js';

const
  typeMap = {
    mp3: GuitarElectricMp3,
    ogg: GuitarElectricOgg,
    wav: GuitarElectricWav
  },
  GuitarElectrics = {
    GuitarElectricMp3,
    GuitarElectricOgg,
    GuitarElectricWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default GuitarElectrics;
