import React from "react";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="gallery-popup"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img className="modal-img" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
