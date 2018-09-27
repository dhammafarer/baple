declare type Lang = 'en' | 'zh'

declare type Paragraphs = Array<string>

declare interface ChildImageSharp {
  childImageSharp: {
    fluid: {
      src: string
    }
  }
}

declare interface Link extends Data.Link {}

declare interface CategoryLink extends Data.CategoryLink {
  image: ChildImageSharp
}

declare interface NavLink extends Link {
  navLinks: Array<NavLink>
}

declare interface Details extends Data.Details {}

declare interface ProductParam extends Data.ProductParam {}

declare interface ProductSpec extends Data.ProductSpec {}

declare interface Product extends Data.Product {
  image?: ChildImageSharp
}
