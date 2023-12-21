import React from "react";
import "./Modal.css";

const Modal = ({ onCancel, onDelete }) => {
  return (
    <div className="Modal">
      <div className="form">
        <h4>Delete comment</h4>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div>
          <button onClick={onCancel}>NO, CANCEL</button>
          <button onClick={onDelete}>YES, DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
