import React, { useState } from "react";
import "./ScoreKeeper.css";

const ScoreKeeper = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(score);

  return (
    <div className="score">
      <span onClick={() => setCurrentScore((curScore) => curScore + 1)}>+</span>
      <span>{currentScore}</span>
      <span
        onClick={() =>
          setCurrentScore((curScore) => (curScore > 0 ? curScore - 1 : 0))
        }
      >
        -
      </span>
    </div>
  );
};

export default ScoreKeeper;
