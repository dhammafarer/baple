import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/products-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";
import SectionImage from "./SectionImage";

interface Product {
  heading?: string;
  subheading?: string;
  body?: string[];
  image?: any;
  link?: {
    to?: string,
    label?: string,
  };
}

type Props = WithStyles<typeof styles> & {
  heading?: string;
  subheading?: string;
  image?: any;
  products: Product[];
};

const Products: React.SFC<Props> = ({ heading, subheading, products, image, classes }) => (
  <div>
    {products.map((p, i) =>
      <SectionImage
        reverse={i % 2 === 0}
        key={i}
        heading={p.heading}
        subheading={p.subheading}
        body={p.body}
        image={p.image}
        after={
          <Link to={p.link.to}>
            <Button variant="outlined">
              {p.link.label}
            </Button>
          </Link>
        }
      />,
    )}
  </div>
);

export default withStyles(styles)(Products);
