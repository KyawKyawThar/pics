import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} a={image} />;
  });
  return <div className='fl w-third pa2'>{images}</div>;
};
export default ImageList;
