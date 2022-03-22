// Instrument Types
import XylophoneMp3 from './mp3/index.js';
import XylophoneOgg from './ogg/index.js';
import XylophoneWav from './wav/index.js';

const
  typeMap = {
    mp3: XylophoneMp3,
    ogg: XylophoneOgg,
    wav: XylophoneWav
  },
  Xylophones = {
    XylophoneMp3,
    XylophoneOgg,
    XylophoneWav,
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default Xylophones;
