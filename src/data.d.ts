declare namespace Data {
  type Paragraphs = Array<string>

  interface Link {
    to: string
    label: string
  }

  interface CategoryLink extends Link {
    image: string | ChildImageSharp
  }

  interface NavLink extends Link {
    navLinks: Array<NavLink>
  }

  interface Details {
    name?: string
    phone?: string
    email?: string
    address?: Array<string>
  }

  interface ProductParam {
    key: string
    value: string
  }

  interface ProductSpec {
    name: string
    params: Array<ProductParam>
  }

  interface Product {
    heading?: string
    image?: string | ChildImageSharp | ChildImageSharp
    text?: Paragraphs
    link?: Link
    spec?: Array<ProductSpec>
  }
  interface Welcome {
    heading?: string
    subheading?: string
    image?: string | ChildImageSharp
    logo?: string
  }

  interface Categories {
    heading?: string
    categoryLinks: Array<CategoryLink>
  }

  interface Intro {
    heading?: string
    image?: string | ChildImageSharp
    text?: Paragraphs
  }

  interface About {
    heading?: string
    logo?: string
    image?: string | ChildImageSharp
    text?: Paragraphs
  }

  interface Advantages {
    heading?: string
    points?: Array<string>
    text?: Paragraphs
  }

  interface TCS {
    heading?: string
    image?: string | ChildImageSharp
    text?: Paragraphs
  }

  interface More {
    heading?: string
    image?: string | ChildImageSharp
    logo?: string
    link?: Link
  }

  interface Contact {
    heading?: string
    image?: string | ChildImageSharp
    logo?: string
    details?: Details
  }
}

declare var data: Data.Welcome
