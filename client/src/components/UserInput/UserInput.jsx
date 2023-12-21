import React, { useState } from "react";
import "./UserInput.css";

function UserInput({ currentUser, onAddResponse }) {
  const [content, setContent] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onAddResponse(content);
    setContent("");
  };

  return (
    <form className="UserInput" method="post" onSubmit={handleAddSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={"Add a comment..."}
      />
      <div>
        <img
          src="https://i.pravatar.cc/48"
          alt={`${currentUser?.username}'s profile`}
        />
        <button type="submit">SEND</button>
      </div>
    </form>
  );
}

export default UserInput;
