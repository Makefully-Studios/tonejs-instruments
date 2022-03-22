// Instruments
import BassElectric from './samples/bass-electric/index.js';
import Bassoon from './samples/bassoon/index.js';
import Cello from './samples/cello/index.js';
import Clarinet from './samples/clarinet/index.js';
import Contrabass from './samples/contrabass/index.js';
import Flute from './samples/flute/index.js';
import FrenchHorn from './samples/french-horn/index.js';
import GuitarAcoustic from './samples/guitar-acoustic/index.js';
import GuitarElectric from './samples/guitar-electric/index.js';
import GuitarNylon from './samples/guitar-nylon/index.js';
import Harmonium from './samples/harmonium/index.js';
import Harp from './samples/harp/index.js';
import Organ from './samples/organ/index.js';
import Piano from './samples/piano/index.js';
import Saxophone from './samples/saxophone/index.js';
import Trombone from './samples/trombone/index.js';
import Trumpet from './samples/trumpet/index.js';
import Tuba from './samples/tuba/index.js';
import Violin from './samples/violin/index.js';
import Xylophone from './samples/xylophone/index.js';

const
  instrumentMap = {
    'bass-electric': BassElectric,
    'bassoon': Bassoon,
    'cello': Cello,
    'clarinet': Clarinet,
    'contrabass': Contrabass,
    'flute': Flute,
    'french-horn': FrenchHorn,
    'guitar-acoustic': GuitarAcoustic,
    'guitar-electric': GuitarElectric,
    'guitar-nylon': GuitarNylon,
    'harmonium': Harmonium,
    'harp': Harp,
    'organ': Organ,
    'piano': Piano,
    'saxophone': Saxophone,
    'trombone': Trombone,
    'trumpet': Trumpet,
    'tuba': Tuba,
    'violin': Violin,
    'xylophone': Xylophone
  },
  instruments = {
    BassElectric,
    Bassoon,
    Cello,
    Clarinet,
    Contrabass,
    Flute,
    FrenchHorn,
    GuitarAcoustic,
    GuitarElectric,
    GuitarNylon,
    Harmonium,
    Harp,
    Organ,
    Piano,
    Saxophone,
    Trombone,
    Trumpet,
    Tuba,
    Violin,
    Xylophone,
    getByType: function (type) {
      return instrumentMap[type];
    }
  };

export default instruments;
