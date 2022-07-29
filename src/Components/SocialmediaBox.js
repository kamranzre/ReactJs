import React from "react";
const Socialmedia = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-3 border border-secondary mt-1 socialmedia">
      <a
        target="_blank"
        href={`https://www.instagram.com/${props.user.instagram_username}`}
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default Socialmedia;
