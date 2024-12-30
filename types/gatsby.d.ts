declare module "gatsby" {
  import * as React from "react";

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    partiallyActive?: boolean;
    replace?: boolean;
    state?: Record<string, unknown>;
  }

  export const Link: React.FC<LinkProps>;

  export function useStaticQuery<TData = any>(query: any): TData;
  export const graphql: (query: TemplateStringsArray) => void;
}
