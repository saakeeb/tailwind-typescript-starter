declare module "gatsby-plugin-image" {
  import * as React from "react";

  export interface StaticImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholder?: "blurred" | "dominantColor" | "tracedSVG" | "none";
    layout?: "fixed" | "fullWidth" | "constrained";
    aspectRatio?: number;
    width?: number;
    height?: number;
    quality?: number;
    formats?: Array<"auto" | "webp" | "avif">;
  }

  export const StaticImage: React.FC<StaticImageProps>;
}
