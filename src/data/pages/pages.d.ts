// basic types
type Heading = string
type Subheading = string
type Logo = string
type Image = string
type Paragraph = string
type Body = Array<Paragraph>
type Label = string
type Advantage = string
type ContactName = string
type Phone = string
type Email = string
type Address = Array<string>
type Lang = 'en' | 'zh'

// compound types
interface Link {
  to: string
  label: Label
}

interface CategoryLink extends Link {
  image: Image
}

interface NavLink extends Link {
  links?: Array<Link>
}

interface Param {
  key: string
  value: string
}

interface Spec {
  heading: Heading
  params: Array<Param>
}

interface Product {
  heading: Heading
  body: Body
  link: Link
  spec: Array<Spec>
}

interface Details {
  contactName: ContactName
  phone: Phone
  email: Email
  address: Address
}

interface Nav {
  home: string
  navLinks: Array<NavLink>
}

interface App {
  title: string
  lang: Lang
  logo: Logo
  nav: Nav
}

//sections
interface Section {
  heading?: Heading
  subheading?: Subheading
  body?: Body
  link?: Link
}

interface ImageSection extends Section {
  image: Image
}

interface Welcome extends ImageSection{
  logo: Logo
}

interface More extends ImageSection {
  logo: Logo
}

interface Categories extends Section {
  categoryLinks: Array<CategoryLink>
}

interface Advantages extends Section {
  points: Array<Advantage>
}

type TCS = ImageSection
type QAS = ImageSection
type About = ImageSection
type Intro = ImageSection

interface Contact extends ImageSection {
  logo: Logo
  details: Details
}

interface ProductCards extends Section {
  productCards: Array<Product>
}

type Sections =
  Welcome |
  About |
  Contact |
  Categories |
  More |
  Advantages |
  TCS |
  QAS |
  ProductCards

// pages
interface Page {
  [key: string]: Sections
}

export interface IndexPage extends Page {
  welcome: Welcome
  categories: Categories
  more: More
}

export interface CategoryPage extends Page {
  intro: Intro
  products: ProductCards
}

export interface ContactPage extends Page {
  contact: Contact
}

export interface AboutPage extends Page {
  about: About
  advantage: Advantages
  tcs: TCS
  qas: QAS
  more: More
}
