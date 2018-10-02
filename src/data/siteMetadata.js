const group = require('./group');
const metalPackaging = require('./metalPackaging');
const plastics = require('./plastics');
const energy = require('./energy');
const engineering = require('./engineering');

module.exports = {
  contact: {
    name: "HQ",
    email: "info@baple.com.tw",
    phone: "+886-2-8791-2889",
    address: [
      "No. 33, Lane 21, Sec. 6",
      "Minchuan E. Rd., Neihu District",
      "Taipei 11494, Taiwan",
    ],
    socialMedia: {
      facebook: "https://www.facebook.com/baplenews/",
      instagram: "https://www.facebook.com/groups/292056241330760/",
      twitter: "https://www.facebook.com/groups/292056241330760/",
    },
  },
  domains: [group, energy, engineering, plastics, metalPackaging],
};
