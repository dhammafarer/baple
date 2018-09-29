// basic types
type Heading = string;
type Subheading = string;
type Logo = string;
type Image = string;
type Paragraph = string;
type Body = Paragraph[];
type Label = string;
type Advantage = string;
type ContactName = string;
type Phone = string;
type Email = string;
type Address = string[];
type Lang = "en" | "zh";
type SocialMedia = string;
type Layout =
  "landing" |
  "404" |
  "categories" |
  "category" |
  "about" |
  "index" |
  "contact";

// compound types
interface Link {
  to: string;
  label: Label;
}

interface CategoryLink extends Link {
  image: Image;
}

interface NavLink extends Link {
  links?: Link[];
}

interface Param {
  key: string;
  value: string;
}

interface Spec {
  heading: Heading;
  params: Param[];
}

interface Product {
  heading: Heading;
  body: Body;
  link: Link;
  spec: Spec[];
}

interface ContactDetails {
  contactName: ContactName;
  phone: Phone;
  email: Email;
  address: Address;
  twitter?: SocialMedia;
  facebook?: SocialMedia;
  instagram?: SocialMedia;
  youtube?: SocialMedia;
}

type Contact = ContactDetails[];

interface Nav {
  home: string;
  navLinks: NavLink[];
}

interface App {
  title: string;
  lang: Lang;
  logo: Logo;
  nav: Nav;
  contact: Contact;
}

// sections
interface Section {
  heading?: Heading;
  subheading?: Subheading;
  body?: Body;
  link?: Link;
}

interface ImageSection extends Section {
  image: Image;
}

interface Welcome extends ImageSection {
  logo: Logo;
}

interface More extends ImageSection {
  logo: Logo;
}

interface Categories extends Section {
  categoryLinks: CategoryLink[];
}

interface Advantages extends Section {
  points: Advantage[];
}

type TCS = ImageSection;
type QAS = ImageSection;
type About = ImageSection;
type Intro = ImageSection;

interface ContactUs extends ImageSection {
  logo: Logo;
}

interface NotFound extends ImageSection {
  logo: Logo;
}

interface ProductCards extends Section {
  productCards: Product[];
}

type Sections =
  Welcome |
  About |
  ContactUs |
  Categories |
  More |
  Advantages |
  TCS |
  QAS |
  NotFound |
  ProductCards;

// pages
interface Page {
  layout: Layout;
  sections: {
    [key: string]: Sections;
  };
}

export interface NotFoundPage extends Page {
  layout: "404";
  sections: {
    notFound: NotFound;
  };
}

export interface IndexPage extends Page {
  layout: "index";
  sections: {
    welcome: Welcome;
    categories: Categories;
    more: More;
  };
}

export interface CategoryPage extends Page {
  layout: "category";
  sections: {
    intro: Intro;
    products: ProductCards;
  };
}

export interface CategoriesPage extends Page {
  layout: "categories";
  sections: {
    products: ProductCards;
  };
}

export interface ContactPage extends Page {
  layout: "contact";
  sections: {
    contactUs: ContactUs;
  };
}

export interface AboutPage extends Page {
  layout: "about";
  sections: {
    about: About;
    advantage: Advantages;
    tcs: TCS;
    qas: QAS;
    more: More;
  };
}
