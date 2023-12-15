import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="Modal">
      <div className="form">
        <h4>Delete comment</h4>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div>
          <button>NO, CANCEL</button>
          <button>YES, DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
