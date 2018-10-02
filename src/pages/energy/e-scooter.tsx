import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import { createStyles, withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import Intro from "../../components/sections/Intro";
import { Domain } from "../../components/layouts/Layout";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SectionImage from "../../components/sections/SectionImage";

const styles = (theme: Theme) => createStyles({
  bes: {
    borderRadius: 4,
    padding: theme.spacing.unit * 3,
    border: "1px solid gray",
    borderColor: theme.palette.grey[400],
  },
  besItem: {
  },
  link: {
    marginTop: "1.4em",
  },
  divider: {
    margin: theme.spacing.unit * 3,
  },
});

interface EScootePageProps {
  data: {
    imageOne: any,
    imageTwo: any,
    imageThree: any,
  };
}

type Props = WithStyles<typeof styles> & EScootePageProps;

const EScooterPage: React.SFC<Props> = (({ data, classes }) => {
  return (
    <Layout domain="energy">
      <Intro
        image={data.imageOne}
        heading="Da la bienvenida al futuro: transporte limpio y económico"
        body={[
          "Lo que anteriormente fue un sueño, ahora es una realidad. Cada persona debe tener la libertad de decidir sobre un aspecto de su vida tan importante como poder decidir que tipo de medio de transporte desea, independientemente de las influencias externas.",
          "Es por eso que tenemos la misión de ofrecer nuestra soluciones para esas personas que se preocupan por el medio ambiente y las emisiones generadas por las motocicletas de gasolina. Para ello Baple presenta un producto funcional y con la última tecnología.",
          "Los modelos B1/B5 se convertirá en una parte esencial en su vida y le proporcionará una total independencia de movilidad.",
        ]}
      />
      <Intro
        reverse
        image={data.imageTwo}
        heading="¿Cómo me permiten ahorrar y cuidar el medioambiente?"
        body={[
          "¿Alguna vez se imaginó no tener que volver a pasar por una gasolinera? ¿Alguna vez se imaginó poder \"reponer combustible\" en casa? ¿Alguna vez se imaginó disponer de un medio de transporte que le permitiera ahorrar y cuidar el medio ambiente a la vez?",
          "Nuestros modelos tienen la solución.",
          "Los modelos B1/B5 se convertirá en una parte esencial en su vida y le proporcionará una total independencia de movilidad.",
          "Cómo selccionamos nuestra medio de transporte manera eficiente y económica son cuestiones que demuestran nuestra evolución a una sociedad más avanzada y concienciada con el medio ambiente. Cada uno de nosotros se enfrenta cada vez más a la cuestión de cómo tener una excelente movilidad de manera ecológica y efectiva de una manera que también permita ahorrar dinero.",
          "Los modelos B1 y B5 son un concepto que responde a varias de estas preguntas. Puede imaginar los modelos B1 y B5 como motocicletas que incorporan varías baterías (y otros componentes como el cargador, etc.), y que sólo necesitan ser conectadas a un enchufe doméstico para ser recargadas.",
        ]}
      />
      <SectionImage
        image={data.imageThree}
        heading="Concepto BES"
        after={
          <div>
            <div className={classes.bes}>
              <div className={classes.besItem}>
                <Typography variant="headline" color="primary" gutterBottom>
                  Brillante
                </Typography>
                <Typography variant="subheading">
                  Una genial solución para crear su independencia de movilidad.
                </Typography>
              </div>
              <Divider className={classes.divider}/>

              <div className={classes.besItem}>
                <Typography variant="headline" color="primary" gutterBottom>
                  Economizador
                </Typography>
                <Typography variant="subheading">
                  Permite reducir la factura de transporte.
                </Typography>
              </div>
              <Divider className={classes.divider}/>

              <div className={classes.besItem}>
                <Typography variant="headline" color="primary" gutterBottom>
                  Sostebilidad
                </Typography>
                <Typography variant="subheading">
                  Medio de transporte libre de CO2.
                </Typography>
              </div>
            </div>
            <div className={classes.link}>
              <Link to="/energy/contact">
                <Button variant="contained" color="primary" size="large">
                  Contáctanos!
                </Button>
              </Link>
            </div>
          </div>
        }
      />
    </Layout>
  );
});

export default withStyles(styles)(EScooterPage);

export const query = graphql`
  query EScooterPageQuery {
    imageOne: file(relativePath: {regex: "img/energy/Scooter_FutureAwaken_0827.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: {regex: "img/energy/Triptic3.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: {regex: "img/energy/Welcome.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
