declare namespace Sections {
  interface Welcome extends Data.Welcome {
    image?: ChildImageSharp
  }

  interface Categories extends Data.Categories {
  }

  interface Intro extends Data.Intro {
    image?: ChildImageSharp
  }

  interface About extends Data.About {
    image?: ChildImageSharp
  }

  interface Advantages extends Data.Advantages {
    text?: Paragraphs
  }

  interface TCS extends Data.TCS {
    image?: ChildImageSharp
    text?: Paragraphs
  }

  interface More extends Data.More {
    image?: ChildImageSharp
    link?: Link
  }

  interface Contact extends Data.Contact {
    image?: ChildImageSharp
    details?: Details
  }
}
