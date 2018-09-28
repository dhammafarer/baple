import { App } from './pages';

export const frontmatter: App = {
  title: 'Controlnet International',
  lang: 'en',
  logo: './img/logos/ctn-logo-square.jpg',
  contact: [
    {
      contactName: 'Taipei Headquarters',
      phone: '+886-2-8791-2889',
      email: 'info@connet.com.tw',
      address: [
        'No. 33, Lane 21, Sec. 6',
        'Minchuan E. Rd., Neihu District',
        'Taipei 11494, Taiwan'
      ],
      facebook: 'https://www.facebook.com/groups/292056241330760/',
      instagram: 'https://www.facebook.com/groups/292056241330760/',
      twitter: 'https://www.facebook.com/groups/292056241330760/',
      youtube: 'https://www.facebook.com/groups/292056241330760/',
    }
  ],
  nav: {
    home: '/en/',
    navLinks: [
      {
        to: '/solutions',
        label: 'Solutions',
        links: [
          {
            to: '/scada',
            label: 'SCADA',
          },
          {
            to: '/microgrids',
            label: 'Microgrids',
          },
        ]
      },
      {
        to: '/contact',
        label: 'Contact',
      },
      {
        to: '/about',
        label: 'About',
      },
    ]
  }
}
