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
      .then((data) => setBackendData(data));
  }, []);

  const handleAddComment = (content) => {
    const newComment = constructComment(backendData, content);
    setBackendData((data) => ({
      ...data,
      comments: [...data.comments, newComment],
    }));
  };

  return (
    <div className="App">
      <div className="Comments">
        {backendData.comments?.map((comment, ind) => (
          <Comment key={ind} commentObj={comment} />
        ))}
      </div>
      <UserInput currentData={backendData} onAddComment={handleAddComment} />
    </div>
  );
}

export default App;
