/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql'

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
}

export interface Query {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */
  allDirectory?: DirectoryConnection | null /** Connection to all Directory nodes */
  allFile?: FileConnection | null /** Connection to all File nodes */
  allImageSharp?: ImageSharpConnection | null /** Connection to all ImageSharp nodes */
  allJavascriptFrontmatter?: JavascriptFrontmatterConnection | null /** Connection to all JavascriptFrontmatter nodes */
  sitePage?: SitePage | null
  sitePlugin?: SitePlugin | null
  site?: Site | null
  directory?: Directory | null
  file?: File | null
  imageSharp?: ImageSharp | null
  javascriptFrontmatter?: JavascriptFrontmatter | null
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePageGroupConnectionConnection | null)[] | null
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  jsonName?: string | null
  internalComponentName?: string | null
  path?: string | null
  component?: string | null
  componentChunkName?: string | null
  context?: Context | null
  pluginCreator?: SitePlugin | null
  pluginCreatorId?: string | null
  componentPath?: string | null
  internal?: Internal_9 | null
}

export interface Context {
  slug?: string | null
  layout?: string | null
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  resolve?: string | null
  name?: string | null
  version?: string | null
  pluginOptions?: PluginOptions_2 | null
  nodeAPIs?: (string | null)[] | null
  browserAPIs?: (string | null)[] | null
  ssrAPIs?: (string | null)[] | null
  pluginFilepath?: string | null
  packageJson?: PackageJson_2 | null
  internal?: Internal_10 | null
}

export interface PluginOptions_2 {
  name?: string | null
  short_name?: string | null
  start_url?: string | null
  background_color?: string | null
  theme_color?: string | null
  display?: string | null
  icon?: string | null
  path?: string | null
  pathCheck?: boolean | null
}

export interface PackageJson_2 {
  name?: string | null
  description?: string | null
  version?: string | null
  main?: string | null
  license?: string | null
  dependencies?: (Dependencies_2 | null)[] | null
  devDependencies?: (DevDependencies_2 | null)[] | null
  peerDependencies?: (PeerDependencies_2 | null)[] | null
  keywords?: (string | null)[] | null
}

export interface Dependencies_2 {
  name?: string | null
  version?: string | null
}

export interface DevDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface PeerDependencies_2 {
  name?: string | null
  version?: string | null
}

export interface Internal_10 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface Internal_9 {
  type?: string | null
  contentDigest?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePageGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */
  next?: SitePage | null /** The next edge in the connection */
  previous?: SitePage | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (SitePluginGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (SitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */
  next?: SitePlugin | null /** The next edge in the connection */
  previous?: SitePlugin | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (DirectoryEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (DirectoryGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** Node of type Directory */
export interface Directory extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  internal?: Internal_11 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  blksize?: number | null
  ino?: number | null
  blocks?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
}

export interface Internal_11 {
  contentDigest?: string | null
  type?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (DirectoryGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  node?: Directory | null /** The item at the end of the edge */
  next?: Directory | null /** The next edge in the connection */
  previous?: Directory | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (FileEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (FileGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface FileEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** Node of type File */
export interface File extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  childJavascriptFrontmatter?: JavascriptFrontmatter | null /** The child of this node of type javascriptFrontmatter */
  childImageSharp?: ImageSharp | null /** The child of this node of type imageSharp */
  internal?: Internal_12 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: string | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: string | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  blksize?: number | null
  ino?: number | null
  blocks?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
  publicURL?:
    | string
    | null /** Copy file to static directory and return public url to it */
}
/** Node of type JavascriptFrontmatter */
export interface JavascriptFrontmatter extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  node?: Node_2 | null
  internal?: Internal_14 | null
  frontmatter?: Frontmatter_2 | null
  fileAbsolutePath?: string | null
  fields?: Fields_2 | null
}

export interface Node_2 {
  id?: string | null
  children?: (string | null)[] | null
  parent?: string | null
  internal?: Internal_13 | null
  sourceInstanceName?: string | null
  absolutePath?: string | null
  relativePath?: File | null
  extension?: string | null
  size?: number | null
  prettySize?: string | null
  modifiedTime?: Date | null
  accessTime?: Date | null
  changeTime?: Date | null
  birthTime?: Date | null
  root?: string | null
  dir?: string | null
  base?: File | null
  ext?: string | null
  name?: string | null
  relativeDirectory?: string | null
  dev?: number | null
  mode?: number | null
  nlink?: number | null
  uid?: number | null
  gid?: number | null
  rdev?: number | null
  blksize?: number | null
  ino?: number | null
  blocks?: number | null
  atimeMs?: number | null
  mtimeMs?: number | null
  ctimeMs?: number | null
  birthtimeMs?: number | null
  atime?: Date | null
  mtime?: Date | null
  ctime?: Date | null
  birthtime?: Date | null
}

export interface Internal_13 {
  contentDigest?: string | null
  type?: string | null
  mediaType?: string | null
  description?: string | null
  owner?: string | null
}

export interface Internal_14 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
  fieldOwners?: FieldOwners_2 | null
}

export interface FieldOwners_2 {
  slug?: string | null
  layout?: string | null
  underConstruction?: string | null
}

export interface Frontmatter_2 {
  title?: string | null
  lang?: string | null
  logo?: File | null
  contact?: (Contact_3 | null)[] | null
  nav?: Nav_2 | null
  error?: boolean | null
  layout?: string | null
  sections?: Sections_2 | null
  underConstruction?: boolean | null
}

export interface Contact_3 {
  address?: (string | null)[] | null
  contactName?: string | null
  email?: string | null
  phone?: string | null
  facebook?: string | null
  instagram?: string | null
  twitter?: string | null
  youtube?: string | null
}

export interface Nav_2 {
  home?: string | null
  navLinks?: (NavLinks_2 | null)[] | null
}

export interface NavLinks_2 {
  label?: string | null
  to?: string | null
  links?: (Links_2 | null)[] | null
}

export interface Links_2 {
  label?: string | null
  to?: string | null
}

export interface Sections_2 {
  notFound?: NotFound_2 | null
  about1?: About1_2 | null
  about2?: About2_2 | null
  advantages?: Advantages_2 | null
  tcs?: Tcs_2 | null
  qas?: Qas_2 | null
  contactUs?: ContactUs_2 | null
  contactDetails?: ContactDetails_2 | null
  welcome?: Welcome_2 | null
  more?: More_2 | null
  intro?: Intro_2 | null
  categoryList?: CategoryList_2 | null
  categories?: Categories_2 | null
  products?: Products_2 | null
}

export interface NotFound_2 {
  heading?: string | null
  subheading?: string | null
  image?: string | null
  logo?: string | null
}

export interface About1_2 {
  logo?: File | null
  image?: File | null
  heading?: string | null
  body?: (string | null)[] | null
}

export interface About2_2 {
  image?: File | null
  body?: (string | null)[] | null
}

export interface Advantages_2 {
  heading?: string | null
  body?: (string | null)[] | null
  points?: (string | null)[] | null
}

export interface Tcs_2 {
  heading?: string | null
  image?: File | null
}

export interface Qas_2 {
  heading?: string | null
  image?: File | null
}

export interface ContactUs_2 {
  logo?: File | null
  image?: File | null
  heading?: string | null
}

export interface ContactDetails_2 {
  contact?: (Contact_4 | null)[] | null
}

export interface Contact_4 {
  address?: (string | null)[] | null
  contactName?: string | null
  email?: string | null
  facebook?: string | null
  instagram?: string | null
  phone?: string | null
  twitter?: string | null
  youtube?: string | null
}

export interface Welcome_2 {
  logo?: File | null
  image?: File | null
  quotes?: (Quotes_2 | null)[] | null
  heading?: string | null
  subheading?: string | null
}

export interface Quotes_2 {
  quote?: string | null
  author?: string | null
}

export interface More_2 {
  logo?: File | null
  heading?: string | null
  image?: File | null
  link?: Link_5 | null
}

export interface Link_5 {
  to?: string | null
  label?: string | null
}

export interface Intro_2 {
  heading?: string | null
  image?: File | null
  body?: (string | null)[] | null
  link?: Link_6 | null
  subheading?: string | null
}

export interface Link_6 {
  to?: string | null
  label?: string | null
}

export interface CategoryList_2 {
  categoryItems?: (CategoryItems_2 | null)[] | null
}

export interface CategoryItems_2 {
  heading?: string | null
  image?: File | null
  body?: (string | null)[] | null
  spec?: (Spec_2 | null)[] | null
  link?: Link_7 | null
}

export interface Spec_2 {
  heading?: string | null
  params?: (Params_2 | null)[] | null
}

export interface Params_2 {
  key?: string | null
  value?: string | null
}

export interface Link_7 {
  to?: string | null
  label?: string | null
}

export interface Categories_2 {
  heading?: string | null
  categoryLinks?: (CategoryLinks_2 | null)[] | null
  image?: File | null
  subheading?: string | null
}

export interface CategoryLinks_2 {
  label?: string | null
  image?: File | null
  to?: string | null
}

export interface Products_2 {
  productList?: (ProductList_2 | null)[] | null
}

export interface ProductList_2 {
  heading?: string | null
  image?: File | null
  body?: (string | null)[] | null
  link?: Link_8 | null
}

export interface Link_8 {
  to?: string | null
  label?: string | null
}

export interface Fields_2 {
  slug?: string | null
  layout?: string | null
  underConstruction?: boolean | null
}
/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  internal?: Internal_15 | null
  fixed?: ImageSharpFixed | null
  resolutions?: ImageSharpResolutions | null
  fluid?: ImageSharpFluid | null
  sizes?: ImageSharpSizes | null
  original?: ImageSharpOriginal | null
  resize?: ImageSharpResize | null
}

export interface Internal_15 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface ImageSharpFixed {
  base64?: string | null
  tracedSVG?: string | null
  aspectRatio?: number | null
  width?: number | null
  height?: number | null
  src?: string | null
  srcSet?: string | null
  srcWebp?: string | null
  srcSetWebp?: string | null
  originalName?: string | null
}

export interface ImageSharpResolutions {
  base64?: string | null
  tracedSVG?: string | null
  aspectRatio?: number | null
  width?: number | null
  height?: number | null
  src?: string | null
  srcSet?: string | null
  srcWebp?: string | null
  srcSetWebp?: string | null
  originalName?: string | null
}

export interface ImageSharpFluid {
  base64?: string | null
  tracedSVG?: string | null
  aspectRatio?: number | null
  src?: string | null
  srcSet?: string | null
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes?: string | null
  originalImg?: string | null
  originalName?: string | null
  presentationWidth?: number | null
  presentationHeight?: number | null
}

export interface ImageSharpSizes {
  base64?: string | null
  tracedSVG?: string | null
  aspectRatio?: number | null
  src?: string | null
  srcSet?: string | null
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes?: string | null
  originalImg?: string | null
  originalName?: string | null
  presentationWidth?: number | null
  presentationHeight?: number | null
}

export interface ImageSharpOriginal {
  width?: number | null
  height?: number | null
  src?: string | null
}

export interface ImageSharpResize {
  src?: string | null
  tracedSVG?: string | null
  width?: number | null
  height?: number | null
  aspectRatio?: number | null
  originalName?: string | null
}

export interface Internal_12 {
  contentDigest?: string | null
  type?: string | null
  mediaType?: string | null
  description?: string | null
  owner?: string | null
}
/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (FileGroupConnectionEdge | null)[] | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  node?: File | null /** The item at the end of the edge */
  next?: File | null /** The next edge in the connection */
  previous?: File | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface ImageSharpConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (ImageSharpEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (ImageSharpGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface ImageSharpEdge {
  node?: ImageSharp | null /** The item at the end of the edge */
  next?: ImageSharp | null /** The next edge in the connection */
  previous?: ImageSharp | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (ImageSharpGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  node?: ImageSharp | null /** The item at the end of the edge */
  next?: ImageSharp | null /** The next edge in the connection */
  previous?: ImageSharp | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface JavascriptFrontmatterConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?: (JavascriptFrontmatterEdge | null)[] | null /** A list of edges. */
  totalCount?: number | null
  distinct?: (string | null)[] | null
  group?: (JavascriptFrontmatterGroupConnectionConnection | null)[] | null
}
/** An edge in a connection. */
export interface JavascriptFrontmatterEdge {
  node?: JavascriptFrontmatter | null /** The item at the end of the edge */
  next?: JavascriptFrontmatter | null /** The next edge in the connection */
  previous?: JavascriptFrontmatter | null /** The previous edge in the connection */
}
/** A connection to a list of items. */
export interface JavascriptFrontmatterGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */
  edges?:
    | (JavascriptFrontmatterGroupConnectionEdge | null)[]
    | null /** A list of edges. */
  field?: string | null
  fieldValue?: string | null
  totalCount?: number | null
}
/** An edge in a connection. */
export interface JavascriptFrontmatterGroupConnectionEdge {
  node?: JavascriptFrontmatter | null /** The item at the end of the edge */
  next?: JavascriptFrontmatter | null /** The next edge in the connection */
  previous?: JavascriptFrontmatter | null /** The previous edge in the connection */
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */
  parent?: Node | null /** The parent of this node. */
  children?: (Node | null)[] | null /** The children of this node. */
  siteMetadata?: SiteMetadata_2 | null
  port?: Date | null
  host?: string | null
  pathPrefix?: string | null
  polyfill?: boolean | null
  buildTime?: Date | null
  internal?: Internal_16 | null
}

export interface SiteMetadata_2 {
  title?: string | null
}

export interface Internal_16 {
  contentDigest?: string | null
  type?: string | null
  owner?: string | null
}

export interface SitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[]
  order?: SitePageConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: SitePageConnectionJsonNameQueryString | null
  internalComponentName?: SitePageConnectionInternalComponentNameQueryString | null
  path?: SitePageConnectionPathQueryString_2 | null
  component?: SitePageConnectionComponentQueryString | null
  componentChunkName?: SitePageConnectionComponentChunkNameQueryString | null
  context?: SitePageConnectionContextInputObject | null
  pluginCreator?: SitePageConnectionPluginCreatorInputObject | null
  pluginCreatorId?: SitePageConnectionPluginCreatorIdQueryString_2 | null
  componentPath?: SitePageConnectionComponentPathQueryString | null
  id?: SitePageConnectionIdQueryString_2 | null
  internal?: SitePageConnectionInternalInputObject_2 | null
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionContextInputObject {
  slug?: SitePageConnectionContextSlugQueryString | null
  layout?: SitePageConnectionContextLayoutQueryString | null
}

export interface SitePageConnectionContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionContextLayoutQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: SitePageConnectionPluginCreatorResolveQueryString | null
  id?: SitePageConnectionPluginCreatorIdQueryString | null
  name?: SitePageConnectionPluginCreatorNameQueryString | null
  version?: SitePageConnectionPluginCreatorVersionQueryString | null
  pluginOptions?: SitePageConnectionPluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePageConnectionPluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePageConnectionPluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePageConnectionPluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePageConnectionPluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePageConnectionPluginCreatorPackageJsonInputObject | null
  parent?: SitePageConnectionPluginCreatorParentQueryString | null
  internal?: SitePageConnectionPluginCreatorInternalInputObject | null
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  name?: SitePageConnectionPluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePageConnectionPluginCreatorPluginOptionsIconQueryString | null
  path?: SitePageConnectionPluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonNameQueryString | null
  description?: SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonVersionQueryString | null
  main?: SitePageConnectionPluginCreatorPackageJsonMainQueryString | null
  license?: SitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: SitePageConnectionPluginCreatorInternalContentDigestQueryString | null
  type?: SitePageConnectionPluginCreatorInternalTypeQueryString | null
  owner?: SitePageConnectionPluginCreatorInternalOwnerQueryString | null
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: SitePageConnectionInternalTypeQueryString_2 | null
  contentDigest?: SitePageConnectionInternalContentDigestQueryString_2 | null
  description?: SitePageConnectionInternalDescriptionQueryString | null
  owner?: SitePageConnectionInternalOwnerQueryString_2 | null
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[]
  order?: SitePluginConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: SitePluginConnectionResolveQueryString_2 | null
  id?: SitePluginConnectionIdQueryString_2 | null
  name?: SitePluginConnectionNameQueryString_2 | null
  version?: SitePluginConnectionVersionQueryString_2 | null
  pluginOptions?: SitePluginConnectionPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginConnectionNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginConnectionBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginConnectionSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginConnectionPluginFilepathQueryString_2 | null
  packageJson?: SitePluginConnectionPackageJsonInputObject_2 | null
  internal?: SitePluginConnectionInternalInputObject_2 | null
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  name?: SitePluginConnectionPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginConnectionPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginConnectionPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginConnectionPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginConnectionPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginConnectionPluginOptionsIconQueryString_2 | null
  path?: SitePluginConnectionPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: SitePluginConnectionPackageJsonNameQueryString_2 | null
  description?: SitePluginConnectionPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginConnectionPackageJsonVersionQueryString_2 | null
  main?: SitePluginConnectionPackageJsonMainQueryString_2 | null
  license?: SitePluginConnectionPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginConnectionPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginConnectionPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: SitePluginConnectionInternalContentDigestQueryString_2 | null
  type?: SitePluginConnectionInternalTypeQueryString_2 | null
  owner?: SitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSort {
  fields: (DirectoryConnectionSortByFieldsEnum | null)[]
  order?: DirectoryConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: DirectoryConnectionIdQueryString_2 | null
  internal?: DirectoryConnectionInternalInputObject_2 | null
  sourceInstanceName?: DirectoryConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: DirectoryConnectionAbsolutePathQueryString_2 | null
  relativePath?: DirectoryConnectionRelativePathQueryString_2 | null
  extension?: DirectoryConnectionExtensionQueryString_2 | null
  size?: DirectoryConnectionSizeQueryInteger_2 | null
  prettySize?: DirectoryConnectionPrettySizeQueryString_2 | null
  modifiedTime?: DirectoryConnectionModifiedTimeQueryString_2 | null
  accessTime?: DirectoryConnectionAccessTimeQueryString_2 | null
  changeTime?: DirectoryConnectionChangeTimeQueryString_2 | null
  birthTime?: DirectoryConnectionBirthTimeQueryString_2 | null
  root?: DirectoryConnectionRootQueryString_2 | null
  dir?: DirectoryConnectionDirQueryString_2 | null
  base?: DirectoryConnectionBaseQueryString_2 | null
  ext?: DirectoryConnectionExtQueryString_2 | null
  name?: DirectoryConnectionNameQueryString_2 | null
  relativeDirectory?: DirectoryConnectionRelativeDirectoryQueryString_2 | null
  dev?: DirectoryConnectionDevQueryInteger_2 | null
  mode?: DirectoryConnectionModeQueryInteger_2 | null
  nlink?: DirectoryConnectionNlinkQueryInteger_2 | null
  uid?: DirectoryConnectionUidQueryInteger_2 | null
  gid?: DirectoryConnectionGidQueryInteger_2 | null
  rdev?: DirectoryConnectionRdevQueryInteger_2 | null
  blksize?: DirectoryConnectionBlksizeQueryInteger_2 | null
  ino?: DirectoryConnectionInoQueryInteger_2 | null
  blocks?: DirectoryConnectionBlocksQueryInteger_2 | null
  atimeMs?: DirectoryConnectionAtimeMsQueryFloat_2 | null
  mtimeMs?: DirectoryConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: DirectoryConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: DirectoryConnectionBirthtimeMsQueryFloat_2 | null
  atime?: DirectoryConnectionAtimeQueryString_2 | null
  mtime?: DirectoryConnectionMtimeQueryString_2 | null
  ctime?: DirectoryConnectionCtimeQueryString_2 | null
  birthtime?: DirectoryConnectionBirthtimeQueryString_2 | null
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: DirectoryConnectionInternalContentDigestQueryString_2 | null
  type?: DirectoryConnectionInternalTypeQueryString_2 | null
  description?: DirectoryConnectionInternalDescriptionQueryString_2 | null
  owner?: DirectoryConnectionInternalOwnerQueryString_2 | null
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionSort {
  fields: (FileConnectionSortByFieldsEnum | null)[]
  order?: FileConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: FileConnectionIdQueryString_2 | null
  internal?: FileConnectionInternalInputObject_2 | null
  sourceInstanceName?: FileConnectionSourceInstanceNameQueryString_2 | null
  absolutePath?: FileConnectionAbsolutePathQueryString_2 | null
  relativePath?: FileConnectionRelativePathQueryString_2 | null
  extension?: FileConnectionExtensionQueryString_2 | null
  size?: FileConnectionSizeQueryInteger_2 | null
  prettySize?: FileConnectionPrettySizeQueryString_2 | null
  modifiedTime?: FileConnectionModifiedTimeQueryString_2 | null
  accessTime?: FileConnectionAccessTimeQueryString_2 | null
  changeTime?: FileConnectionChangeTimeQueryString_2 | null
  birthTime?: FileConnectionBirthTimeQueryString_2 | null
  root?: FileConnectionRootQueryString_2 | null
  dir?: FileConnectionDirQueryString_2 | null
  base?: FileConnectionBaseQueryString_2 | null
  ext?: FileConnectionExtQueryString_2 | null
  name?: FileConnectionNameQueryString_2 | null
  relativeDirectory?: FileConnectionRelativeDirectoryQueryString_2 | null
  dev?: FileConnectionDevQueryInteger_2 | null
  mode?: FileConnectionModeQueryInteger_2 | null
  nlink?: FileConnectionNlinkQueryInteger_2 | null
  uid?: FileConnectionUidQueryInteger_2 | null
  gid?: FileConnectionGidQueryInteger_2 | null
  rdev?: FileConnectionRdevQueryInteger_2 | null
  blksize?: FileConnectionBlksizeQueryInteger_2 | null
  ino?: FileConnectionInoQueryInteger_2 | null
  blocks?: FileConnectionBlocksQueryInteger_2 | null
  atimeMs?: FileConnectionAtimeMsQueryFloat_2 | null
  mtimeMs?: FileConnectionMtimeMsQueryFloat_2 | null
  ctimeMs?: FileConnectionCtimeMsQueryFloat_2 | null
  birthtimeMs?: FileConnectionBirthtimeMsQueryFloat_2 | null
  atime?: FileConnectionAtimeQueryString_2 | null
  mtime?: FileConnectionMtimeQueryString_2 | null
  ctime?: FileConnectionCtimeQueryString_2 | null
  birthtime?: FileConnectionBirthtimeQueryString_2 | null
  publicURL?: PublicUrlQueryString_4 | null
}

export interface FileConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: FileConnectionInternalContentDigestQueryString_2 | null
  type?: FileConnectionInternalTypeQueryString_2 | null
  mediaType?: FileConnectionInternalMediaTypeQueryString_2 | null
  description?: FileConnectionInternalDescriptionQueryString_2 | null
  owner?: FileConnectionInternalOwnerQueryString_2 | null
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface PublicUrlQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DuotoneGradient {
  highlight?: string | null
  shadow?: string | null
  opacity?: number | null
}

export interface Potrace {
  turnPolicy?: PotraceTurnPolicy | null
  turdSize?: number | null
  alphaMax?: number | null
  optCurve?: boolean | null
  optTolerance?: number | null
  threshold?: number | null
  blackOnWhite?: boolean | null
  color?: string | null
  background?: string | null
}

export interface ImageSharpConnectionSort {
  fields: (ImageSharpConnectionSortByFieldsEnum | null)[]
  order?: ImageSharpConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: ImageSharpConnectionIdQueryString_2 | null
  internal?: ImageSharpConnectionInternalInputObject_2 | null
  fixed?: FixedTypeName_4 | null
  resolutions?: ResolutionsTypeName_4 | null
  fluid?: FluidTypeName_4 | null
  sizes?: SizesTypeName_4 | null
  original?: OriginalTypeName_4 | null
  resize?: ResizeTypeName_4 | null
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: ImageSharpConnectionInternalContentDigestQueryString_2 | null
  type?: ImageSharpConnectionInternalTypeQueryString_2 | null
  owner?: ImageSharpConnectionInternalOwnerQueryString_2 | null
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedTypeName_4 {
  base64?: FixedBase64QueryString_4 | null
  tracedSVG?: FixedTracedSvgQueryString_4 | null
  aspectRatio?: FixedAspectRatioQueryFloat_4 | null
  width?: FixedWidthQueryFloat_4 | null
  height?: FixedHeightQueryFloat_4 | null
  src?: FixedSrcQueryString_4 | null
  srcSet?: FixedSrcSetQueryString_4 | null
  srcWebp?: FixedSrcWebpQueryString_4 | null
  srcSetWebp?: FixedSrcSetWebpQueryString_4 | null
  originalName?: FixedOriginalNameQueryString_4 | null
}

export interface FixedBase64QueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedTracedSvgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedWidthQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedHeightQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcSetQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedOriginalNameQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsTypeName_4 {
  base64?: ResolutionsBase64QueryString_4 | null
  tracedSVG?: ResolutionsTracedSvgQueryString_4 | null
  aspectRatio?: ResolutionsAspectRatioQueryFloat_4 | null
  width?: ResolutionsWidthQueryFloat_4 | null
  height?: ResolutionsHeightQueryFloat_4 | null
  src?: ResolutionsSrcQueryString_4 | null
  srcSet?: ResolutionsSrcSetQueryString_4 | null
  srcWebp?: ResolutionsSrcWebpQueryString_4 | null
  srcSetWebp?: ResolutionsSrcSetWebpQueryString_4 | null
  originalName?: ResolutionsOriginalNameQueryString_4 | null
}

export interface ResolutionsBase64QueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidTypeName_4 {
  base64?: FluidBase64QueryString_4 | null
  tracedSVG?: FluidTracedSvgQueryString_4 | null
  aspectRatio?: FluidAspectRatioQueryFloat_4 | null
  src?: FluidSrcQueryString_4 | null
  srcSet?: FluidSrcSetQueryString_4 | null
  srcWebp?: FluidSrcWebpQueryString_4 | null
  srcSetWebp?: FluidSrcSetWebpQueryString_4 | null
  sizes?: FluidSizesQueryString_4 | null
  originalImg?: FluidOriginalImgQueryString_4 | null
  originalName?: FluidOriginalNameQueryString_4 | null
  presentationWidth?: FluidPresentationWidthQueryInt_4 | null
  presentationHeight?: FluidPresentationHeightQueryInt_4 | null
}

export interface FluidBase64QueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidTracedSvgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FluidSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcSetQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSizesQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidOriginalImgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidOriginalNameQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesTypeName_4 {
  base64?: SizesBase64QueryString_4 | null
  tracedSVG?: SizesTracedSvgQueryString_4 | null
  aspectRatio?: SizesAspectRatioQueryFloat_4 | null
  src?: SizesSrcQueryString_4 | null
  srcSet?: SizesSrcSetQueryString_4 | null
  srcWebp?: SizesSrcWebpQueryString_4 | null
  srcSetWebp?: SizesSrcSetWebpQueryString_4 | null
  sizes?: SizesSizesQueryString_4 | null
  originalImg?: SizesOriginalImgQueryString_4 | null
  originalName?: SizesOriginalNameQueryString_4 | null
  presentationWidth?: SizesPresentationWidthQueryInt_4 | null
  presentationHeight?: SizesPresentationHeightQueryInt_4 | null
}

export interface SizesBase64QueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesTracedSvgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcSetQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSizesQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesOriginalImgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesOriginalNameQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalTypeName_4 {
  width?: OriginalWidthQueryFloat_4 | null
  height?: OriginalHeightQueryFloat_4 | null
  src?: OriginalSrcQueryString_4 | null
}

export interface OriginalWidthQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalHeightQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeTypeName_4 {
  src?: ResizeSrcQueryString_4 | null
  tracedSVG?: ResizeTracedSvgQueryString_4 | null
  width?: ResizeWidthQueryInt_4 | null
  height?: ResizeHeightQueryInt_4 | null
  aspectRatio?: ResizeAspectRatioQueryFloat_4 | null
  originalName?: ResizeOriginalNameQueryString_4 | null
}

export interface ResizeSrcQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeWidthQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeHeightQueryInt_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionSort {
  fields: (JavascriptFrontmatterConnectionSortByFieldsEnum | null)[]
  order?: JavascriptFrontmatterConnectionSortOrderValues | null
}
/** Filter connection on its fields */
export interface FilterJavascriptFrontmatter {
  id?: JavascriptFrontmatterConnectionIdQueryString_2 | null
  node?: JavascriptFrontmatterConnectionNodeInputObject_2 | null
  internal?: JavascriptFrontmatterConnectionInternalInputObject_2 | null
  frontmatter?: JavascriptFrontmatterConnectionFrontmatterInputObject_2 | null
  fileAbsolutePath?: JavascriptFrontmatterConnectionFileAbsolutePathQueryString_2 | null
  fields?: JavascriptFrontmatterConnectionFieldsInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInputObject_2 {
  id?: JavascriptFrontmatterConnectionNodeIdQueryString_2 | null
  children?: JavascriptFrontmatterConnectionNodeChildrenQueryList_2 | null
  parent?: JavascriptFrontmatterConnectionNodeParentQueryString_2 | null
  internal?: JavascriptFrontmatterConnectionNodeInternalInputObject_2 | null
  sourceInstanceName?: JavascriptFrontmatterConnectionNodeSourceInstanceNameQueryString_2 | null
  absolutePath?: JavascriptFrontmatterConnectionNodeAbsolutePathQueryString_2 | null
  relativePath?: JavascriptFrontmatterConnectionNodeRelativePathQueryString_2 | null
  extension?: JavascriptFrontmatterConnectionNodeExtensionQueryString_2 | null
  size?: JavascriptFrontmatterConnectionNodeSizeQueryInteger_2 | null
  prettySize?: JavascriptFrontmatterConnectionNodePrettySizeQueryString_2 | null
  modifiedTime?: JavascriptFrontmatterConnectionNodeModifiedTimeQueryString_2 | null
  accessTime?: JavascriptFrontmatterConnectionNodeAccessTimeQueryString_2 | null
  changeTime?: JavascriptFrontmatterConnectionNodeChangeTimeQueryString_2 | null
  birthTime?: JavascriptFrontmatterConnectionNodeBirthTimeQueryString_2 | null
  root?: JavascriptFrontmatterConnectionNodeRootQueryString_2 | null
  dir?: JavascriptFrontmatterConnectionNodeDirQueryString_2 | null
  base?: JavascriptFrontmatterConnectionNodeBaseQueryString_2 | null
  ext?: JavascriptFrontmatterConnectionNodeExtQueryString_2 | null
  name?: JavascriptFrontmatterConnectionNodeNameQueryString_2 | null
  relativeDirectory?: JavascriptFrontmatterConnectionNodeRelativeDirectoryQueryString_2 | null
  dev?: JavascriptFrontmatterConnectionNodeDevQueryInteger_2 | null
  mode?: JavascriptFrontmatterConnectionNodeModeQueryInteger_2 | null
  nlink?: JavascriptFrontmatterConnectionNodeNlinkQueryInteger_2 | null
  uid?: JavascriptFrontmatterConnectionNodeUidQueryInteger_2 | null
  gid?: JavascriptFrontmatterConnectionNodeGidQueryInteger_2 | null
  rdev?: JavascriptFrontmatterConnectionNodeRdevQueryInteger_2 | null
  blksize?: JavascriptFrontmatterConnectionNodeBlksizeQueryInteger_2 | null
  ino?: JavascriptFrontmatterConnectionNodeInoQueryInteger_2 | null
  blocks?: JavascriptFrontmatterConnectionNodeBlocksQueryInteger_2 | null
  atimeMs?: JavascriptFrontmatterConnectionNodeAtimeMsQueryFloat_2 | null
  mtimeMs?: JavascriptFrontmatterConnectionNodeMtimeMsQueryFloat_2 | null
  ctimeMs?: JavascriptFrontmatterConnectionNodeCtimeMsQueryFloat_2 | null
  birthtimeMs?: JavascriptFrontmatterConnectionNodeBirthtimeMsQueryFloat_2 | null
  atime?: JavascriptFrontmatterConnectionNodeAtimeQueryString_2 | null
  mtime?: JavascriptFrontmatterConnectionNodeMtimeQueryString_2 | null
  ctime?: JavascriptFrontmatterConnectionNodeCtimeQueryString_2 | null
  birthtime?: JavascriptFrontmatterConnectionNodeBirthtimeQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionNodeIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeChildrenQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInternalInputObject_2 {
  contentDigest?: JavascriptFrontmatterConnectionNodeInternalContentDigestQueryString_2 | null
  type?: JavascriptFrontmatterConnectionNodeInternalTypeQueryString_2 | null
  mediaType?: JavascriptFrontmatterConnectionNodeInternalMediaTypeQueryString_2 | null
  description?: JavascriptFrontmatterConnectionNodeInternalDescriptionQueryString_2 | null
  owner?: JavascriptFrontmatterConnectionNodeInternalOwnerQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionNodeInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodePrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionNodeBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalInputObject_2 {
  contentDigest?: JavascriptFrontmatterConnectionInternalContentDigestQueryString_2 | null
  type?: JavascriptFrontmatterConnectionInternalTypeQueryString_2 | null
  owner?: JavascriptFrontmatterConnectionInternalOwnerQueryString_2 | null
  fieldOwners?: JavascriptFrontmatterConnectionInternalFieldOwnersInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalFieldOwnersInputObject_2 {
  slug?: JavascriptFrontmatterConnectionInternalFieldOwnersSlugQueryString_2 | null
  layout?: JavascriptFrontmatterConnectionInternalFieldOwnersLayoutQueryString_2 | null
  underConstruction?: JavascriptFrontmatterConnectionInternalFieldOwnersUnderConstructionQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalFieldOwnersLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionInternalFieldOwnersUnderConstructionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterInputObject_2 {
  title?: JavascriptFrontmatterConnectionFrontmatterTitleQueryString_2 | null
  lang?: JavascriptFrontmatterConnectionFrontmatterLangQueryString_2 | null
  logo?: JavascriptFrontmatterConnectionFrontmatterLogoQueryString_2 | null
  contact?: JavascriptFrontmatterConnectionFrontmatterContactQueryList_2 | null
  nav?: JavascriptFrontmatterConnectionFrontmatterNavInputObject_2 | null
  error?: JavascriptFrontmatterConnectionFrontmatterErrorQueryBoolean_2 | null
  layout?: JavascriptFrontmatterConnectionFrontmatterLayoutQueryString_2 | null
  sections?: JavascriptFrontmatterConnectionFrontmatterSectionsInputObject_2 | null
  underConstruction?: JavascriptFrontmatterConnectionFrontmatterUnderConstructionQueryBoolean_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterContactInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactInputObject_2 {
  address?: JavascriptFrontmatterConnectionFrontmatterContactAddressQueryList_2 | null
  contactName?: JavascriptFrontmatterConnectionFrontmatterContactContactNameQueryString_2 | null
  email?: JavascriptFrontmatterConnectionFrontmatterContactEmailQueryString_2 | null
  phone?: JavascriptFrontmatterConnectionFrontmatterContactPhoneQueryString_2 | null
  facebook?: JavascriptFrontmatterConnectionFrontmatterContactFacebookQueryString_2 | null
  instagram?: JavascriptFrontmatterConnectionFrontmatterContactInstagramQueryString_2 | null
  twitter?: JavascriptFrontmatterConnectionFrontmatterContactTwitterQueryString_2 | null
  youtube?: JavascriptFrontmatterConnectionFrontmatterContactYoutubeQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactAddressQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactContactNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactEmailQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactPhoneQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactFacebookQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactInstagramQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactTwitterQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterContactYoutubeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavInputObject_2 {
  home?: JavascriptFrontmatterConnectionFrontmatterNavHomeQueryString_2 | null
  navLinks?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavHomeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksInputObject_2 {
  label?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksLabelQueryString_2 | null
  to?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksToQueryString_2 | null
  links?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksInputObject_2 {
  label?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksLabelQueryString_2 | null
  to?: JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksToQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterNavNavLinksLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterErrorQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsInputObject_2 {
  notFound?: JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundInputObject_2 | null
  about1?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout1InputObject_2 | null
  about2?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout2InputObject_2 | null
  advantages?: JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesInputObject_2 | null
  tcs?: JavascriptFrontmatterConnectionFrontmatterSectionsTcsInputObject_2 | null
  qas?: JavascriptFrontmatterConnectionFrontmatterSectionsQasInputObject_2 | null
  contactUs?: JavascriptFrontmatterConnectionFrontmatterSectionsContactUsInputObject_2 | null
  contactDetails?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsInputObject_2 | null
  welcome?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeInputObject_2 | null
  more?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreInputObject_2 | null
  intro?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroInputObject_2 | null
  categoryList?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListInputObject_2 | null
  categories?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesInputObject_2 | null
  products?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundHeadingQueryString_2 | null
  subheading?: JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundSubheadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundImageQueryString_2 | null
  logo?: JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundLogoQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsNotFoundLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout1InputObject_2 {
  logo?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout1LogoQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout1ImageQueryString_2 | null
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout1HeadingQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout1BodyQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout1LogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout1ImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout1HeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout1BodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout2InputObject_2 {
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout2ImageQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsAbout2BodyQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout2ImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAbout2BodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesHeadingQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesBodyQueryList_2 | null
  points?: JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesPointsQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsAdvantagesPointsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsTcsInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsTcsHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsTcsImageQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsTcsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsTcsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsQasInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsQasHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsQasImageQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsQasHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsQasImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactUsInputObject_2 {
  logo?: JavascriptFrontmatterConnectionFrontmatterSectionsContactUsLogoQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsContactUsImageQueryString_2 | null
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsContactUsHeadingQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactUsLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactUsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactUsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsInputObject_2 {
  contact?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactInputObject_2 {
  address?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactAddressQueryList_2 | null
  contactName?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactContactNameQueryString_2 | null
  email?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactEmailQueryString_2 | null
  facebook?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactFacebookQueryString_2 | null
  instagram?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactInstagramQueryString_2 | null
  phone?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactPhoneQueryString_2 | null
  twitter?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactTwitterQueryString_2 | null
  youtube?: JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactYoutubeQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactAddressQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactContactNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactEmailQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactFacebookQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactInstagramQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactPhoneQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactTwitterQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsContactDetailsContactYoutubeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeInputObject_2 {
  logo?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeLogoQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeImageQueryString_2 | null
  quotes?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesQueryList_2 | null
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeHeadingQueryString_2 | null
  subheading?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesInputObject_2 {
  quote?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesQuoteQueryString_2 | null
  author?: JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesAuthorQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesQuoteQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeQuotesAuthorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsWelcomeSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreInputObject_2 {
  logo?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreLogoQueryString_2 | null
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreImageQueryString_2 | null
  link?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkInputObject_2 {
  to?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkToQueryString_2 | null
  label?: JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsMoreLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroImageQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroBodyQueryList_2 | null
  link?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkInputObject_2 | null
  subheading?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkInputObject_2 {
  to?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkToQueryString_2 | null
  label?: JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsIntroSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListInputObject_2 {
  categoryItems?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsImageQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsBodyQueryList_2 | null
  spec?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecQueryList_2 | null
  link?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecHeadingQueryString_2 | null
  params?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsInputObject_2 {
  key?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsKeyQueryString_2 | null
  value?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsValueQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsKeyQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsSpecParamsValueQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkInputObject_2 {
  to?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkToQueryString_2 | null
  label?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoryListCategoryItemsLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesHeadingQueryString_2 | null
  categoryLinks?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksQueryList_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesImageQueryString_2 | null
  subheading?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksInputObject_2 {
  label?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksLabelQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksImageQueryString_2 | null
  to?: JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksToQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesCategoryLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsCategoriesSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsInputObject_2 {
  productList?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListQueryList_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListQueryList_2 {
  elemMatch?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListInputObject_2 {
  heading?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListHeadingQueryString_2 | null
  image?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListImageQueryString_2 | null
  body?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListBodyQueryList_2 | null
  link?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkInputObject_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkInputObject_2 {
  to?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkToQueryString_2 | null
  label?: JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterSectionsProductsProductListLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFrontmatterUnderConstructionQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface JavascriptFrontmatterConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFieldsInputObject_2 {
  slug?: JavascriptFrontmatterConnectionFieldsSlugQueryString_2 | null
  layout?: JavascriptFrontmatterConnectionFieldsLayoutQueryString_2 | null
  underConstruction?: JavascriptFrontmatterConnectionFieldsUnderConstructionQueryBoolean_2 | null
}

export interface JavascriptFrontmatterConnectionFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFieldsLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterConnectionFieldsUnderConstructionQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalComponentNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentChunkNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageContextInputObject {
  slug?: SitePageContextSlugQueryString | null
  layout?: SitePageContextLayoutQueryString | null
}

export interface SitePageContextSlugQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageContextLayoutQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInputObject {
  resolve?: SitePagePluginCreatorResolveQueryString | null
  id?: SitePagePluginCreatorIdQueryString | null
  name?: SitePagePluginCreatorNameQueryString | null
  version?: SitePagePluginCreatorVersionQueryString | null
  pluginOptions?: SitePagePluginCreatorPluginOptionsInputObject | null
  nodeAPIs?: SitePagePluginCreatorNodeApIsQueryList | null
  browserAPIs?: SitePagePluginCreatorBrowserApIsQueryList | null
  ssrAPIs?: SitePagePluginCreatorSsrApIsQueryList | null
  pluginFilepath?: SitePagePluginCreatorPluginFilepathQueryString | null
  packageJson?: SitePagePluginCreatorPackageJsonInputObject | null
  parent?: SitePagePluginCreatorParentQueryString | null
  internal?: SitePagePluginCreatorInternalInputObject | null
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  name?: SitePagePluginCreatorPluginOptionsNameQueryString | null
  short_name?: SitePagePluginCreatorPluginOptionsShortNameQueryString | null
  start_url?: SitePagePluginCreatorPluginOptionsStartUrlQueryString | null
  background_color?: SitePagePluginCreatorPluginOptionsBackgroundColorQueryString | null
  theme_color?: SitePagePluginCreatorPluginOptionsThemeColorQueryString | null
  display?: SitePagePluginCreatorPluginOptionsDisplayQueryString | null
  icon?: SitePagePluginCreatorPluginOptionsIconQueryString | null
  path?: SitePagePluginCreatorPluginOptionsPathQueryString | null
  pathCheck?: SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorBrowserApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: SitePagePluginCreatorPackageJsonNameQueryString | null
  description?: SitePagePluginCreatorPackageJsonDescriptionQueryString | null
  version?: SitePagePluginCreatorPackageJsonVersionQueryString | null
  main?: SitePagePluginCreatorPackageJsonMainQueryString | null
  license?: SitePagePluginCreatorPackageJsonLicenseQueryString | null
  dependencies?: SitePagePluginCreatorPackageJsonDependenciesQueryList | null
  devDependencies?: SitePagePluginCreatorPackageJsonDevDependenciesQueryList | null
  peerDependencies?: SitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null
  keywords?: SitePagePluginCreatorPackageJsonKeywordsQueryList | null
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonDevDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: SitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null
  version?: SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: SitePagePluginCreatorInternalContentDigestQueryString | null
  type?: SitePagePluginCreatorInternalTypeQueryString | null
  owner?: SitePagePluginCreatorInternalOwnerQueryString | null
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageComponentPathQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalInputObject_2 {
  type?: SitePageInternalTypeQueryString_2 | null
  contentDigest?: SitePageInternalContentDigestQueryString_2 | null
  description?: SitePageInternalDescriptionQueryString | null
  owner?: SitePageInternalOwnerQueryString_2 | null
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalDescriptionQueryString {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginResolveQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsInputObject_2 {
  name?: SitePluginPluginOptionsNameQueryString_2 | null
  short_name?: SitePluginPluginOptionsShortNameQueryString_2 | null
  start_url?: SitePluginPluginOptionsStartUrlQueryString_2 | null
  background_color?: SitePluginPluginOptionsBackgroundColorQueryString_2 | null
  theme_color?: SitePluginPluginOptionsThemeColorQueryString_2 | null
  display?: SitePluginPluginOptionsDisplayQueryString_2 | null
  icon?: SitePluginPluginOptionsIconQueryString_2 | null
  path?: SitePluginPluginOptionsPathQueryString_2 | null
  pathCheck?: SitePluginPluginOptionsPathCheckQueryBoolean_2 | null
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginBrowserApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: SitePluginPackageJsonNameQueryString_2 | null
  description?: SitePluginPackageJsonDescriptionQueryString_2 | null
  version?: SitePluginPackageJsonVersionQueryString_2 | null
  main?: SitePluginPackageJsonMainQueryString_2 | null
  license?: SitePluginPackageJsonLicenseQueryString_2 | null
  dependencies?: SitePluginPackageJsonDependenciesQueryList_2 | null
  devDependencies?: SitePluginPackageJsonDevDependenciesQueryList_2 | null
  peerDependencies?: SitePluginPackageJsonPeerDependenciesQueryList_2 | null
  keywords?: SitePluginPackageJsonKeywordsQueryList_2 | null
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonDevDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: SitePluginPackageJsonDevDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: SitePluginPackageJsonPeerDependenciesInputObject_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: SitePluginPackageJsonPeerDependenciesNameQueryString_2 | null
  version?: SitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: SitePluginInternalContentDigestQueryString_2 | null
  type?: SitePluginInternalTypeQueryString_2 | null
  owner?: SitePluginInternalOwnerQueryString_2 | null
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteSiteMetadataInputObject_2 {
  title?: SiteSiteMetadataTitleQueryString_2 | null
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePortQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteHostQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePathPrefixQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface SiteBuildTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalInputObject_2 {
  contentDigest?: SiteInternalContentDigestQueryString_2 | null
  type?: SiteInternalTypeQueryString_2 | null
  owner?: SiteInternalOwnerQueryString_2 | null
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: DirectoryInternalContentDigestQueryString_2 | null
  type?: DirectoryInternalTypeQueryString_2 | null
  description?: DirectoryInternalDescriptionQueryString_2 | null
  owner?: DirectoryInternalOwnerQueryString_2 | null
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectorySizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface DirectoryAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileInternalInputObject_2 {
  contentDigest?: FileInternalContentDigestQueryString_2 | null
  type?: FileInternalTypeQueryString_2 | null
  mediaType?: FileInternalMediaTypeQueryString_2 | null
  description?: FileInternalDescriptionQueryString_2 | null
  owner?: FileInternalOwnerQueryString_2 | null
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FilePrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FileAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FileBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface PublicUrlQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: ImageSharpInternalContentDigestQueryString_2 | null
  type?: ImageSharpInternalTypeQueryString_2 | null
  owner?: ImageSharpInternalOwnerQueryString_2 | null
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedTypeName_3 {
  base64?: FixedBase64QueryString_3 | null
  tracedSVG?: FixedTracedSvgQueryString_3 | null
  aspectRatio?: FixedAspectRatioQueryFloat_3 | null
  width?: FixedWidthQueryFloat_3 | null
  height?: FixedHeightQueryFloat_3 | null
  src?: FixedSrcQueryString_3 | null
  srcSet?: FixedSrcSetQueryString_3 | null
  srcWebp?: FixedSrcWebpQueryString_3 | null
  srcSetWebp?: FixedSrcSetWebpQueryString_3 | null
  originalName?: FixedOriginalNameQueryString_3 | null
}

export interface FixedBase64QueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedTracedSvgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedWidthQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedHeightQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FixedSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcSetQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FixedOriginalNameQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsTypeName_3 {
  base64?: ResolutionsBase64QueryString_3 | null
  tracedSVG?: ResolutionsTracedSvgQueryString_3 | null
  aspectRatio?: ResolutionsAspectRatioQueryFloat_3 | null
  width?: ResolutionsWidthQueryFloat_3 | null
  height?: ResolutionsHeightQueryFloat_3 | null
  src?: ResolutionsSrcQueryString_3 | null
  srcSet?: ResolutionsSrcSetQueryString_3 | null
  srcWebp?: ResolutionsSrcWebpQueryString_3 | null
  srcSetWebp?: ResolutionsSrcSetWebpQueryString_3 | null
  originalName?: ResolutionsOriginalNameQueryString_3 | null
}

export interface ResolutionsBase64QueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResolutionsSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidTypeName_3 {
  base64?: FluidBase64QueryString_3 | null
  tracedSVG?: FluidTracedSvgQueryString_3 | null
  aspectRatio?: FluidAspectRatioQueryFloat_3 | null
  src?: FluidSrcQueryString_3 | null
  srcSet?: FluidSrcSetQueryString_3 | null
  srcWebp?: FluidSrcWebpQueryString_3 | null
  srcSetWebp?: FluidSrcSetWebpQueryString_3 | null
  sizes?: FluidSizesQueryString_3 | null
  originalImg?: FluidOriginalImgQueryString_3 | null
  originalName?: FluidOriginalNameQueryString_3 | null
  presentationWidth?: FluidPresentationWidthQueryInt_3 | null
  presentationHeight?: FluidPresentationHeightQueryInt_3 | null
}

export interface FluidBase64QueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidTracedSvgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FluidSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcSetQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidSizesQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidOriginalImgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidOriginalNameQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesTypeName_3 {
  base64?: SizesBase64QueryString_3 | null
  tracedSVG?: SizesTracedSvgQueryString_3 | null
  aspectRatio?: SizesAspectRatioQueryFloat_3 | null
  src?: SizesSrcQueryString_3 | null
  srcSet?: SizesSrcSetQueryString_3 | null
  srcWebp?: SizesSrcWebpQueryString_3 | null
  srcSetWebp?: SizesSrcSetWebpQueryString_3 | null
  sizes?: SizesSizesQueryString_3 | null
  originalImg?: SizesOriginalImgQueryString_3 | null
  originalName?: SizesOriginalNameQueryString_3 | null
  presentationWidth?: SizesPresentationWidthQueryInt_3 | null
  presentationHeight?: SizesPresentationHeightQueryInt_3 | null
}

export interface SizesBase64QueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesTracedSvgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcSetQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesSizesQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesOriginalImgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesOriginalNameQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalTypeName_3 {
  width?: OriginalWidthQueryFloat_3 | null
  height?: OriginalHeightQueryFloat_3 | null
  src?: OriginalSrcQueryString_3 | null
}

export interface OriginalWidthQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalHeightQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface OriginalSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeTypeName_3 {
  src?: ResizeSrcQueryString_3 | null
  tracedSVG?: ResizeTracedSvgQueryString_3 | null
  width?: ResizeWidthQueryInt_3 | null
  height?: ResizeHeightQueryInt_3 | null
  aspectRatio?: ResizeAspectRatioQueryFloat_3 | null
  originalName?: ResizeOriginalNameQueryString_3 | null
}

export interface ResizeSrcQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface ResizeWidthQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeHeightQueryInt_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInputObject_2 {
  id?: JavascriptFrontmatterNodeIdQueryString_2 | null
  children?: JavascriptFrontmatterNodeChildrenQueryList_2 | null
  parent?: JavascriptFrontmatterNodeParentQueryString_2 | null
  internal?: JavascriptFrontmatterNodeInternalInputObject_2 | null
  sourceInstanceName?: JavascriptFrontmatterNodeSourceInstanceNameQueryString_2 | null
  absolutePath?: JavascriptFrontmatterNodeAbsolutePathQueryString_2 | null
  relativePath?: JavascriptFrontmatterNodeRelativePathQueryString_2 | null
  extension?: JavascriptFrontmatterNodeExtensionQueryString_2 | null
  size?: JavascriptFrontmatterNodeSizeQueryInteger_2 | null
  prettySize?: JavascriptFrontmatterNodePrettySizeQueryString_2 | null
  modifiedTime?: JavascriptFrontmatterNodeModifiedTimeQueryString_2 | null
  accessTime?: JavascriptFrontmatterNodeAccessTimeQueryString_2 | null
  changeTime?: JavascriptFrontmatterNodeChangeTimeQueryString_2 | null
  birthTime?: JavascriptFrontmatterNodeBirthTimeQueryString_2 | null
  root?: JavascriptFrontmatterNodeRootQueryString_2 | null
  dir?: JavascriptFrontmatterNodeDirQueryString_2 | null
  base?: JavascriptFrontmatterNodeBaseQueryString_2 | null
  ext?: JavascriptFrontmatterNodeExtQueryString_2 | null
  name?: JavascriptFrontmatterNodeNameQueryString_2 | null
  relativeDirectory?: JavascriptFrontmatterNodeRelativeDirectoryQueryString_2 | null
  dev?: JavascriptFrontmatterNodeDevQueryInteger_2 | null
  mode?: JavascriptFrontmatterNodeModeQueryInteger_2 | null
  nlink?: JavascriptFrontmatterNodeNlinkQueryInteger_2 | null
  uid?: JavascriptFrontmatterNodeUidQueryInteger_2 | null
  gid?: JavascriptFrontmatterNodeGidQueryInteger_2 | null
  rdev?: JavascriptFrontmatterNodeRdevQueryInteger_2 | null
  blksize?: JavascriptFrontmatterNodeBlksizeQueryInteger_2 | null
  ino?: JavascriptFrontmatterNodeInoQueryInteger_2 | null
  blocks?: JavascriptFrontmatterNodeBlocksQueryInteger_2 | null
  atimeMs?: JavascriptFrontmatterNodeAtimeMsQueryFloat_2 | null
  mtimeMs?: JavascriptFrontmatterNodeMtimeMsQueryFloat_2 | null
  ctimeMs?: JavascriptFrontmatterNodeCtimeMsQueryFloat_2 | null
  birthtimeMs?: JavascriptFrontmatterNodeBirthtimeMsQueryFloat_2 | null
  atime?: JavascriptFrontmatterNodeAtimeQueryString_2 | null
  mtime?: JavascriptFrontmatterNodeMtimeQueryString_2 | null
  ctime?: JavascriptFrontmatterNodeCtimeQueryString_2 | null
  birthtime?: JavascriptFrontmatterNodeBirthtimeQueryString_2 | null
}

export interface JavascriptFrontmatterNodeIdQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeChildrenQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeParentQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInternalInputObject_2 {
  contentDigest?: JavascriptFrontmatterNodeInternalContentDigestQueryString_2 | null
  type?: JavascriptFrontmatterNodeInternalTypeQueryString_2 | null
  mediaType?: JavascriptFrontmatterNodeInternalMediaTypeQueryString_2 | null
  description?: JavascriptFrontmatterNodeInternalDescriptionQueryString_2 | null
  owner?: JavascriptFrontmatterNodeInternalOwnerQueryString_2 | null
}

export interface JavascriptFrontmatterNodeInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInternalMediaTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInternalDescriptionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeSourceInstanceNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeRelativePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeExtensionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeSizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodePrettySizeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeModifiedTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeAccessTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeChangeTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeBirthTimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeRootQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeDirQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeBaseQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeExtQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeRelativeDirectoryQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeDevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeModeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeNlinkQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeUidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeGidQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeRdevQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeBlksizeQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeInoQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeBlocksQueryInteger_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeAtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeMtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeCtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeBirthtimeMsQueryFloat_2 {
  eq?: number | null
  ne?: number | null
  gt?: number | null
  gte?: number | null
  lt?: number | null
  lte?: number | null
  in?: (number | null)[] | null
  nin?: (number | null)[] | null
}

export interface JavascriptFrontmatterNodeAtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeMtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeCtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterNodeBirthtimeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalInputObject_2 {
  contentDigest?: JavascriptFrontmatterInternalContentDigestQueryString_2 | null
  type?: JavascriptFrontmatterInternalTypeQueryString_2 | null
  owner?: JavascriptFrontmatterInternalOwnerQueryString_2 | null
  fieldOwners?: JavascriptFrontmatterInternalFieldOwnersInputObject_2 | null
}

export interface JavascriptFrontmatterInternalContentDigestQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalTypeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalOwnerQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalFieldOwnersInputObject_2 {
  slug?: JavascriptFrontmatterInternalFieldOwnersSlugQueryString_2 | null
  layout?: JavascriptFrontmatterInternalFieldOwnersLayoutQueryString_2 | null
  underConstruction?: JavascriptFrontmatterInternalFieldOwnersUnderConstructionQueryString_2 | null
}

export interface JavascriptFrontmatterInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalFieldOwnersLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterInternalFieldOwnersUnderConstructionQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterInputObject_2 {
  title?: JavascriptFrontmatterFrontmatterTitleQueryString_2 | null
  lang?: JavascriptFrontmatterFrontmatterLangQueryString_2 | null
  logo?: JavascriptFrontmatterFrontmatterLogoQueryString_2 | null
  contact?: JavascriptFrontmatterFrontmatterContactQueryList_2 | null
  nav?: JavascriptFrontmatterFrontmatterNavInputObject_2 | null
  error?: JavascriptFrontmatterFrontmatterErrorQueryBoolean_2 | null
  layout?: JavascriptFrontmatterFrontmatterLayoutQueryString_2 | null
  sections?: JavascriptFrontmatterFrontmatterSectionsInputObject_2 | null
  underConstruction?: JavascriptFrontmatterFrontmatterUnderConstructionQueryBoolean_2 | null
}

export interface JavascriptFrontmatterFrontmatterTitleQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterLangQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterContactInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterContactInputObject_2 {
  address?: JavascriptFrontmatterFrontmatterContactAddressQueryList_2 | null
  contactName?: JavascriptFrontmatterFrontmatterContactContactNameQueryString_2 | null
  email?: JavascriptFrontmatterFrontmatterContactEmailQueryString_2 | null
  phone?: JavascriptFrontmatterFrontmatterContactPhoneQueryString_2 | null
  facebook?: JavascriptFrontmatterFrontmatterContactFacebookQueryString_2 | null
  instagram?: JavascriptFrontmatterFrontmatterContactInstagramQueryString_2 | null
  twitter?: JavascriptFrontmatterFrontmatterContactTwitterQueryString_2 | null
  youtube?: JavascriptFrontmatterFrontmatterContactYoutubeQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterContactAddressQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactContactNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactEmailQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactPhoneQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactFacebookQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactInstagramQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactTwitterQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterContactYoutubeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterNavInputObject_2 {
  home?: JavascriptFrontmatterFrontmatterNavHomeQueryString_2 | null
  navLinks?: JavascriptFrontmatterFrontmatterNavNavLinksQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterNavHomeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterNavNavLinksInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksInputObject_2 {
  label?: JavascriptFrontmatterFrontmatterNavNavLinksLabelQueryString_2 | null
  to?: JavascriptFrontmatterFrontmatterNavNavLinksToQueryString_2 | null
  links?: JavascriptFrontmatterFrontmatterNavNavLinksLinksQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterNavNavLinksLinksInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksLinksInputObject_2 {
  label?: JavascriptFrontmatterFrontmatterNavNavLinksLinksLabelQueryString_2 | null
  to?: JavascriptFrontmatterFrontmatterNavNavLinksLinksToQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterNavNavLinksLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterErrorQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsInputObject_2 {
  notFound?: JavascriptFrontmatterFrontmatterSectionsNotFoundInputObject_2 | null
  about1?: JavascriptFrontmatterFrontmatterSectionsAbout1InputObject_2 | null
  about2?: JavascriptFrontmatterFrontmatterSectionsAbout2InputObject_2 | null
  advantages?: JavascriptFrontmatterFrontmatterSectionsAdvantagesInputObject_2 | null
  tcs?: JavascriptFrontmatterFrontmatterSectionsTcsInputObject_2 | null
  qas?: JavascriptFrontmatterFrontmatterSectionsQasInputObject_2 | null
  contactUs?: JavascriptFrontmatterFrontmatterSectionsContactUsInputObject_2 | null
  contactDetails?: JavascriptFrontmatterFrontmatterSectionsContactDetailsInputObject_2 | null
  welcome?: JavascriptFrontmatterFrontmatterSectionsWelcomeInputObject_2 | null
  more?: JavascriptFrontmatterFrontmatterSectionsMoreInputObject_2 | null
  intro?: JavascriptFrontmatterFrontmatterSectionsIntroInputObject_2 | null
  categoryList?: JavascriptFrontmatterFrontmatterSectionsCategoryListInputObject_2 | null
  categories?: JavascriptFrontmatterFrontmatterSectionsCategoriesInputObject_2 | null
  products?: JavascriptFrontmatterFrontmatterSectionsProductsInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsNotFoundInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsNotFoundHeadingQueryString_2 | null
  subheading?: JavascriptFrontmatterFrontmatterSectionsNotFoundSubheadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsNotFoundImageQueryString_2 | null
  logo?: JavascriptFrontmatterFrontmatterSectionsNotFoundLogoQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsNotFoundHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsNotFoundSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsNotFoundImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsNotFoundLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout1InputObject_2 {
  logo?: JavascriptFrontmatterFrontmatterSectionsAbout1LogoQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsAbout1ImageQueryString_2 | null
  heading?: JavascriptFrontmatterFrontmatterSectionsAbout1HeadingQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsAbout1BodyQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout1LogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout1ImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout1HeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout1BodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout2InputObject_2 {
  image?: JavascriptFrontmatterFrontmatterSectionsAbout2ImageQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsAbout2BodyQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout2ImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAbout2BodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAdvantagesInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsAdvantagesHeadingQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsAdvantagesBodyQueryList_2 | null
  points?: JavascriptFrontmatterFrontmatterSectionsAdvantagesPointsQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAdvantagesHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAdvantagesBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsAdvantagesPointsQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsTcsInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsTcsHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsTcsImageQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsTcsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsTcsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsQasInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsQasHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsQasImageQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsQasHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsQasImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactUsInputObject_2 {
  logo?: JavascriptFrontmatterFrontmatterSectionsContactUsLogoQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsContactUsImageQueryString_2 | null
  heading?: JavascriptFrontmatterFrontmatterSectionsContactUsHeadingQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactUsLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactUsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactUsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsInputObject_2 {
  contact?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactInputObject_2 {
  address?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactAddressQueryList_2 | null
  contactName?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactContactNameQueryString_2 | null
  email?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactEmailQueryString_2 | null
  facebook?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactFacebookQueryString_2 | null
  instagram?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactInstagramQueryString_2 | null
  phone?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactPhoneQueryString_2 | null
  twitter?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactTwitterQueryString_2 | null
  youtube?: JavascriptFrontmatterFrontmatterSectionsContactDetailsContactYoutubeQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactAddressQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactContactNameQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactEmailQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactFacebookQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactInstagramQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactPhoneQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactTwitterQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsContactDetailsContactYoutubeQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeInputObject_2 {
  logo?: JavascriptFrontmatterFrontmatterSectionsWelcomeLogoQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsWelcomeImageQueryString_2 | null
  quotes?: JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesQueryList_2 | null
  heading?: JavascriptFrontmatterFrontmatterSectionsWelcomeHeadingQueryString_2 | null
  subheading?: JavascriptFrontmatterFrontmatterSectionsWelcomeSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesInputObject_2 {
  quote?: JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesQuoteQueryString_2 | null
  author?: JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesAuthorQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesQuoteQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeQuotesAuthorQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsWelcomeSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreInputObject_2 {
  logo?: JavascriptFrontmatterFrontmatterSectionsMoreLogoQueryString_2 | null
  heading?: JavascriptFrontmatterFrontmatterSectionsMoreHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsMoreImageQueryString_2 | null
  link?: JavascriptFrontmatterFrontmatterSectionsMoreLinkInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreLogoQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreLinkInputObject_2 {
  to?: JavascriptFrontmatterFrontmatterSectionsMoreLinkToQueryString_2 | null
  label?: JavascriptFrontmatterFrontmatterSectionsMoreLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsMoreLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsIntroHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsIntroImageQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsIntroBodyQueryList_2 | null
  link?: JavascriptFrontmatterFrontmatterSectionsIntroLinkInputObject_2 | null
  subheading?: JavascriptFrontmatterFrontmatterSectionsIntroSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroLinkInputObject_2 {
  to?: JavascriptFrontmatterFrontmatterSectionsIntroLinkToQueryString_2 | null
  label?: JavascriptFrontmatterFrontmatterSectionsIntroLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsIntroSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListInputObject_2 {
  categoryItems?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsImageQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsBodyQueryList_2 | null
  spec?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecQueryList_2 | null
  link?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecHeadingQueryString_2 | null
  params?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsInputObject_2 {
  key?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsKeyQueryString_2 | null
  value?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsValueQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsKeyQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsSpecParamsValueQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkInputObject_2 {
  to?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkToQueryString_2 | null
  label?: JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoryListCategoryItemsLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsCategoriesHeadingQueryString_2 | null
  categoryLinks?: JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksQueryList_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsCategoriesImageQueryString_2 | null
  subheading?: JavascriptFrontmatterFrontmatterSectionsCategoriesSubheadingQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksInputObject_2 {
  label?: JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksLabelQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksImageQueryString_2 | null
  to?: JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksToQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesCategoryLinksToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsCategoriesSubheadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsInputObject_2 {
  productList?: JavascriptFrontmatterFrontmatterSectionsProductsProductListQueryList_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListQueryList_2 {
  elemMatch?: JavascriptFrontmatterFrontmatterSectionsProductsProductListInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListInputObject_2 {
  heading?: JavascriptFrontmatterFrontmatterSectionsProductsProductListHeadingQueryString_2 | null
  image?: JavascriptFrontmatterFrontmatterSectionsProductsProductListImageQueryString_2 | null
  body?: JavascriptFrontmatterFrontmatterSectionsProductsProductListBodyQueryList_2 | null
  link?: JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkInputObject_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListHeadingQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListImageQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListBodyQueryList_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkInputObject_2 {
  to?: JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkToQueryString_2 | null
  label?: JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkLabelQueryString_2 | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkToQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterSectionsProductsProductListLinkLabelQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFrontmatterUnderConstructionQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}

export interface JavascriptFrontmatterFileAbsolutePathQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFieldsInputObject_2 {
  slug?: JavascriptFrontmatterFieldsSlugQueryString_2 | null
  layout?: JavascriptFrontmatterFieldsLayoutQueryString_2 | null
  underConstruction?: JavascriptFrontmatterFieldsUnderConstructionQueryBoolean_2 | null
}

export interface JavascriptFrontmatterFieldsSlugQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFieldsLayoutQueryString_2 {
  eq?: string | null
  ne?: string | null
  regex?: string | null
  glob?: string | null
  in?: (string | null)[] | null
  nin?: (string | null)[] | null
}

export interface JavascriptFrontmatterFieldsUnderConstructionQueryBoolean_2 {
  eq?: boolean | null
  ne?: boolean | null
  in?: (boolean | null)[] | null
  nin?: (boolean | null)[] | null
}
export interface AllSitePageQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePageConnectionSort | null
  filter?: FilterSitePage | null
}
export interface AllSitePluginQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: SitePluginConnectionSort | null
  filter?: FilterSitePlugin | null
}
export interface AllDirectoryQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: DirectoryConnectionSort | null
  filter?: FilterDirectory | null
}
export interface AllFileQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: FileConnectionSort | null
  filter?: FilterFile | null
}
export interface AllImageSharpQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: ImageSharpConnectionSort | null
  filter?: FilterImageSharp | null
}
export interface AllJavascriptFrontmatterQueryArgs {
  skip?: number | null
  limit?: number | null
  sort?: JavascriptFrontmatterConnectionSort | null
  filter?: FilterJavascriptFrontmatter | null
}
export interface SitePageQueryArgs {
  jsonName?: SitePageJsonNameQueryString | null
  internalComponentName?: SitePageInternalComponentNameQueryString | null
  path?: SitePagePathQueryString_2 | null
  component?: SitePageComponentQueryString | null
  componentChunkName?: SitePageComponentChunkNameQueryString | null
  context?: SitePageContextInputObject | null
  pluginCreator?: SitePagePluginCreatorInputObject | null
  pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
  componentPath?: SitePageComponentPathQueryString | null
  id?: SitePageIdQueryString_2 | null
  internal?: SitePageInternalInputObject_2 | null
}
export interface SitePluginQueryArgs {
  resolve?: SitePluginResolveQueryString_2 | null
  id?: SitePluginIdQueryString_2 | null
  name?: SitePluginNameQueryString_2 | null
  version?: SitePluginVersionQueryString_2 | null
  pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
  nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
  browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
  ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
  pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
  packageJson?: SitePluginPackageJsonInputObject_2 | null
  internal?: SitePluginInternalInputObject_2 | null
}
export interface SiteQueryArgs {
  siteMetadata?: SiteSiteMetadataInputObject_2 | null
  port?: SitePortQueryString_2 | null
  host?: SiteHostQueryString_2 | null
  pathPrefix?: SitePathPrefixQueryString_2 | null
  polyfill?: SitePolyfillQueryBoolean_2 | null
  buildTime?: SiteBuildTimeQueryString_2 | null
  id?: SiteIdQueryString_2 | null
  internal?: SiteInternalInputObject_2 | null
}
export interface DirectoryQueryArgs {
  id?: DirectoryIdQueryString_2 | null
  internal?: DirectoryInternalInputObject_2 | null
  sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null
  absolutePath?: DirectoryAbsolutePathQueryString_2 | null
  relativePath?: DirectoryRelativePathQueryString_2 | null
  extension?: DirectoryExtensionQueryString_2 | null
  size?: DirectorySizeQueryInteger_2 | null
  prettySize?: DirectoryPrettySizeQueryString_2 | null
  modifiedTime?: DirectoryModifiedTimeQueryString_2 | null
  accessTime?: DirectoryAccessTimeQueryString_2 | null
  changeTime?: DirectoryChangeTimeQueryString_2 | null
  birthTime?: DirectoryBirthTimeQueryString_2 | null
  root?: DirectoryRootQueryString_2 | null
  dir?: DirectoryDirQueryString_2 | null
  base?: DirectoryBaseQueryString_2 | null
  ext?: DirectoryExtQueryString_2 | null
  name?: DirectoryNameQueryString_2 | null
  relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null
  dev?: DirectoryDevQueryInteger_2 | null
  mode?: DirectoryModeQueryInteger_2 | null
  nlink?: DirectoryNlinkQueryInteger_2 | null
  uid?: DirectoryUidQueryInteger_2 | null
  gid?: DirectoryGidQueryInteger_2 | null
  rdev?: DirectoryRdevQueryInteger_2 | null
  blksize?: DirectoryBlksizeQueryInteger_2 | null
  ino?: DirectoryInoQueryInteger_2 | null
  blocks?: DirectoryBlocksQueryInteger_2 | null
  atimeMs?: DirectoryAtimeMsQueryFloat_2 | null
  mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null
  ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null
  birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null
  atime?: DirectoryAtimeQueryString_2 | null
  mtime?: DirectoryMtimeQueryString_2 | null
  ctime?: DirectoryCtimeQueryString_2 | null
  birthtime?: DirectoryBirthtimeQueryString_2 | null
}
export interface FileQueryArgs {
  id?: FileIdQueryString_2 | null
  internal?: FileInternalInputObject_2 | null
  sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null
  absolutePath?: FileAbsolutePathQueryString_2 | null
  relativePath?: FileRelativePathQueryString_2 | null
  extension?: FileExtensionQueryString_2 | null
  size?: FileSizeQueryInteger_2 | null
  prettySize?: FilePrettySizeQueryString_2 | null
  modifiedTime?: FileModifiedTimeQueryString_2 | null
  accessTime?: FileAccessTimeQueryString_2 | null
  changeTime?: FileChangeTimeQueryString_2 | null
  birthTime?: FileBirthTimeQueryString_2 | null
  root?: FileRootQueryString_2 | null
  dir?: FileDirQueryString_2 | null
  base?: FileBaseQueryString_2 | null
  ext?: FileExtQueryString_2 | null
  name?: FileNameQueryString_2 | null
  relativeDirectory?: FileRelativeDirectoryQueryString_2 | null
  dev?: FileDevQueryInteger_2 | null
  mode?: FileModeQueryInteger_2 | null
  nlink?: FileNlinkQueryInteger_2 | null
  uid?: FileUidQueryInteger_2 | null
  gid?: FileGidQueryInteger_2 | null
  rdev?: FileRdevQueryInteger_2 | null
  blksize?: FileBlksizeQueryInteger_2 | null
  ino?: FileInoQueryInteger_2 | null
  blocks?: FileBlocksQueryInteger_2 | null
  atimeMs?: FileAtimeMsQueryFloat_2 | null
  mtimeMs?: FileMtimeMsQueryFloat_2 | null
  ctimeMs?: FileCtimeMsQueryFloat_2 | null
  birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null
  atime?: FileAtimeQueryString_2 | null
  mtime?: FileMtimeQueryString_2 | null
  ctime?: FileCtimeQueryString_2 | null
  birthtime?: FileBirthtimeQueryString_2 | null
  publicURL?: PublicUrlQueryString_3 | null
}
export interface ImageSharpQueryArgs {
  id?: ImageSharpIdQueryString_2 | null
  internal?: ImageSharpInternalInputObject_2 | null
  fixed?: FixedTypeName_3 | null
  resolutions?: ResolutionsTypeName_3 | null
  fluid?: FluidTypeName_3 | null
  sizes?: SizesTypeName_3 | null
  original?: OriginalTypeName_3 | null
  resize?: ResizeTypeName_3 | null
}
export interface JavascriptFrontmatterQueryArgs {
  id?: JavascriptFrontmatterIdQueryString_2 | null
  node?: JavascriptFrontmatterNodeInputObject_2 | null
  internal?: JavascriptFrontmatterInternalInputObject_2 | null
  frontmatter?: JavascriptFrontmatterFrontmatterInputObject_2 | null
  fileAbsolutePath?: JavascriptFrontmatterFileAbsolutePathQueryString_2 | null
  fields?: JavascriptFrontmatterFieldsInputObject_2 | null
}
export interface DistinctSitePageConnectionArgs {
  field?: SitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
  field?: SitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: SitePluginGroupEnum | null
}
export interface DistinctDirectoryConnectionArgs {
  field?: DirectoryDistinctEnum | null
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: DirectoryGroupEnum | null
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface DistinctFileConnectionArgs {
  field?: FileDistinctEnum | null
}
export interface GroupFileConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: FileGroupEnum | null
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ModifiedTimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface AtimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface MtimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface CtimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeNode_2Args {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface FixedImageSharpArgs {
  width?: number | null
  height?: number | null
  jpegProgressive?: boolean | null
  grayscale?: boolean | null
  duotone?: DuotoneGradient | null
  traceSVG?: Potrace | null
  quality?: number | null
  toFormat?: ImageFormat | null
  cropFocus?: ImageCropFocus | null
  rotate?: number | null
}
export interface ResolutionsImageSharpArgs {
  width?: number | null
  height?: number | null
  jpegProgressive?: boolean | null
  grayscale?: boolean | null
  duotone?: DuotoneGradient | null
  traceSVG?: Potrace | null
  quality?: number | null
  toFormat?: ImageFormat | null
  cropFocus?: ImageCropFocus | null
  rotate?: number | null
}
export interface FluidImageSharpArgs {
  maxWidth?: number | null
  maxHeight?: number | null
  grayscale?: boolean | null
  jpegProgressive?: boolean | null
  duotone?: DuotoneGradient | null
  traceSVG?: Potrace | null
  quality?: number | null
  toFormat?: ImageFormat | null
  cropFocus?: ImageCropFocus | null
  rotate?: number | null
  sizes?: string | null
}
export interface SizesImageSharpArgs {
  maxWidth?: number | null
  maxHeight?: number | null
  grayscale?: boolean | null
  jpegProgressive?: boolean | null
  duotone?: DuotoneGradient | null
  traceSVG?: Potrace | null
  quality?: number | null
  toFormat?: ImageFormat | null
  cropFocus?: ImageCropFocus | null
  rotate?: number | null
  sizes?: string | null
}
export interface ResizeImageSharpArgs {
  width?: number | null
  height?: number | null
  quality?: number | null
  jpegProgressive?: boolean | null
  pngCompressionLevel?: number | null
  grayscale?: boolean | null
  duotone?: DuotoneGradient | null
  base64?: boolean | null
  traceSVG?: Potrace | null
  toFormat?: ImageFormat | null
  cropFocus?: ImageCropFocus | null
  rotate?: number | null
}
export interface DistinctImageSharpConnectionArgs {
  field?: ImageSharpDistinctEnum | null
}
export interface GroupImageSharpConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: ImageSharpGroupEnum | null
}
export interface DistinctJavascriptFrontmatterConnectionArgs {
  field?: JavascriptFrontmatterDistinctEnum | null
}
export interface GroupJavascriptFrontmatterConnectionArgs {
  skip?: number | null
  limit?: number | null
  field?: JavascriptFrontmatterGroupEnum | null
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___layout = 'context___layout',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePageDistinctEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___layout = 'context___layout',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePageGroupEnum {
  jsonName = 'jsonName',
  internalComponentName = 'internalComponentName',
  path = 'path',
  component = 'component',
  componentChunkName = 'componentChunkName',
  context___slug = 'context___slug',
  context___layout = 'context___layout',
  pluginCreator___NODE = 'pluginCreator___NODE',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent = 'parent',
  internal___type = 'internal___type',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SitePluginDistinctEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  resolve = 'resolve',
  id = 'id',
  name = 'name',
  version = 'version',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___short_name = 'pluginOptions___short_name',
  pluginOptions___start_url = 'pluginOptions___start_url',
  pluginOptions___background_color = 'pluginOptions___background_color',
  pluginOptions___theme_color = 'pluginOptions___theme_color',
  pluginOptions___display = 'pluginOptions___display',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___keywords = 'packageJson___keywords',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum DirectoryDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileConnectionSortByFieldsEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  publicURL = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION',
}

export enum FileDistinctEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum FileGroupEnum {
  id = 'id',
  children = 'children',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___mediaType = 'internal___mediaType',
  internal___description = 'internal___description',
  internal___owner = 'internal___owner',
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  blksize = 'blksize',
  ino = 'ino',
  blocks = 'blocks',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  birthtimeMs = 'birthtimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
}

export enum ImageSharpConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  resolutions___base64 = 'resolutions___base64',
  resolutions___tracedSVG = 'resolutions___tracedSVG',
  resolutions___aspectRatio = 'resolutions___aspectRatio',
  resolutions___width = 'resolutions___width',
  resolutions___height = 'resolutions___height',
  resolutions___src = 'resolutions___src',
  resolutions___srcSet = 'resolutions___srcSet',
  resolutions___srcWebp = 'resolutions___srcWebp',
  resolutions___srcSetWebp = 'resolutions___srcSetWebp',
  resolutions___originalName = 'resolutions___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  sizes___base64 = 'sizes___base64',
  sizes___tracedSVG = 'sizes___tracedSVG',
  sizes___aspectRatio = 'sizes___aspectRatio',
  sizes___src = 'sizes___src',
  sizes___srcSet = 'sizes___srcSet',
  sizes___srcWebp = 'sizes___srcWebp',
  sizes___srcSetWebp = 'sizes___srcSetWebp',
  sizes___sizes = 'sizes___sizes',
  sizes___originalImg = 'sizes___originalImg',
  sizes___originalName = 'sizes___originalName',
  sizes___presentationWidth = 'sizes___presentationWidth',
  sizes___presentationHeight = 'sizes___presentationHeight',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
}

export enum ImageSharpConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum ImageSharpDistinctEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum ImageSharpGroupEnum {
  id = 'id',
  parent = 'parent',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
}

export enum JavascriptFrontmatterConnectionSortByFieldsEnum {
  id = 'id',
  parent = 'parent',
  node___id = 'node___id',
  node___children = 'node___children',
  node___parent = 'node___parent',
  node___internal___contentDigest = 'node___internal___contentDigest',
  node___internal___type = 'node___internal___type',
  node___internal___mediaType = 'node___internal___mediaType',
  node___internal___description = 'node___internal___description',
  node___internal___owner = 'node___internal___owner',
  node___sourceInstanceName = 'node___sourceInstanceName',
  node___absolutePath = 'node___absolutePath',
  node___relativePath = 'node___relativePath',
  node___extension = 'node___extension',
  node___size = 'node___size',
  node___prettySize = 'node___prettySize',
  node___modifiedTime = 'node___modifiedTime',
  node___accessTime = 'node___accessTime',
  node___changeTime = 'node___changeTime',
  node___birthTime = 'node___birthTime',
  node___root = 'node___root',
  node___dir = 'node___dir',
  node___base = 'node___base',
  node___ext = 'node___ext',
  node___name = 'node___name',
  node___relativeDirectory = 'node___relativeDirectory',
  node___dev = 'node___dev',
  node___mode = 'node___mode',
  node___nlink = 'node___nlink',
  node___uid = 'node___uid',
  node___gid = 'node___gid',
  node___rdev = 'node___rdev',
  node___blksize = 'node___blksize',
  node___ino = 'node___ino',
  node___blocks = 'node___blocks',
  node___atimeMs = 'node___atimeMs',
  node___mtimeMs = 'node___mtimeMs',
  node___ctimeMs = 'node___ctimeMs',
  node___birthtimeMs = 'node___birthtimeMs',
  node___atime = 'node___atime',
  node___mtime = 'node___mtime',
  node___ctime = 'node___ctime',
  node___birthtime = 'node___birthtime',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  internal___fieldOwners___layout = 'internal___fieldOwners___layout',
  internal___fieldOwners___underConstruction = 'internal___fieldOwners___underConstruction',
  frontmatter___title = 'frontmatter___title',
  frontmatter___lang = 'frontmatter___lang',
  frontmatter___logo = 'frontmatter___logo',
  frontmatter___contact = 'frontmatter___contact',
  frontmatter___nav___home = 'frontmatter___nav___home',
  frontmatter___nav___navLinks = 'frontmatter___nav___navLinks',
  frontmatter___error = 'frontmatter___error',
  frontmatter___layout = 'frontmatter___layout',
  frontmatter___sections___notFound = 'frontmatter___sections___notFound',
  frontmatter___sections___about1 = 'frontmatter___sections___about1',
  frontmatter___sections___about2 = 'frontmatter___sections___about2',
  frontmatter___sections___advantages = 'frontmatter___sections___advantages',
  frontmatter___sections___tcs = 'frontmatter___sections___tcs',
  frontmatter___sections___qas = 'frontmatter___sections___qas',
  frontmatter___sections___contactUs = 'frontmatter___sections___contactUs',
  frontmatter___sections___contactDetails = 'frontmatter___sections___contactDetails',
  frontmatter___sections___welcome = 'frontmatter___sections___welcome',
  frontmatter___sections___more = 'frontmatter___sections___more',
  frontmatter___sections___intro = 'frontmatter___sections___intro',
  frontmatter___sections___categoryList = 'frontmatter___sections___categoryList',
  frontmatter___sections___categories = 'frontmatter___sections___categories',
  frontmatter___sections___products = 'frontmatter___sections___products',
  frontmatter___underConstruction = 'frontmatter___underConstruction',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  fields___layout = 'fields___layout',
  fields___underConstruction = 'fields___underConstruction',
}

export enum JavascriptFrontmatterConnectionSortOrderValues {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum JavascriptFrontmatterDistinctEnum {
  id = 'id',
  parent = 'parent',
  node___id = 'node___id',
  node___children = 'node___children',
  node___parent = 'node___parent',
  node___internal___contentDigest = 'node___internal___contentDigest',
  node___internal___type = 'node___internal___type',
  node___internal___mediaType = 'node___internal___mediaType',
  node___internal___description = 'node___internal___description',
  node___internal___owner = 'node___internal___owner',
  node___sourceInstanceName = 'node___sourceInstanceName',
  node___absolutePath = 'node___absolutePath',
  node___relativePath = 'node___relativePath',
  node___extension = 'node___extension',
  node___size = 'node___size',
  node___prettySize = 'node___prettySize',
  node___modifiedTime = 'node___modifiedTime',
  node___accessTime = 'node___accessTime',
  node___changeTime = 'node___changeTime',
  node___birthTime = 'node___birthTime',
  node___root = 'node___root',
  node___dir = 'node___dir',
  node___base = 'node___base',
  node___ext = 'node___ext',
  node___name = 'node___name',
  node___relativeDirectory = 'node___relativeDirectory',
  node___dev = 'node___dev',
  node___mode = 'node___mode',
  node___nlink = 'node___nlink',
  node___uid = 'node___uid',
  node___gid = 'node___gid',
  node___rdev = 'node___rdev',
  node___blksize = 'node___blksize',
  node___ino = 'node___ino',
  node___blocks = 'node___blocks',
  node___atimeMs = 'node___atimeMs',
  node___mtimeMs = 'node___mtimeMs',
  node___ctimeMs = 'node___ctimeMs',
  node___birthtimeMs = 'node___birthtimeMs',
  node___atime = 'node___atime',
  node___mtime = 'node___mtime',
  node___ctime = 'node___ctime',
  node___birthtime = 'node___birthtime',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  internal___fieldOwners___layout = 'internal___fieldOwners___layout',
  internal___fieldOwners___underConstruction = 'internal___fieldOwners___underConstruction',
  frontmatter___title = 'frontmatter___title',
  frontmatter___lang = 'frontmatter___lang',
  frontmatter___logo = 'frontmatter___logo',
  frontmatter___contact = 'frontmatter___contact',
  frontmatter___nav___home = 'frontmatter___nav___home',
  frontmatter___nav___navLinks = 'frontmatter___nav___navLinks',
  frontmatter___error = 'frontmatter___error',
  frontmatter___layout = 'frontmatter___layout',
  frontmatter___sections___notFound = 'frontmatter___sections___notFound',
  frontmatter___sections___about1 = 'frontmatter___sections___about1',
  frontmatter___sections___about2 = 'frontmatter___sections___about2',
  frontmatter___sections___advantages = 'frontmatter___sections___advantages',
  frontmatter___sections___tcs = 'frontmatter___sections___tcs',
  frontmatter___sections___qas = 'frontmatter___sections___qas',
  frontmatter___sections___contactUs = 'frontmatter___sections___contactUs',
  frontmatter___sections___contactDetails = 'frontmatter___sections___contactDetails',
  frontmatter___sections___welcome = 'frontmatter___sections___welcome',
  frontmatter___sections___more = 'frontmatter___sections___more',
  frontmatter___sections___intro = 'frontmatter___sections___intro',
  frontmatter___sections___categoryList = 'frontmatter___sections___categoryList',
  frontmatter___sections___categories = 'frontmatter___sections___categories',
  frontmatter___sections___products = 'frontmatter___sections___products',
  frontmatter___underConstruction = 'frontmatter___underConstruction',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  fields___layout = 'fields___layout',
  fields___underConstruction = 'fields___underConstruction',
}

export enum JavascriptFrontmatterGroupEnum {
  id = 'id',
  parent = 'parent',
  node___id = 'node___id',
  node___children = 'node___children',
  node___parent = 'node___parent',
  node___internal___contentDigest = 'node___internal___contentDigest',
  node___internal___type = 'node___internal___type',
  node___internal___mediaType = 'node___internal___mediaType',
  node___internal___description = 'node___internal___description',
  node___internal___owner = 'node___internal___owner',
  node___sourceInstanceName = 'node___sourceInstanceName',
  node___absolutePath = 'node___absolutePath',
  node___relativePath = 'node___relativePath',
  node___extension = 'node___extension',
  node___size = 'node___size',
  node___prettySize = 'node___prettySize',
  node___modifiedTime = 'node___modifiedTime',
  node___accessTime = 'node___accessTime',
  node___changeTime = 'node___changeTime',
  node___birthTime = 'node___birthTime',
  node___root = 'node___root',
  node___dir = 'node___dir',
  node___base = 'node___base',
  node___ext = 'node___ext',
  node___name = 'node___name',
  node___relativeDirectory = 'node___relativeDirectory',
  node___dev = 'node___dev',
  node___mode = 'node___mode',
  node___nlink = 'node___nlink',
  node___uid = 'node___uid',
  node___gid = 'node___gid',
  node___rdev = 'node___rdev',
  node___blksize = 'node___blksize',
  node___ino = 'node___ino',
  node___blocks = 'node___blocks',
  node___atimeMs = 'node___atimeMs',
  node___mtimeMs = 'node___mtimeMs',
  node___ctimeMs = 'node___ctimeMs',
  node___birthtimeMs = 'node___birthtimeMs',
  node___atime = 'node___atime',
  node___mtime = 'node___mtime',
  node___ctime = 'node___ctime',
  node___birthtime = 'node___birthtime',
  internal___contentDigest = 'internal___contentDigest',
  internal___type = 'internal___type',
  internal___owner = 'internal___owner',
  internal___fieldOwners___slug = 'internal___fieldOwners___slug',
  internal___fieldOwners___layout = 'internal___fieldOwners___layout',
  internal___fieldOwners___underConstruction = 'internal___fieldOwners___underConstruction',
  frontmatter___title = 'frontmatter___title',
  frontmatter___lang = 'frontmatter___lang',
  frontmatter___logo = 'frontmatter___logo',
  frontmatter___contact = 'frontmatter___contact',
  frontmatter___nav___home = 'frontmatter___nav___home',
  frontmatter___nav___navLinks = 'frontmatter___nav___navLinks',
  frontmatter___error = 'frontmatter___error',
  frontmatter___layout = 'frontmatter___layout',
  frontmatter___sections___notFound = 'frontmatter___sections___notFound',
  frontmatter___sections___about1 = 'frontmatter___sections___about1',
  frontmatter___sections___about2 = 'frontmatter___sections___about2',
  frontmatter___sections___advantages = 'frontmatter___sections___advantages',
  frontmatter___sections___tcs = 'frontmatter___sections___tcs',
  frontmatter___sections___qas = 'frontmatter___sections___qas',
  frontmatter___sections___contactUs = 'frontmatter___sections___contactUs',
  frontmatter___sections___contactDetails = 'frontmatter___sections___contactDetails',
  frontmatter___sections___welcome = 'frontmatter___sections___welcome',
  frontmatter___sections___more = 'frontmatter___sections___more',
  frontmatter___sections___intro = 'frontmatter___sections___intro',
  frontmatter___sections___categoryList = 'frontmatter___sections___categoryList',
  frontmatter___sections___categories = 'frontmatter___sections___categories',
  frontmatter___sections___products = 'frontmatter___sections___products',
  frontmatter___underConstruction = 'frontmatter___underConstruction',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields___slug',
  fields___layout = 'fields___layout',
  fields___underConstruction = 'fields___underConstruction',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    allSitePage?: AllSitePageResolver<
      SitePageConnection | null,
      any,
      Context
    > /** Connection to all SitePage nodes */
    allSitePlugin?: AllSitePluginResolver<
      SitePluginConnection | null,
      any,
      Context
    > /** Connection to all SitePlugin nodes */
    allDirectory?: AllDirectoryResolver<
      DirectoryConnection | null,
      any,
      Context
    > /** Connection to all Directory nodes */
    allFile?: AllFileResolver<
      FileConnection | null,
      any,
      Context
    > /** Connection to all File nodes */
    allImageSharp?: AllImageSharpResolver<
      ImageSharpConnection | null,
      any,
      Context
    > /** Connection to all ImageSharp nodes */
    allJavascriptFrontmatter?: AllJavascriptFrontmatterResolver<
      JavascriptFrontmatterConnection | null,
      any,
      Context
    > /** Connection to all JavascriptFrontmatter nodes */
    sitePage?: SitePageResolver<SitePage | null, any, Context>
    sitePlugin?: SitePluginResolver<SitePlugin | null, any, Context>
    site?: SiteResolver<Site | null, any, Context>
    directory?: DirectoryResolver<Directory | null, any, Context>
    file?: FileResolver<File | null, any, Context>
    imageSharp?: ImageSharpResolver<ImageSharp | null, any, Context>
    javascriptFrontmatter?: JavascriptFrontmatterResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    >
  }

  export type AllSitePageResolver<
    R = SitePageConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePageArgs>
  export interface AllSitePageArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePageConnectionSort | null
    filter?: FilterSitePage | null
  }

  export type AllSitePluginResolver<
    R = SitePluginConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllSitePluginArgs>
  export interface AllSitePluginArgs {
    skip?: number | null
    limit?: number | null
    sort?: SitePluginConnectionSort | null
    filter?: FilterSitePlugin | null
  }

  export type AllDirectoryResolver<
    R = DirectoryConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllDirectoryArgs>
  export interface AllDirectoryArgs {
    skip?: number | null
    limit?: number | null
    sort?: DirectoryConnectionSort | null
    filter?: FilterDirectory | null
  }

  export type AllFileResolver<
    R = FileConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllFileArgs>
  export interface AllFileArgs {
    skip?: number | null
    limit?: number | null
    sort?: FileConnectionSort | null
    filter?: FilterFile | null
  }

  export type AllImageSharpResolver<
    R = ImageSharpConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllImageSharpArgs>
  export interface AllImageSharpArgs {
    skip?: number | null
    limit?: number | null
    sort?: ImageSharpConnectionSort | null
    filter?: FilterImageSharp | null
  }

  export type AllJavascriptFrontmatterResolver<
    R = JavascriptFrontmatterConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllJavascriptFrontmatterArgs>
  export interface AllJavascriptFrontmatterArgs {
    skip?: number | null
    limit?: number | null
    sort?: JavascriptFrontmatterConnectionSort | null
    filter?: FilterJavascriptFrontmatter | null
  }

  export type SitePageResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePageArgs>
  export interface SitePageArgs {
    jsonName?: SitePageJsonNameQueryString | null
    internalComponentName?: SitePageInternalComponentNameQueryString | null
    path?: SitePagePathQueryString_2 | null
    component?: SitePageComponentQueryString | null
    componentChunkName?: SitePageComponentChunkNameQueryString | null
    context?: SitePageContextInputObject | null
    pluginCreator?: SitePagePluginCreatorInputObject | null
    pluginCreatorId?: SitePagePluginCreatorIdQueryString_2 | null
    componentPath?: SitePageComponentPathQueryString | null
    id?: SitePageIdQueryString_2 | null
    internal?: SitePageInternalInputObject_2 | null
  }

  export type SitePluginResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SitePluginArgs>
  export interface SitePluginArgs {
    resolve?: SitePluginResolveQueryString_2 | null
    id?: SitePluginIdQueryString_2 | null
    name?: SitePluginNameQueryString_2 | null
    version?: SitePluginVersionQueryString_2 | null
    pluginOptions?: SitePluginPluginOptionsInputObject_2 | null
    nodeAPIs?: SitePluginNodeApIsQueryList_2 | null
    browserAPIs?: SitePluginBrowserApIsQueryList_2 | null
    ssrAPIs?: SitePluginSsrApIsQueryList_2 | null
    pluginFilepath?: SitePluginPluginFilepathQueryString_2 | null
    packageJson?: SitePluginPackageJsonInputObject_2 | null
    internal?: SitePluginInternalInputObject_2 | null
  }

  export type SiteResolver<
    R = Site | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SiteArgs>
  export interface SiteArgs {
    siteMetadata?: SiteSiteMetadataInputObject_2 | null
    port?: SitePortQueryString_2 | null
    host?: SiteHostQueryString_2 | null
    pathPrefix?: SitePathPrefixQueryString_2 | null
    polyfill?: SitePolyfillQueryBoolean_2 | null
    buildTime?: SiteBuildTimeQueryString_2 | null
    id?: SiteIdQueryString_2 | null
    internal?: SiteInternalInputObject_2 | null
  }

  export type DirectoryResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DirectoryArgs>
  export interface DirectoryArgs {
    id?: DirectoryIdQueryString_2 | null
    internal?: DirectoryInternalInputObject_2 | null
    sourceInstanceName?: DirectorySourceInstanceNameQueryString_2 | null
    absolutePath?: DirectoryAbsolutePathQueryString_2 | null
    relativePath?: DirectoryRelativePathQueryString_2 | null
    extension?: DirectoryExtensionQueryString_2 | null
    size?: DirectorySizeQueryInteger_2 | null
    prettySize?: DirectoryPrettySizeQueryString_2 | null
    modifiedTime?: DirectoryModifiedTimeQueryString_2 | null
    accessTime?: DirectoryAccessTimeQueryString_2 | null
    changeTime?: DirectoryChangeTimeQueryString_2 | null
    birthTime?: DirectoryBirthTimeQueryString_2 | null
    root?: DirectoryRootQueryString_2 | null
    dir?: DirectoryDirQueryString_2 | null
    base?: DirectoryBaseQueryString_2 | null
    ext?: DirectoryExtQueryString_2 | null
    name?: DirectoryNameQueryString_2 | null
    relativeDirectory?: DirectoryRelativeDirectoryQueryString_2 | null
    dev?: DirectoryDevQueryInteger_2 | null
    mode?: DirectoryModeQueryInteger_2 | null
    nlink?: DirectoryNlinkQueryInteger_2 | null
    uid?: DirectoryUidQueryInteger_2 | null
    gid?: DirectoryGidQueryInteger_2 | null
    rdev?: DirectoryRdevQueryInteger_2 | null
    blksize?: DirectoryBlksizeQueryInteger_2 | null
    ino?: DirectoryInoQueryInteger_2 | null
    blocks?: DirectoryBlocksQueryInteger_2 | null
    atimeMs?: DirectoryAtimeMsQueryFloat_2 | null
    mtimeMs?: DirectoryMtimeMsQueryFloat_2 | null
    ctimeMs?: DirectoryCtimeMsQueryFloat_2 | null
    birthtimeMs?: DirectoryBirthtimeMsQueryFloat_2 | null
    atime?: DirectoryAtimeQueryString_2 | null
    mtime?: DirectoryMtimeQueryString_2 | null
    ctime?: DirectoryCtimeQueryString_2 | null
    birthtime?: DirectoryBirthtimeQueryString_2 | null
  }

  export type FileResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FileArgs>
  export interface FileArgs {
    id?: FileIdQueryString_2 | null
    internal?: FileInternalInputObject_2 | null
    sourceInstanceName?: FileSourceInstanceNameQueryString_2 | null
    absolutePath?: FileAbsolutePathQueryString_2 | null
    relativePath?: FileRelativePathQueryString_2 | null
    extension?: FileExtensionQueryString_2 | null
    size?: FileSizeQueryInteger_2 | null
    prettySize?: FilePrettySizeQueryString_2 | null
    modifiedTime?: FileModifiedTimeQueryString_2 | null
    accessTime?: FileAccessTimeQueryString_2 | null
    changeTime?: FileChangeTimeQueryString_2 | null
    birthTime?: FileBirthTimeQueryString_2 | null
    root?: FileRootQueryString_2 | null
    dir?: FileDirQueryString_2 | null
    base?: FileBaseQueryString_2 | null
    ext?: FileExtQueryString_2 | null
    name?: FileNameQueryString_2 | null
    relativeDirectory?: FileRelativeDirectoryQueryString_2 | null
    dev?: FileDevQueryInteger_2 | null
    mode?: FileModeQueryInteger_2 | null
    nlink?: FileNlinkQueryInteger_2 | null
    uid?: FileUidQueryInteger_2 | null
    gid?: FileGidQueryInteger_2 | null
    rdev?: FileRdevQueryInteger_2 | null
    blksize?: FileBlksizeQueryInteger_2 | null
    ino?: FileInoQueryInteger_2 | null
    blocks?: FileBlocksQueryInteger_2 | null
    atimeMs?: FileAtimeMsQueryFloat_2 | null
    mtimeMs?: FileMtimeMsQueryFloat_2 | null
    ctimeMs?: FileCtimeMsQueryFloat_2 | null
    birthtimeMs?: FileBirthtimeMsQueryFloat_2 | null
    atime?: FileAtimeQueryString_2 | null
    mtime?: FileMtimeQueryString_2 | null
    ctime?: FileCtimeQueryString_2 | null
    birthtime?: FileBirthtimeQueryString_2 | null
    publicURL?: PublicUrlQueryString_3 | null
  }

  export type ImageSharpResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ImageSharpArgs>
  export interface ImageSharpArgs {
    id?: ImageSharpIdQueryString_2 | null
    internal?: ImageSharpInternalInputObject_2 | null
    fixed?: FixedTypeName_3 | null
    resolutions?: ResolutionsTypeName_3 | null
    fluid?: FluidTypeName_3 | null
    sizes?: SizesTypeName_3 | null
    original?: OriginalTypeName_3 | null
    resize?: ResizeTypeName_3 | null
  }

  export type JavascriptFrontmatterResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, JavascriptFrontmatterArgs>
  export interface JavascriptFrontmatterArgs {
    id?: JavascriptFrontmatterIdQueryString_2 | null
    node?: JavascriptFrontmatterNodeInputObject_2 | null
    internal?: JavascriptFrontmatterInternalInputObject_2 | null
    frontmatter?: JavascriptFrontmatterFrontmatterInputObject_2 | null
    fileAbsolutePath?: JavascriptFrontmatterFileAbsolutePathQueryString_2 | null
    fields?: JavascriptFrontmatterFieldsInputObject_2 | null
  }
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePageGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePageDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePageGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePageGroupEnum | null
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating, are there more items? */
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    jsonName?: JsonNameResolver<string | null, any, Context>
    internalComponentName?: InternalComponentNameResolver<
      string | null,
      any,
      Context
    >
    path?: PathResolver<string | null, any, Context>
    component?: ComponentResolver<string | null, any, Context>
    componentChunkName?: ComponentChunkNameResolver<string | null, any, Context>
    context?: ContextResolver<Context | null, any, Context>
    pluginCreator?: PluginCreatorResolver<SitePlugin | null, any, Context>
    pluginCreatorId?: PluginCreatorIdResolver<string | null, any, Context>
    componentPath?: ComponentPathResolver<string | null, any, Context>
    internal?: InternalResolver<Internal_9 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type JsonNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalComponentNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentChunkNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContextResolver<
    R = Context | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginCreatorIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ComponentPathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_9 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ContextResolvers {
  export interface Resolvers<Context = any> {
    slug?: SlugResolver<string | null, any, Context>
    layout?: LayoutResolver<string | null, any, Context>
  }

  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LayoutResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    resolve?: ResolveResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    pluginOptions?: PluginOptionsResolver<PluginOptions_2 | null, any, Context>
    nodeAPIs?: NodeApIsResolver<(string | null)[] | null, any, Context>
    browserAPIs?: BrowserApIsResolver<(string | null)[] | null, any, Context>
    ssrAPIs?: SsrApIsResolver<(string | null)[] | null, any, Context>
    pluginFilepath?: PluginFilepathResolver<string | null, any, Context>
    packageJson?: PackageJsonResolver<PackageJson_2 | null, any, Context>
    internal?: InternalResolver<Internal_10 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ResolveResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginOptionsResolver<
    R = PluginOptions_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BrowserApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SsrApIsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PluginFilepathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PackageJsonResolver<
    R = PackageJson_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_10 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PluginOptions_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    short_name?: ShortNameResolver<string | null, any, Context>
    start_url?: StartUrlResolver<string | null, any, Context>
    background_color?: BackgroundColorResolver<string | null, any, Context>
    theme_color?: ThemeColorResolver<string | null, any, Context>
    display?: DisplayResolver<string | null, any, Context>
    icon?: IconResolver<string | null, any, Context>
    path?: PathResolver<string | null, any, Context>
    pathCheck?: PathCheckResolver<boolean | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ShortNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type StartUrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BackgroundColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ThemeColorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DisplayResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IconResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathCheckResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PackageJson_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
    main?: MainResolver<string | null, any, Context>
    license?: LicenseResolver<string | null, any, Context>
    dependencies?: DependenciesResolver<
      (Dependencies_2 | null)[] | null,
      any,
      Context
    >
    devDependencies?: DevDependenciesResolver<
      (DevDependencies_2 | null)[] | null,
      any,
      Context
    >
    peerDependencies?: PeerDependenciesResolver<
      (PeerDependencies_2 | null)[] | null,
      any,
      Context
    >
    keywords?: KeywordsResolver<(string | null)[] | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MainResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LicenseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DependenciesResolver<
    R = (Dependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevDependenciesResolver<
    R = (DevDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PeerDependenciesResolver<
    R = (PeerDependencies_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type KeywordsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Dependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace DevDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace PeerDependencies_2Resolvers {
  export interface Resolvers<Context = any> {
    name?: NameResolver<string | null, any, Context>
    version?: VersionResolver<string | null, any, Context>
  }

  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type VersionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_10Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_9Resolvers {
  export interface Resolvers<Context = any> {
    type?: TypeResolver<string | null, any, Context>
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePageGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePageGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePageGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePageGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePage | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePage | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePage | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePage | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (SitePluginGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: SitePluginDistinctEnum | null
  }

  export type GroupResolver<
    R = (SitePluginGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: SitePluginGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace SitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (SitePluginGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (SitePluginGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace SitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      SitePlugin | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      SitePlugin | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      SitePlugin | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = SitePlugin | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace DirectoryConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (DirectoryEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (DirectoryGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (DirectoryEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: DirectoryDistinctEnum | null
  }

  export type GroupResolver<
    R = (DirectoryGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: DirectoryGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace DirectoryEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Directory | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      Directory | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      Directory | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type Directory */
export namespace DirectoryResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    internal?: InternalResolver<Internal_11 | null, any, Context>
    sourceInstanceName?: SourceInstanceNameResolver<string | null, any, Context>
    absolutePath?: AbsolutePathResolver<string | null, any, Context>
    relativePath?: RelativePathResolver<string | null, any, Context>
    extension?: ExtensionResolver<string | null, any, Context>
    size?: SizeResolver<number | null, any, Context>
    prettySize?: PrettySizeResolver<string | null, any, Context>
    modifiedTime?: ModifiedTimeResolver<Date | null, any, Context>
    accessTime?: AccessTimeResolver<Date | null, any, Context>
    changeTime?: ChangeTimeResolver<Date | null, any, Context>
    birthTime?: BirthTimeResolver<Date | null, any, Context>
    root?: RootResolver<string | null, any, Context>
    dir?: DirResolver<string | null, any, Context>
    base?: BaseResolver<string | null, any, Context>
    ext?: ExtResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    relativeDirectory?: RelativeDirectoryResolver<string | null, any, Context>
    dev?: DevResolver<number | null, any, Context>
    mode?: ModeResolver<number | null, any, Context>
    nlink?: NlinkResolver<number | null, any, Context>
    uid?: UidResolver<number | null, any, Context>
    gid?: GidResolver<number | null, any, Context>
    rdev?: RdevResolver<number | null, any, Context>
    blksize?: BlksizeResolver<number | null, any, Context>
    ino?: InoResolver<number | null, any, Context>
    blocks?: BlocksResolver<number | null, any, Context>
    atimeMs?: AtimeMsResolver<number | null, any, Context>
    mtimeMs?: MtimeMsResolver<number | null, any, Context>
    ctimeMs?: CtimeMsResolver<number | null, any, Context>
    birthtimeMs?: BirthtimeMsResolver<number | null, any, Context>
    atime?: AtimeResolver<Date | null, any, Context>
    mtime?: MtimeResolver<Date | null, any, Context>
    ctime?: CtimeResolver<Date | null, any, Context>
    birthtime?: BirthtimeResolver<Date | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_11 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SourceInstanceNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AbsolutePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtensionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PrettySizeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModifiedTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ModifiedTimeArgs>
  export interface ModifiedTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type AccessTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AccessTimeArgs>
  export interface AccessTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type ChangeTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ChangeTimeArgs>
  export interface ChangeTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthTimeArgs>
  export interface BirthTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type RootResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DirResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BaseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativeDirectoryResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NlinkResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RdevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlksizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InoResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlocksResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BirthtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AtimeArgs>
  export interface AtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type MtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MtimeArgs>
  export interface MtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type CtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CtimeArgs>
  export interface CtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthtimeArgs>
  export interface BirthtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }
}

export namespace Internal_11Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace DirectoryGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (DirectoryGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (DirectoryGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace DirectoryGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      Directory | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      Directory | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      Directory | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = Directory | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace FileConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (FileEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (FileGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (FileEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: FileDistinctEnum | null
  }

  export type GroupResolver<
    R = (FileGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: FileGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace FileEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      File | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      File | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      File | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type File */
export namespace FileResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    childJavascriptFrontmatter?: ChildJavascriptFrontmatterResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The child of this node of type javascriptFrontmatter */
    childImageSharp?: ChildImageSharpResolver<
      ImageSharp | null,
      any,
      Context
    > /** The child of this node of type imageSharp */
    internal?: InternalResolver<Internal_12 | null, any, Context>
    sourceInstanceName?: SourceInstanceNameResolver<string | null, any, Context>
    absolutePath?: AbsolutePathResolver<string | null, any, Context>
    relativePath?: RelativePathResolver<string | null, any, Context>
    extension?: ExtensionResolver<string | null, any, Context>
    size?: SizeResolver<number | null, any, Context>
    prettySize?: PrettySizeResolver<string | null, any, Context>
    modifiedTime?: ModifiedTimeResolver<Date | null, any, Context>
    accessTime?: AccessTimeResolver<Date | null, any, Context>
    changeTime?: ChangeTimeResolver<Date | null, any, Context>
    birthTime?: BirthTimeResolver<Date | null, any, Context>
    root?: RootResolver<string | null, any, Context>
    dir?: DirResolver<string | null, any, Context>
    base?: BaseResolver<string | null, any, Context>
    ext?: ExtResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    relativeDirectory?: RelativeDirectoryResolver<string | null, any, Context>
    dev?: DevResolver<number | null, any, Context>
    mode?: ModeResolver<number | null, any, Context>
    nlink?: NlinkResolver<number | null, any, Context>
    uid?: UidResolver<number | null, any, Context>
    gid?: GidResolver<number | null, any, Context>
    rdev?: RdevResolver<number | null, any, Context>
    blksize?: BlksizeResolver<number | null, any, Context>
    ino?: InoResolver<number | null, any, Context>
    blocks?: BlocksResolver<number | null, any, Context>
    atimeMs?: AtimeMsResolver<number | null, any, Context>
    mtimeMs?: MtimeMsResolver<number | null, any, Context>
    ctimeMs?: CtimeMsResolver<number | null, any, Context>
    birthtimeMs?: BirthtimeMsResolver<number | null, any, Context>
    atime?: AtimeResolver<Date | null, any, Context>
    mtime?: MtimeResolver<Date | null, any, Context>
    ctime?: CtimeResolver<Date | null, any, Context>
    birthtime?: BirthtimeResolver<Date | null, any, Context>
    publicURL?: PublicUrlResolver<
      string | null,
      any,
      Context
    > /** Copy file to static directory and return public url to it */
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildJavascriptFrontmatterResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildImageSharpResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_12 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SourceInstanceNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AbsolutePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtensionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PrettySizeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModifiedTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ModifiedTimeArgs>
  export interface ModifiedTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type AccessTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AccessTimeArgs>
  export interface AccessTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type ChangeTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ChangeTimeArgs>
  export interface ChangeTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthTimeArgs>
  export interface BirthTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type RootResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DirResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BaseResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativeDirectoryResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NlinkResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RdevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlksizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InoResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlocksResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BirthtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AtimeArgs>
  export interface AtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type MtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MtimeArgs>
  export interface MtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type CtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CtimeArgs>
  export interface CtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthtimeArgs>
  export interface BirthtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type PublicUrlResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type JavascriptFrontmatter */
export namespace JavascriptFrontmatterResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    node?: NodeResolver<Node_2 | null, any, Context>
    internal?: InternalResolver<Internal_14 | null, any, Context>
    frontmatter?: FrontmatterResolver<Frontmatter_2 | null, any, Context>
    fileAbsolutePath?: FileAbsolutePathResolver<string | null, any, Context>
    fields?: FieldsResolver<Fields_2 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NodeResolver<
    R = Node_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_14 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FrontmatterResolver<
    R = Frontmatter_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FileAbsolutePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldsResolver<
    R = Fields_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Node_2Resolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string | null, any, Context>
    children?: ChildrenResolver<(string | null)[] | null, any, Context>
    parent?: ParentResolver<string | null, any, Context>
    internal?: InternalResolver<Internal_13 | null, any, Context>
    sourceInstanceName?: SourceInstanceNameResolver<string | null, any, Context>
    absolutePath?: AbsolutePathResolver<string | null, any, Context>
    relativePath?: RelativePathResolver<File | null, any, Context>
    extension?: ExtensionResolver<string | null, any, Context>
    size?: SizeResolver<number | null, any, Context>
    prettySize?: PrettySizeResolver<string | null, any, Context>
    modifiedTime?: ModifiedTimeResolver<Date | null, any, Context>
    accessTime?: AccessTimeResolver<Date | null, any, Context>
    changeTime?: ChangeTimeResolver<Date | null, any, Context>
    birthTime?: BirthTimeResolver<Date | null, any, Context>
    root?: RootResolver<string | null, any, Context>
    dir?: DirResolver<string | null, any, Context>
    base?: BaseResolver<File | null, any, Context>
    ext?: ExtResolver<string | null, any, Context>
    name?: NameResolver<string | null, any, Context>
    relativeDirectory?: RelativeDirectoryResolver<string | null, any, Context>
    dev?: DevResolver<number | null, any, Context>
    mode?: ModeResolver<number | null, any, Context>
    nlink?: NlinkResolver<number | null, any, Context>
    uid?: UidResolver<number | null, any, Context>
    gid?: GidResolver<number | null, any, Context>
    rdev?: RdevResolver<number | null, any, Context>
    blksize?: BlksizeResolver<number | null, any, Context>
    ino?: InoResolver<number | null, any, Context>
    blocks?: BlocksResolver<number | null, any, Context>
    atimeMs?: AtimeMsResolver<number | null, any, Context>
    mtimeMs?: MtimeMsResolver<number | null, any, Context>
    ctimeMs?: CtimeMsResolver<number | null, any, Context>
    birthtimeMs?: BirthtimeMsResolver<number | null, any, Context>
    atime?: AtimeResolver<Date | null, any, Context>
    mtime?: MtimeResolver<Date | null, any, Context>
    ctime?: CtimeResolver<Date | null, any, Context>
    birthtime?: BirthtimeResolver<Date | null, any, Context>
  }

  export type IdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ParentResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_13 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SourceInstanceNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AbsolutePathResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativePathResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtensionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PrettySizeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModifiedTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ModifiedTimeArgs>
  export interface ModifiedTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type AccessTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AccessTimeArgs>
  export interface AccessTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type ChangeTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ChangeTimeArgs>
  export interface ChangeTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthTimeArgs>
  export interface BirthTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type RootResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DirResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BaseResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ExtResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RelativeDirectoryResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ModeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NlinkResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type GidResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type RdevResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlksizeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InoResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BlocksResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BirthtimeMsResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AtimeArgs>
  export interface AtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type MtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, MtimeArgs>
  export interface MtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type CtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CtimeArgs>
  export interface CtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type BirthtimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BirthtimeArgs>
  export interface BirthtimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }
}

export namespace Internal_13Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    mediaType?: MediaTypeResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_14Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
    fieldOwners?: FieldOwnersResolver<FieldOwners_2 | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldOwnersResolver<
    R = FieldOwners_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace FieldOwners_2Resolvers {
  export interface Resolvers<Context = any> {
    slug?: SlugResolver<string | null, any, Context>
    layout?: LayoutResolver<string | null, any, Context>
    underConstruction?: UnderConstructionResolver<string | null, any, Context>
  }

  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LayoutResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UnderConstructionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Frontmatter_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>
    lang?: LangResolver<string | null, any, Context>
    logo?: LogoResolver<File | null, any, Context>
    contact?: ContactResolver<(Contact_3 | null)[] | null, any, Context>
    nav?: NavResolver<Nav_2 | null, any, Context>
    error?: ErrorResolver<boolean | null, any, Context>
    layout?: LayoutResolver<string | null, any, Context>
    sections?: SectionsResolver<Sections_2 | null, any, Context>
    underConstruction?: UnderConstructionResolver<boolean | null, any, Context>
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LangResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LogoResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContactResolver<
    R = (Contact_3 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NavResolver<
    R = Nav_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ErrorResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LayoutResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SectionsResolver<
    R = Sections_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UnderConstructionResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Contact_3Resolvers {
  export interface Resolvers<Context = any> {
    address?: AddressResolver<(string | null)[] | null, any, Context>
    contactName?: ContactNameResolver<string | null, any, Context>
    email?: EmailResolver<string | null, any, Context>
    phone?: PhoneResolver<string | null, any, Context>
    facebook?: FacebookResolver<string | null, any, Context>
    instagram?: InstagramResolver<string | null, any, Context>
    twitter?: TwitterResolver<string | null, any, Context>
    youtube?: YoutubeResolver<string | null, any, Context>
  }

  export type AddressResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContactNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PhoneResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FacebookResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InstagramResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TwitterResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type YoutubeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Nav_2Resolvers {
  export interface Resolvers<Context = any> {
    home?: HomeResolver<string | null, any, Context>
    navLinks?: NavLinksResolver<(NavLinks_2 | null)[] | null, any, Context>
  }

  export type HomeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NavLinksResolver<
    R = (NavLinks_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace NavLinks_2Resolvers {
  export interface Resolvers<Context = any> {
    label?: LabelResolver<string | null, any, Context>
    to?: ToResolver<string | null, any, Context>
    links?: LinksResolver<(Links_2 | null)[] | null, any, Context>
  }

  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LinksResolver<
    R = (Links_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Links_2Resolvers {
  export interface Resolvers<Context = any> {
    label?: LabelResolver<string | null, any, Context>
    to?: ToResolver<string | null, any, Context>
  }

  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Sections_2Resolvers {
  export interface Resolvers<Context = any> {
    notFound?: NotFoundResolver<NotFound_2 | null, any, Context>
    about1?: About1Resolver<About1_2 | null, any, Context>
    about2?: About2Resolver<About2_2 | null, any, Context>
    advantages?: AdvantagesResolver<Advantages_2 | null, any, Context>
    tcs?: TcsResolver<Tcs_2 | null, any, Context>
    qas?: QasResolver<Qas_2 | null, any, Context>
    contactUs?: ContactUsResolver<ContactUs_2 | null, any, Context>
    contactDetails?: ContactDetailsResolver<
      ContactDetails_2 | null,
      any,
      Context
    >
    welcome?: WelcomeResolver<Welcome_2 | null, any, Context>
    more?: MoreResolver<More_2 | null, any, Context>
    intro?: IntroResolver<Intro_2 | null, any, Context>
    categoryList?: CategoryListResolver<CategoryList_2 | null, any, Context>
    categories?: CategoriesResolver<Categories_2 | null, any, Context>
    products?: ProductsResolver<Products_2 | null, any, Context>
  }

  export type NotFoundResolver<
    R = NotFound_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type About1Resolver<
    R = About1_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type About2Resolver<
    R = About2_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AdvantagesResolver<
    R = Advantages_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TcsResolver<
    R = Tcs_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type QasResolver<
    R = Qas_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContactUsResolver<
    R = ContactUs_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContactDetailsResolver<
    R = ContactDetails_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type WelcomeResolver<
    R = Welcome_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MoreResolver<
    R = More_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type IntroResolver<
    R = Intro_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CategoryListResolver<
    R = CategoryList_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CategoriesResolver<
    R = Categories_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ProductsResolver<
    R = Products_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace NotFound_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    subheading?: SubheadingResolver<string | null, any, Context>
    image?: ImageResolver<string | null, any, Context>
    logo?: LogoResolver<string | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SubheadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LogoResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace About1_2Resolvers {
  export interface Resolvers<Context = any> {
    logo?: LogoResolver<File | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    heading?: HeadingResolver<string | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
  }

  export type LogoResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace About2_2Resolvers {
  export interface Resolvers<Context = any> {
    image?: ImageResolver<File | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
  }

  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Advantages_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
    points?: PointsResolver<(string | null)[] | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PointsResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Tcs_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Qas_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ContactUs_2Resolvers {
  export interface Resolvers<Context = any> {
    logo?: LogoResolver<File | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    heading?: HeadingResolver<string | null, any, Context>
  }

  export type LogoResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ContactDetails_2Resolvers {
  export interface Resolvers<Context = any> {
    contact?: ContactResolver<(Contact_4 | null)[] | null, any, Context>
  }

  export type ContactResolver<
    R = (Contact_4 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Contact_4Resolvers {
  export interface Resolvers<Context = any> {
    address?: AddressResolver<(string | null)[] | null, any, Context>
    contactName?: ContactNameResolver<string | null, any, Context>
    email?: EmailResolver<string | null, any, Context>
    facebook?: FacebookResolver<string | null, any, Context>
    instagram?: InstagramResolver<string | null, any, Context>
    phone?: PhoneResolver<string | null, any, Context>
    twitter?: TwitterResolver<string | null, any, Context>
    youtube?: YoutubeResolver<string | null, any, Context>
  }

  export type AddressResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ContactNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FacebookResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InstagramResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PhoneResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TwitterResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type YoutubeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Welcome_2Resolvers {
  export interface Resolvers<Context = any> {
    logo?: LogoResolver<File | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    quotes?: QuotesResolver<(Quotes_2 | null)[] | null, any, Context>
    heading?: HeadingResolver<string | null, any, Context>
    subheading?: SubheadingResolver<string | null, any, Context>
  }

  export type LogoResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type QuotesResolver<
    R = (Quotes_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SubheadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Quotes_2Resolvers {
  export interface Resolvers<Context = any> {
    quote?: QuoteResolver<string | null, any, Context>
    author?: AuthorResolver<string | null, any, Context>
  }

  export type QuoteResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AuthorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace More_2Resolvers {
  export interface Resolvers<Context = any> {
    logo?: LogoResolver<File | null, any, Context>
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    link?: LinkResolver<Link_5 | null, any, Context>
  }

  export type LogoResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LinkResolver<
    R = Link_5 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Link_5Resolvers {
  export interface Resolvers<Context = any> {
    to?: ToResolver<string | null, any, Context>
    label?: LabelResolver<string | null, any, Context>
  }

  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Intro_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
    link?: LinkResolver<Link_6 | null, any, Context>
    subheading?: SubheadingResolver<string | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LinkResolver<
    R = Link_6 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SubheadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Link_6Resolvers {
  export interface Resolvers<Context = any> {
    to?: ToResolver<string | null, any, Context>
    label?: LabelResolver<string | null, any, Context>
  }

  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace CategoryList_2Resolvers {
  export interface Resolvers<Context = any> {
    categoryItems?: CategoryItemsResolver<
      (CategoryItems_2 | null)[] | null,
      any,
      Context
    >
  }

  export type CategoryItemsResolver<
    R = (CategoryItems_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace CategoryItems_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
    spec?: SpecResolver<(Spec_2 | null)[] | null, any, Context>
    link?: LinkResolver<Link_7 | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SpecResolver<
    R = (Spec_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LinkResolver<
    R = Link_7 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Spec_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    params?: ParamsResolver<(Params_2 | null)[] | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ParamsResolver<
    R = (Params_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Params_2Resolvers {
  export interface Resolvers<Context = any> {
    key?: KeyResolver<string | null, any, Context>
    value?: ValueResolver<string | null, any, Context>
  }

  export type KeyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Link_7Resolvers {
  export interface Resolvers<Context = any> {
    to?: ToResolver<string | null, any, Context>
    label?: LabelResolver<string | null, any, Context>
  }

  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Categories_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    categoryLinks?: CategoryLinksResolver<
      (CategoryLinks_2 | null)[] | null,
      any,
      Context
    >
    image?: ImageResolver<File | null, any, Context>
    subheading?: SubheadingResolver<string | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type CategoryLinksResolver<
    R = (CategoryLinks_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SubheadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace CategoryLinks_2Resolvers {
  export interface Resolvers<Context = any> {
    label?: LabelResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    to?: ToResolver<string | null, any, Context>
  }

  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Products_2Resolvers {
  export interface Resolvers<Context = any> {
    productList?: ProductListResolver<
      (ProductList_2 | null)[] | null,
      any,
      Context
    >
  }

  export type ProductListResolver<
    R = (ProductList_2 | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ProductList_2Resolvers {
  export interface Resolvers<Context = any> {
    heading?: HeadingResolver<string | null, any, Context>
    image?: ImageResolver<File | null, any, Context>
    body?: BodyResolver<(string | null)[] | null, any, Context>
    link?: LinkResolver<Link_8 | null, any, Context>
  }

  export type HeadingResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ImageResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BodyResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LinkResolver<
    R = Link_8 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Link_8Resolvers {
  export interface Resolvers<Context = any> {
    to?: ToResolver<string | null, any, Context>
    label?: LabelResolver<string | null, any, Context>
  }

  export type ToResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LabelResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Fields_2Resolvers {
  export interface Resolvers<Context = any> {
    slug?: SlugResolver<string | null, any, Context>
    layout?: LayoutResolver<string | null, any, Context>
    underConstruction?: UnderConstructionResolver<boolean | null, any, Context>
  }

  export type SlugResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type LayoutResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type UnderConstructionResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type ImageSharp */
export namespace ImageSharpResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    internal?: InternalResolver<Internal_15 | null, any, Context>
    fixed?: FixedResolver<ImageSharpFixed | null, any, Context>
    resolutions?: ResolutionsResolver<
      ImageSharpResolutions | null,
      any,
      Context
    >
    fluid?: FluidResolver<ImageSharpFluid | null, any, Context>
    sizes?: SizesResolver<ImageSharpSizes | null, any, Context>
    original?: OriginalResolver<ImageSharpOriginal | null, any, Context>
    resize?: ResizeResolver<ImageSharpResize | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type InternalResolver<
    R = Internal_15 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FixedResolver<
    R = ImageSharpFixed | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FixedArgs>
  export interface FixedArgs {
    width?: number | null
    height?: number | null
    jpegProgressive?: boolean | null
    grayscale?: boolean | null
    duotone?: DuotoneGradient | null
    traceSVG?: Potrace | null
    quality?: number | null
    toFormat?: ImageFormat | null
    cropFocus?: ImageCropFocus | null
    rotate?: number | null
  }

  export type ResolutionsResolver<
    R = ImageSharpResolutions | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResolutionsArgs>
  export interface ResolutionsArgs {
    width?: number | null
    height?: number | null
    jpegProgressive?: boolean | null
    grayscale?: boolean | null
    duotone?: DuotoneGradient | null
    traceSVG?: Potrace | null
    quality?: number | null
    toFormat?: ImageFormat | null
    cropFocus?: ImageCropFocus | null
    rotate?: number | null
  }

  export type FluidResolver<
    R = ImageSharpFluid | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, FluidArgs>
  export interface FluidArgs {
    maxWidth?: number | null
    maxHeight?: number | null
    grayscale?: boolean | null
    jpegProgressive?: boolean | null
    duotone?: DuotoneGradient | null
    traceSVG?: Potrace | null
    quality?: number | null
    toFormat?: ImageFormat | null
    cropFocus?: ImageCropFocus | null
    rotate?: number | null
    sizes?: string | null
  }

  export type SizesResolver<
    R = ImageSharpSizes | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SizesArgs>
  export interface SizesArgs {
    maxWidth?: number | null
    maxHeight?: number | null
    grayscale?: boolean | null
    jpegProgressive?: boolean | null
    duotone?: DuotoneGradient | null
    traceSVG?: Potrace | null
    quality?: number | null
    toFormat?: ImageFormat | null
    cropFocus?: ImageCropFocus | null
    rotate?: number | null
    sizes?: string | null
  }

  export type OriginalResolver<
    R = ImageSharpOriginal | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ResizeResolver<
    R = ImageSharpResize | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ResizeArgs>
  export interface ResizeArgs {
    width?: number | null
    height?: number | null
    quality?: number | null
    jpegProgressive?: boolean | null
    pngCompressionLevel?: number | null
    grayscale?: boolean | null
    duotone?: DuotoneGradient | null
    base64?: boolean | null
    traceSVG?: Potrace | null
    toFormat?: ImageFormat | null
    cropFocus?: ImageCropFocus | null
    rotate?: number | null
  }
}

export namespace Internal_15Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpFixedResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>
    tracedSVG?: TracedSvgResolver<string | null, any, Context>
    aspectRatio?: AspectRatioResolver<number | null, any, Context>
    width?: WidthResolver<number | null, any, Context>
    height?: HeightResolver<number | null, any, Context>
    src?: SrcResolver<string | null, any, Context>
    srcSet?: SrcSetResolver<string | null, any, Context>
    srcWebp?: SrcWebpResolver<string | null, any, Context>
    srcSetWebp?: SrcSetWebpResolver<string | null, any, Context>
    originalName?: OriginalNameResolver<string | null, any, Context>
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TracedSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpResolutionsResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>
    tracedSVG?: TracedSvgResolver<string | null, any, Context>
    aspectRatio?: AspectRatioResolver<number | null, any, Context>
    width?: WidthResolver<number | null, any, Context>
    height?: HeightResolver<number | null, any, Context>
    src?: SrcResolver<string | null, any, Context>
    srcSet?: SrcSetResolver<string | null, any, Context>
    srcWebp?: SrcWebpResolver<string | null, any, Context>
    srcSetWebp?: SrcSetWebpResolver<string | null, any, Context>
    originalName?: OriginalNameResolver<string | null, any, Context>
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TracedSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpFluidResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>
    tracedSVG?: TracedSvgResolver<string | null, any, Context>
    aspectRatio?: AspectRatioResolver<number | null, any, Context>
    src?: SrcResolver<string | null, any, Context>
    srcSet?: SrcSetResolver<string | null, any, Context>
    srcWebp?: SrcWebpResolver<string | null, any, Context>
    srcSetWebp?: SrcSetWebpResolver<string | null, any, Context>
    sizes?: SizesResolver<string | null, any, Context>
    originalImg?: OriginalImgResolver<string | null, any, Context>
    originalName?: OriginalNameResolver<string | null, any, Context>
    presentationWidth?: PresentationWidthResolver<number | null, any, Context>
    presentationHeight?: PresentationHeightResolver<number | null, any, Context>
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TracedSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalImgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PresentationWidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PresentationHeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpSizesResolvers {
  export interface Resolvers<Context = any> {
    base64?: Base64Resolver<string | null, any, Context>
    tracedSVG?: TracedSvgResolver<string | null, any, Context>
    aspectRatio?: AspectRatioResolver<number | null, any, Context>
    src?: SrcResolver<string | null, any, Context>
    srcSet?: SrcSetResolver<string | null, any, Context>
    srcWebp?: SrcWebpResolver<string | null, any, Context>
    srcSetWebp?: SrcSetWebpResolver<string | null, any, Context>
    sizes?: SizesResolver<string | null, any, Context>
    originalImg?: OriginalImgResolver<string | null, any, Context>
    originalName?: OriginalNameResolver<string | null, any, Context>
    presentationWidth?: PresentationWidthResolver<number | null, any, Context>
    presentationHeight?: PresentationHeightResolver<number | null, any, Context>
  }

  export type Base64Resolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TracedSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcSetWebpResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SizesResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalImgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PresentationWidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PresentationHeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpOriginalResolvers {
  export interface Resolvers<Context = any> {
    width?: WidthResolver<number | null, any, Context>
    height?: HeightResolver<number | null, any, Context>
    src?: SrcResolver<string | null, any, Context>
  }

  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace ImageSharpResizeResolvers {
  export interface Resolvers<Context = any> {
    src?: SrcResolver<string | null, any, Context>
    tracedSVG?: TracedSvgResolver<string | null, any, Context>
    width?: WidthResolver<number | null, any, Context>
    height?: HeightResolver<number | null, any, Context>
    aspectRatio?: AspectRatioResolver<number | null, any, Context>
    originalName?: OriginalNameResolver<string | null, any, Context>
  }

  export type SrcResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TracedSvgResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type WidthResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type HeightResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type AspectRatioResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OriginalNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_12Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    mediaType?: MediaTypeResolver<string | null, any, Context>
    description?: DescriptionResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type MediaTypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DescriptionResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace FileGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (FileGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (FileGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace FileGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      File | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      File | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      File | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = File | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace ImageSharpConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (ImageSharpEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (ImageSharpGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (ImageSharpEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: ImageSharpDistinctEnum | null
  }

  export type GroupResolver<
    R = (ImageSharpGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: ImageSharpGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace ImageSharpEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      ImageSharp | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      ImageSharp | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      ImageSharp | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace ImageSharpGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (ImageSharpGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (ImageSharpGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace ImageSharpGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      ImageSharp | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      ImageSharp | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      ImageSharp | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = ImageSharp | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace JavascriptFrontmatterConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (JavascriptFrontmatterEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    totalCount?: TotalCountResolver<number | null, any, Context>
    distinct?: DistinctResolver<(string | null)[] | null, any, Context>
    group?: GroupResolver<
      (JavascriptFrontmatterGroupConnectionConnection | null)[] | null,
      any,
      Context
    >
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (JavascriptFrontmatterEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type DistinctResolver<
    R = (string | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DistinctArgs>
  export interface DistinctArgs {
    field?: JavascriptFrontmatterDistinctEnum | null
  }

  export type GroupResolver<
    R = (JavascriptFrontmatterGroupConnectionConnection | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, GroupArgs>
  export interface GroupArgs {
    skip?: number | null
    limit?: number | null
    field?: JavascriptFrontmatterGroupEnum | null
  }
}
/** An edge in a connection. */
export namespace JavascriptFrontmatterEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** A connection to a list of items. */
export namespace JavascriptFrontmatterGroupConnectionConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */
    edges?: EdgesResolver<
      (JavascriptFrontmatterGroupConnectionEdge | null)[] | null,
      any,
      Context
    > /** A list of edges. */
    field?: FieldResolver<string | null, any, Context>
    fieldValue?: FieldValueResolver<string | null, any, Context>
    totalCount?: TotalCountResolver<number | null, any, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (JavascriptFrontmatterGroupConnectionEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type FieldValueResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** An edge in a connection. */
export namespace JavascriptFrontmatterGroupConnectionEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The item at the end of the edge */
    next?: NextResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The next edge in the connection */
    previous?: PreviousResolver<
      JavascriptFrontmatter | null,
      any,
      Context
    > /** The previous edge in the connection */
  }

  export type NodeResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type NextResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PreviousResolver<
    R = JavascriptFrontmatter | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context> /** The id of this node. */
    parent?: ParentResolver<
      Node | null,
      any,
      Context
    > /** The parent of this node. */
    children?: ChildrenResolver<
      (Node | null)[] | null,
      any,
      Context
    > /** The children of this node. */
    siteMetadata?: SiteMetadataResolver<SiteMetadata_2 | null, any, Context>
    port?: PortResolver<Date | null, any, Context>
    host?: HostResolver<string | null, any, Context>
    pathPrefix?: PathPrefixResolver<string | null, any, Context>
    polyfill?: PolyfillResolver<boolean | null, any, Context>
    buildTime?: BuildTimeResolver<Date | null, any, Context>
    internal?: InternalResolver<Internal_16 | null, any, Context>
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<
    R = Node | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type ChildrenResolver<
    R = (Node | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type SiteMetadataResolver<
    R = SiteMetadata_2 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PortResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PortArgs>
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type HostResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PathPrefixResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type PolyfillResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type BuildTimeResolver<
    R = Date | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BuildTimeArgs>
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */
  }

  export type InternalResolver<
    R = Internal_16 | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace SiteMetadata_2Resolvers {
  export interface Resolvers<Context = any> {
    title?: TitleResolver<string | null, any, Context>
  }

  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}

export namespace Internal_16Resolvers {
  export interface Resolvers<Context = any> {
    contentDigest?: ContentDigestResolver<string | null, any, Context>
    type?: TypeResolver<string | null, any, Context>
    owner?: OwnerResolver<string | null, any, Context>
  }

  export type ContentDigestResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type TypeResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
  export type OwnerResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>
}
