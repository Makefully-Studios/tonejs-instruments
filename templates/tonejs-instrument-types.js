// Instrument types

const
  typeMap = {},
  instruments = {
    getByType: function (type) {
      return typeMap[type];
    }
  };

export default instruments;
