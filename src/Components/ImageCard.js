import React from "react";
import Socialmedia from "./SocialmediaBox";

const ImageCard = (props) => {
  const { alt_description, urls, user } = props.image;
  return (
    <div className="box">
      <img src={urls.regular} alt={alt_description} className="gallery-item" />
      <Socialmedia user={user} />
    </div>
  );
};

export default ImageCard;
