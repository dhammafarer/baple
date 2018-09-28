import * as React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string
  lang: Lang
}

const Head: React.SFC<Props> = ({ lang, title }) => (
  <Helmet
    title={title}
    htmlAttributes={{lang: lang}}
    meta={[
      {name: 'description', content: 'Baple Group'},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Cedarville+Cursive:400"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
    ]}
  />
);

export default Head;
