import * as React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/products-styles';
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
import Link from 'gatsby-link';

interface Param {
  key: string
  value: string
}

interface Spec {
  name: string
  params: Array<Param>
}
interface Product {
  classes: any
  heading: string
  text: Array<string>
  mainImg: Image
  spec: Array<Spec>
  link: {
    to: string
    label: string
  }
}

interface Props {
  classes: any
  products: Array<Product>
}


const ProductsList: React.SFC<Props> = ({ products, classes }) => (
  <section className={classes.section}>
    <Grid container spacing={32}>
      {
        products.map(x =>
        <Grid key={x.heading} item xs={12} md={6}>
          <Card key={x.heading} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <img className={classes.media} src={x.mainImg.childImageSharp.sizes.src}/>

              <div className={classes.header}>
                <Typography variant="title" className={classes.heading}>
                  {x.heading}
                </Typography>

                <div className={classes.text}>
                  {x.text.map((t,n) =>
                    <Typography key={n} variant="body2" className={classes.paragraph}>
                      {t}
                    </Typography>
                  )}
                </div>
                <Link to={x.link.to}>
                  <Button color="primary" variant="outlined">
                    {x.link.label}
                  </Button>
                </Link>
              </div>

              {
                x.spec.map((s, j) =>
                  <div key={j} className={classes.spec}>
                    <Typography variant="subheading">
                      {s.name}
                    </Typography>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            Parameter
                          </TableCell>
                          <TableCell>
                            Value
                          </TableCell>
                        </TableRow>
                      </TableHead>
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
                            </TableRow>
                          )
                        }
                      </TableBody>
                    </Table>
                  </div>
                )
              }
            </CardContent>
          </Card>
        </Grid>
        )
      }
    </Grid>
  </section>
);

export default withStyles(styles)(ProductsList);
