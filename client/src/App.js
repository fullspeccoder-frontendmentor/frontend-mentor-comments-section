import { useEffect, useState } from "react";
import Comment from "./components/Comment/Comment";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div className="App">
      <div className="Comments">
        {backendData.comments?.map((comment) => (
          <Comment commentObj={comment} />
        ))}
      </div>
    </div>
  );
}

export default App;
