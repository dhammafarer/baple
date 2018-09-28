import { IndexPage } from './pages';

export const frontmatter: IndexPage = {
  welcome: {
    heading: 'Heading',
    subheading: 'subheading line',
    image: './img/header/scada.jpg',
    logo: './img/logos/ctn-logo-square.jpg',
  },
  categories: {
    categoryLinks: [
      {
        to: '/plastics/pulverizadores',
        label: 'Pulverizadores',
        image: './img/logos/ctn-logo-square.jpg'
      }
    ]
  },
  more: {
    logo: './img/logos/ctn-logo-square.jpg',
    heading: 'Want to learn more?',
    image: './img/medium-island.jpg',
    link: {
      to: '/contact',
      label: 'Contact us!'
    }
  }
}
