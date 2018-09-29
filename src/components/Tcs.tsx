import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/tcs-styles';
import HalfPane from './HalfPane';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

interface Props {
  lang: Lang
  classes: any
  tcs: any
}

const Tcs: React.SFC<Props> = ({ tcs, classes, lang }) => (
  <section className={classes.page}>
    <Card>
      <CardHeader
        className={classes.header}
        title={
          <Typography className={classes.title} variant="title">
            {tcs.title}
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <img className={classes.image} src={tcs.img.childImageSharp.sizes.src}/>
        {
          tcs.text.map((x:string, i:number) =>
            <Typography key={i} variant="body1" gutterBottom>
              {x}
            </Typography>
          )
        }
      </CardContent>
    </Card>
  </section>
);

export default withStyles(styles)(Tcs);
