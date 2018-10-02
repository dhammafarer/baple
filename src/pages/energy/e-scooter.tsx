import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import Intro from "../../components/sections/Intro";
import { Domain } from "../../components/layouts/Layout";

interface Props {
  data: {
    introImage: any,
  };
}

const EScooterPage: React.SFC<Props> = (({ data }) => {
  return (
    <Layout domain="energy">
      <Intro
        image={data.introImage}
        heading="E Scooter"
        subheading="Da la bienvenida al futuro: transporte limpio y económico"
        body={[
          "Lo que anteriormente fue un sueño, ahora es una realidad. Cada persona debe tener la libertad de decidir sobre un aspecto de su vida tan importante como poder decidir que tipo de medio de transporte desea, independientemente de las influencias externas.",
          "Es por eso que tenemos la misión de ofrecer nuestra soluciones para esas personas que se preocupan por el medio ambiente y las emisiones generadas por las motocicletas de gasolina. Para ello Baple presenta un producto funcional y con la última tecnología.",
          "Los modelos B1/B5 se convertirá en una parte esencial en su vida y le proporcionará una total independencia de movilidad.",
        ]}
      />
    </Layout>
  );
});

export default EScooterPage;

export const query = graphql`
  query EScooterPageQuery {
    introImage: file(relativePath: {regex: "/Scooter_FutureAwaken_0827.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
