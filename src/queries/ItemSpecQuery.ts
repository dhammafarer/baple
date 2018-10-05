import { graphql } from "gatsby";

export const ItemSpecQuery = graphql`
  fragment ItemSpec on categoryItems_2 {
    heading
    body
    image {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    link {
      to
      label
    }
    spec {
      heading
      params {
        key
        value
      }
    }
  }
`;
