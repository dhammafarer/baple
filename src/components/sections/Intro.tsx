import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/intro-styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SectionImage from "./SectionImage";
import { Link } from "gatsby";

type Props = WithStyles<typeof styles> & {
  heading?: string;
  subheading?: string;
  body: string[];
  image: any;
  link: {
    label?: string
    to?: string,
  };
};

const Intro: React.SFC<Props> = ({ heading, subheading, body, image, link, classes }) => (
  <SectionImage
    image={image}
    heading={heading}
    subheading={subheading}
    body={body}
    after={
      <Link to={link.to}>
        <Button variant="contained" className={classes.button}>
          {link.label}
        </Button>
      </Link>
    }
  />
);

export default withStyles(styles)(Intro);
