import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layouts/Layout";
import { createStyles, withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import Intro from "../../components/sections/Intro";
import { Domain } from "../../components/layouts/Layout";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import SectionImage from "../../components/sections/SectionImage";
import CategoryList, { CategoryListProps } from "../../components/sections/CategoryList";

const styles = (theme: Theme) => createStyles({
  bes: {
    borderRadius: 4,
    padding: theme.spacing.unit * 3,
    border: "1px solid gray",
    borderColor: theme.palette.grey[400],
  },
  besItem: {
  },
  link: {
    marginTop: "1.4em",
  },
  divider: {
    margin: theme.spacing.unit * 3,
  },
});

interface EScootePageProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intro1: {
            heading: string,
            body: string[],
            image: any,
          },
          intro2: {
            heading: string,
            body: string[],
            image: any,
          },
          bes: {
            heading: string,
            image: any,
            besItems: Array<{heading: string, subheading: string}>,
            link: {
              to: string,
              label: string,
            },
          },
          categoryList: CategoryListProps,
        },
      },
    },
  };
}

type Props = WithStyles<typeof styles> & EScootePageProps;

const EScooterPage: React.SFC<Props> = (({ data, classes }) => {
  const { intro1, intro2, bes, categoryList } = data.javascriptFrontmatter.frontmatter.sections;
  console.log(data);
  return (
    <Layout domain="energy">
      <Intro
        image={intro1.image}
        heading={intro1.heading}
        body={intro1.body}
      />
      <Intro
        reverse
        image={intro2.image}
        heading={intro2.heading}
        body={intro2.body}
      />
      <SectionImage
        image={bes.image}
        heading={bes.heading}
        after={
          <div>
            <div className={classes.bes}>
              {bes.besItems.map((x, i) =>
                <div className={classes.besItem} key={i}>
                  <Typography variant="headline" color="primary" gutterBottom>
                    {x.heading}
                  </Typography>
                  <Typography variant="subheading">
                    {x.subheading}
                  </Typography>
                  {i !== (bes.besItems.length - 1) && <Divider className={classes.divider}/>}
                </div>,
              )}
            </div>

            <div className={classes.link}>
              <Link to={bes.link.to}>
                <Button variant="contained" color="primary" size="large">
                  {bes.link.label}
                </Button>
              </Link>
            </div>

          </div>
        }
      />
    </Layout>
  );
});

export default withStyles(styles)(EScooterPage);

export const query = graphql`
  query EScooterPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/products/e-scooter.ts/"}) {
      frontmatter {
        sections {
          intro1 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          intro2 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          bes {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            besItems {
              heading
              subheading
            }
            link {
              to
              label
            }
          }
          categoryList {
            categoryItems {
              ...ItemSpec
            }
          }
        }
      }
    }
  }
`;
