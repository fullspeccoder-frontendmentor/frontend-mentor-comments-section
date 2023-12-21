import React from "react";
import ScoreKeeper from "../ScoreKeeper/ScoreKeeper";
import "./Comment.css";

const Comment = ({ commentObj }) => {
  const { user, createdAt, content, score } = commentObj;
  return (
    <div className="Comment">
      <div className="user-comment-info">
        <img
          src="https://i.pravatar.cc/48"
          alt={`${user.username}'s profile`}
        />
        <span>{user.username}</span>
        {sessionStorage.username === user.username && (
          <span className="user-indication">you</span>
        )}
        <span>{createdAt}</span>
      </div>
      <p className="comment-text">{content}</p>
      <div className="comment-footer">
        <ScoreKeeper score={score} />
        <span>
          <i className="fa-solid fa-reply"></i> Reply
        </span>
      </div>
    </div>
  );
};

export default Comment;
