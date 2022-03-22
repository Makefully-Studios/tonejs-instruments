// Instrument Types
import GuitarNylonMp3 from './mp3/index.js';
import GuitarNylonOgg from './ogg/index.js';
import GuitarNylonWav from './wav/index.js';

const
  typeMap = {
    mp3: GuitarNylonMp3,
    ogg: GuitarNylonOgg,
    wav: GuitarNylonWav
  },
  GuitarNylons = {
    GuitarNylonMp3,
    GuitarNylonOgg,
    GuitarNylonWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default GuitarNylons;
