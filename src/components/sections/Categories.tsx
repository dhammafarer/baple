import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/categories-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "gatsby";

type Props = WithStyles<typeof styles> & {
  heading: string;
  categoryLinks: Array<{label?: string, image?: any, to?: string}>;
};

const Categories: React.SFC<Props> = ({ classes, heading, categoryLinks }) => (
  <section className={classes.categories}>
    <Typography
      className={classes.heading}
      variant="display1"
      align="center"
      color="inherit"
    >
      {heading}
    </Typography>
    <Grid container spacing={32}>
      {categoryLinks.map((x) =>
        <Grid key={x.label}item xs={12} sm={6} md={4} xl={2}>
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
  </section>
);

export default withStyles(styles)(Categories);
