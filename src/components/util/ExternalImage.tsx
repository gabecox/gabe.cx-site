import Image, { ImageLoader } from "next/image";
import React from "react";

interface ExternalImageProps {
  src: string;
  width: number;
  quality?: number;
}

const myLoader: ImageLoader = ({ src, width, quality }: ExternalImageProps) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export const ExternalImage: React.FC<ExternalImageProps> = (props) => {
  return (
    <Image
      loader={myLoader}
      src={props.src}
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
