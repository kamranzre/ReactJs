import React from "react";

const BoxContainer = (props) => {
  return (
    <div>
      <section className="dishes" id="dishes">
        <div className="box-container">{props.listImage}</div>
      </section>
    </div>
  );
};

export default BoxContainer;
