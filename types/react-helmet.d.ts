declare module "react-helmet" {
  import * as React from "react";

  interface HelmetProps {
    base?: any;
    bodyAttributes?: any;
    children?: React.ReactNode;
    defaultTitle?: string;
    defer?: boolean;
    encodeSpecialCharacters?: boolean;
    htmlAttributes?: any;
    link?: any[];
    meta?: any[];
    noscript?: any[];
    onChangeClientState?: (newState: any, addedTags: any, removedTags: any) => void;
    script?: any[];
    style?: any[];
    title?: string;
    titleAttributes?: any;
    titleTemplate?: string;
  }

  class Helmet extends React.Component<HelmetProps> {}
  export { Helmet };
}
