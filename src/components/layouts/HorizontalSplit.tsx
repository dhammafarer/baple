import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles } from "@material-ui/core/styles";

const styles = createStyles({
  container: {
    width: '100%',
  },
  item: {
    width: '100%'
  }
});

type Props = {
  left: any
  right: any
  classes: any
};

class HorizontalSplit extends React.Component<Props, {}> {
  shouldComponentUpdate() {
    return false
  }

  render () {
    const { classes, left, right } = this.props;

    return (
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6} className={classes.item}>
          {left}
        </Grid>
        <Grid item xs={12} md={6} className={classes.item}>
          {right}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(HorizontalSplit);
