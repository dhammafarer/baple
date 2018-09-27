import * as React from 'react';
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import HorizontalSplit from './layouts/HorizontalSplit';
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    background: theme.palette.background.paper,
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      paddingLeft: '25%',
      paddingRight: '50px',
    }
  },
  text: {},
  heading: {},
  subheading: {},
  paragraph: {},
});

interface Props {
  classes: any
  reverse?: boolean
  image: ChildImageSharp
  heading?: string
  subheading?: string
  text?: Array<string>
  before?: any
  after?: any
}

const SectionImage: React.SFC<Props> = ({classes, before, after, reverse, heading, subheading, text, image}) => (
  <HorizontalSplit
    reverse={reverse}
    left={<img className={classes.image} src={image.childImageSharp.sizes.src}/>}
    right={
      <div className={classes.content}>
        {before && before}
        { heading &&
          <Typography variant="headline" className={classes.heading}>
            {heading}
          </Typography>
        }
        { subheading &&
          <Typography variant="subheading" className={classes.subheading}>
            {heading}
          </Typography>
        }
        { text &&
          <div className={classes.text}>
            {text.map((t,i) =>
              <Typography key={i} variant="body2" className={classes.paragraph}>
                {t}
              </Typography>
            )}
          </div>
        }
        {after && after}
      </div>
    }
  />
);

export default withStyles(styles)(SectionImage);
