import React, { useState } from "react";
import ScoreKeeper from "../ScoreKeeper/ScoreKeeper";
import Modal from "../Modal/Modal";
import Icon from "../Icon/Icon";
import "./Comment.css";

const Comment = ({ commentObj, onDeleteComment, onEditComment }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [isReplying, setisReplying] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const { user, createdAt, content, score, id } = commentObj;
  const isCurrentUser = user.username === sessionStorage.username;

  const handleUpdateClick = () => {
    if (editedContent === "") return alert("Must fill in comment section");
    onEditComment(id, editedContent);
    setEditedContent("");
    setIsEditable((editable) => !editable);
  };

  return (
    <>
      {canDelete && (
        <Modal
          onCancel={() => setCanDelete((canDelete) => !canDelete)}
          onDelete={() => {
            onDeleteComment(id);
          }}
        />
      )}
      <div className="Comment">
        <div className="user-comment-info">
          <img
            src="https://i.pravatar.cc/48"
            alt={`${user.username}'s profile`}
          />
          <span>{user.username}</span>
          {isCurrentUser && <span className="user-indication">you</span>}
          <span>{createdAt}</span>
        </div>
        {!isEditable && <p className="comment-text">{content}</p>}
        {isEditable && (
          <textarea
            type="text"
            value={editedContent}
            onChange={(e) => {
              setEditedContent(e.target.value);
            }}
          />
        )}
        <div className="comment-footer">
          <ScoreKeeper score={score} />
          {!isCurrentUser && (
            <Icon
              iconName={"reply"}
              onClickHandler={() => setisReplying((isReplying) => !isReplying)}
            >
              Reply
            </Icon>
          )}
          {isCurrentUser && (
            <div className="current-user-options">
              {!isEditable && (
                <>
                  <Icon
                    iconName={"trash"}
                    onClickHandler={() =>
                      setCanDelete((canDelete) => !canDelete)
                    }
                  >
                    Delete
                  </Icon>
                  <Icon
                    iconName={"pen"}
                    onClickHandler={() => {
                      setIsEditable((editable) => !editable);
                    }}
                  >
                    Edit
                  </Icon>
                </>
              )}
              {isEditable && (
                <button className="edit-button" onClick={handleUpdateClick}>
                  Update
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {isReplying && (
        <span onClick={() => setisReplying((replying) => !replying)}>
          ***UserInput will show up here later***
        </span>
      )}
    </>
  );
};

export default Comment;
