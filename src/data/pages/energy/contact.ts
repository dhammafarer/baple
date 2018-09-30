import { ContactPage } from "../../pages";

export const frontmatter: ContactPage = {
  layout: "contact",
  sections: {
    contactUs: {
      logo: "../../img/logos/baple-plastics-logo.png",
      image: "../../img/plastics/Products_Welcome.jpg",
      heading: "Contact Us!",
    },
    contactDetails: {
      contact: [
        {
          address: [
            "No. 33, Lane 21, Sec. 6",
            "Minchuan E. Rd., Neihu District",
            "Taipei 11494, Taiwan",
          ],
          contactName: "HQ",
          email: "info@baple.com.tw",
          facebook: "https://www.facebook.com/baplenews/",
          instagram: "https://www.facebook.com/groups/292056241330760/",
          phone: "+886-2-8791-2889",
          twitter: "https://www.facebook.com/groups/292056241330760/",
          youtube: "https://www.facebook.com/groups/292056241330760/",
        },
      ],
    },
  },
};
