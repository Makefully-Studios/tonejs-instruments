// Instrument Types
import GuitarAcousticMp3 from './mp3/index.js';
import GuitarAcousticOgg from './ogg/index.js';
import GuitarAcousticWav from './wav/index.js';

const
  typeMap = {
    mp3: GuitarAcousticMp3,
    ogg: GuitarAcousticOgg,
    wav: GuitarAcousticWav
  },
  GuitarAcoustics = {
    GuitarAcousticMp3,
    GuitarAcousticOgg,
    GuitarAcousticWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default GuitarAcoustics;
