import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/welcome-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Welcome_2 } from "../../graphql";
import SectionFeatured from "../sections/SectionFeatured";
import Img from "gatsby-image";

type Props = WithStyles<typeof styles> & {
  heading?: string,
  subheading?: string,
  logo?: any,
  image?: any,
  quotes?: Array<{quote: string, author: string}>,
  gradient?: string,
};

const Welcome: React.SFC<Props> = ({ heading, subheading, logo, image, classes, quotes, gradient }) => (
  <SectionFeatured
    fullHeight
    gradient="linear-gradient(60deg, #ccc, #fff)"
    image={image && image}
    before={
      <div className={classes.section}>
        <Grid container>
          {logo &&
            <Grid item xs={12} md={4} className={classes.logoPane}>
              <img className={classes.logo} src={logo.childImageSharp.fixed.src}/>
            </Grid>
          }
            <Grid item xs={12} md={8} className={classes.textPane}>
              <div className={classes.text}>
                { heading &&
                  <Typography
                    className={classes.heading}
                    variant="display2"
                  >
                    {heading}
                  </Typography>

                }
                { subheading &&
                  <Typography
                    className={classes.subheading}
                    variant="display1"
                  >
                    {subheading}
                  </Typography>
                }
                { quotes &&
                  <div className={classes.quotes}>
                    {quotes.map((q, i) =>
                      <blockquote key={i} className={classes.blockquote}>
                        <Typography
                          variant="headline"
                          className={classes.quote}
                        >
                          {q.quote}
                        </Typography>
                        <Typography
                          className={classes.author}
                          variant="subheading"
                        >
                          {q.author}
                        </Typography>
                      </blockquote>,
                    )}
                  </div>
                }
              </div>
          </Grid>
        </Grid>
      </div>
    }
  />
);

export default withStyles(styles)(Welcome);
