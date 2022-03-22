// Instrument Types
import OrganMp3 from './mp3/index.js';
import OrganOgg from './ogg/index.js';
import OrganWav from './wav/index.js';

const
  typeMap = {
    mp3: OrganMp3,
    ogg: OrganOgg,
    wav: OrganWav
  },
  Organs = {
    OrganMp3,
    OrganOgg,
    OrganWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Organs;
