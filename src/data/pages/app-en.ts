import { App } from './pages';

export const frontmatter: App = {
  title: 'Controlnet International',
  lang: 'en',
  logo: './img/logos/ctn-logo-square.jpg',
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
