import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/categories-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "gatsby";
import SectionFeatured from "./SectionFeatured";
import Img from "gatsby-image";

type Props = WithStyles<typeof styles> & {
  heading: string;
  subheading?: string;
  categoryLinks: Array<{label?: string, image?: any, to?: string}>;
  image?: any;
  gradient?: string;
};

const Categories: React.SFC<Props> = ({ classes, image, gradient, heading, subheading, categoryLinks }) => (
  <SectionFeatured
    image={image && image}
    gradient={gradient}
    fullHeight
    heading={heading}
    subheading={subheading}
    after={
      <Grid container spacing={32} className={classes.cards}>
        {categoryLinks.map((x) =>
          <Grid key={x.label}item xs={12} sm={6} md={3} xl={2}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardAction}>
                <Link to={x.to}>
                  <CardContent className={classes.content}>
                    <img className={classes.image} src={x.image.childImageSharp.fluid.src}/>
                    <Typography
                      color="inherit"
                      className={classes.label}
                    >
                      {x.label}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>,
        )}
      </Grid>
    }
  />
);

export default withStyles(styles)(Categories);
