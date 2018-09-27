import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/categories-styles';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from 'gatsby-link';

interface Item {
  heading: string
  image: ChildImageSharp
  link: {
    to: string
  }
}

interface Props {
  classes: any
  heading: any
  items: Array<Item>
}

const Categories: React.SFC<Props> = ({ classes, heading, items }) => (
  <section className={classes.categories}>
    <Typography
      className={classes.heading}
      variant="display1"
      align="center"
      color="primary"
    >
      {heading}
    </Typography>
    <Grid container spacing={32}>
      {items.map(x =>
        <Grid key={x.heading}item xs={12} sm={6} md={4} xl={2}>
          <Card className={classes.card}>
            <CardActionArea className={classes.cardAction}>
              <Link to={x.link.to}>
                <CardContent className={classes.content}>
                  <img className={classes.image} src={x.image.childImageSharp.sizes.src}/>
                  <Typography
                    color="inherit"
                    className={classes.label}
                  >
                    {x.heading}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  </section>
);

export default withStyles(styles)(Categories);
