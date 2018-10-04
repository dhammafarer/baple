import * as React from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/item-spec-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";
import Img from "gatsby-image";

interface Param {
  key: string;
  value: string;
}

interface Spec {
  heading: string;
  params: Param[];
}

export interface ItemSpecProps  {
  heading: string;
  body: string[];
  image: any;
  spec: Spec[];
  link: {
    to: string
    label: string,
  };
}

type Props = WithStyles<typeof styles> & ItemSpecProps;

const ItemSpec: React.SFC<Props> = ({ heading, body, image, spec, link, classes }) => (
  <Card key={heading} className={classes.card}>
    <CardContent className={classes.cardContent}>
      <Grid container spacing={32}>
        <Grid item xs={12} md={4}>
          <Img className={classes.media} fluid={image.childImageSharp.fluid}/>
        </Grid>
        <Grid item xs={12} md={8} justify="center">
          <div className={classes.cardText}>
            <div className={classes.header}>
              <Typography variant="title" className={classes.heading}>
                {heading}
              </Typography>

              <div className={classes.text}>
                {body.map((t, n) =>
                  <Typography key={n} variant="body2" className={classes.paragraph}>
                    {t}
                  </Typography>,
                )}
              </div>
              <Link to={link.to}>
                <Button color="primary" variant="outlined">
                  {link.label}
                </Button>
              </Link>
            </div>

            {
              spec.map((s, j) =>
                <div key={j} className={classes.spec}>
                  <Typography variant="subheading">
                    {s.heading}
                  </Typography>
                  <Table className={classes.table}>
                    <TableBody>
                      {
                        s.params.map((c, k) =>
                          <TableRow key={k}>
                            <TableCell className={classes.key}>
                              {c.key}
                            </TableCell>
                            <TableCell>
                              {c.value}
                            </TableCell>
                          </TableRow>,
                        )
                      }
                    </TableBody>
                  </Table>
                </div>,
              )
            }
            
          </div>
        </Grid>

      </Grid>

    </CardContent>
  </Card>
);

export default withStyles(styles)(ItemSpec);
