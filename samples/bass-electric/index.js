// Instrument Types
import BassElectricMp3 from './mp3/index.js';
import BassElectricOgg from './ogg/index.js';
import BassElectricWav from './wav/index.js';

const
  typeMap = {
    mp3: BassElectricMp3,
    ogg: BassElectricOgg,
    wav: BassElectricWav
  },
  BassElectrics = {
    BassElectricMp3,
    BassElectricOgg,
    BassElectricWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default BassElectrics;
