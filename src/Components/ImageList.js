import React from "react";
import BoxContainer from "./BoxContainer";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const itemimage = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <BoxContainer listImage={itemimage} />;
};

export default ImageList;
