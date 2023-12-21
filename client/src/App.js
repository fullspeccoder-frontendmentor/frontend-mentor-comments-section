import { useEffect, useState } from "react";
import Comment from "./components/Comment/Comment";
import "./App.css";

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

  console.log(sessionStorage);

  return (
    <div className="App">
      <div className="Comments">
        {backendData.comments?.map((comment, ind) => (
          <Comment key={ind} commentObj={comment} />
        ))}
      </div>
    </div>
  );
}

export default App;
