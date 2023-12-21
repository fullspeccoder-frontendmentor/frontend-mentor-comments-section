import { useEffect, useState } from "react";
import Comment from "./components/Comment/Comment";
import UserInput from "./components/UserInput/UserInput";
import "./App.css";
import { constructComment } from "./utilities";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("username", backendData.currentUser?.username);
  }, [backendData]);

  const handleAddComment = (content) => {
    const newComment = constructComment(backendData, content);
    setBackendData((data) => ({
      ...data,
      comments: [...data.comments, newComment],
    }));
  };

  const handleDeleteComment = (id) => {
    setBackendData((data) => ({
      ...data,
      comments: data.comments.filter((comment) => comment.id !== id),
    }));
  };

  const handleEditComment = (id, content) => {
    setBackendData((data) => ({
      ...data,
      comments: data.comments.map((comment) =>
        comment.id === id ? { ...comment, content } : comment
      ),
    }));
  };

  return (
    <div className="App">
      <div className="Comments">
        {backendData.comments?.map((comment, ind) => (
          <Comment
            key={ind}
            commentObj={comment}
            onDeleteComment={handleDeleteComment}
            onEditComment={handleEditComment}
          ></Comment>
        ))}
      </div>
      <UserInput
        currentData={backendData?.currentUser}
        onAddResponse={handleAddComment}
      />
    </div>
  );
}

export default App;
