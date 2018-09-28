import * as React from 'react';
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
  section: {
    minHeight: `calc(100vh - 64px)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {},
  heading: {},
  subheading: {},
  paragraph: {},
});

interface Props {
  classes: any
  image: string
  gradient?: string 
  heading?: string
  subheading?: string
  text?: Array<string>
  before?: any
  after?: any
}

const SectionFeatured: React.SFC<Props> = ({classes, before, after, gradient, heading, subheading, text, image}) => (
  <section style={{
    backgroundImage: `${gradient ? gradient + ",": ''}url( ${image ? image : ''}
      )`
    }}
    className={classes.section}
  >
    <div className={classes.content}>
      {before && before}
      { heading &&
        <Typography variant="display3" className={classes.heading}>
          {heading}
        </Typography>
      }
      { subheading &&
        <Typography variant="display1" className={classes.subheading}>
          {subheading}
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
  </section>
);

export default withStyles(styles)(SectionFeatured);
