const group = require('./group');
const metalPackaging = require('./metalPackaging');
const plastics = require('./plastics');
const energy = require('./energy');
const engineering = require('./engineering');

module.exports = {
  contact: {
    name: "HQ",
    email: "info@baple.com.tw",
    phone: "+886-2-2345-2384",
    address: [
      "5F, No. 35, Daye Rd",
      "Beitou District, Taipei",
      "Taiwan",
    ],
    socialMedia: {
      facebook: "https://www.facebook.com/baplenews/",
      instagram: "https://www.facebook.com/baplenews/",
      twitter: "https://www.facebook.com/baplenews/",
    },
  },
  domains: [group, energy, engineering, plastics, metalPackaging],
};
