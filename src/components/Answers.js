import React from "react";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiBookmarkMinus } from "react-icons/ci";

function Answers({ ...q }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <h3>
        <b style={{ color: "red" }}> Questions: {"  "}</b>
        {q.title}
      </h3>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? <CiBookmarkMinus /> : <CiSquarePlus />}
      </button>
      {showMore ? (
        <p>
          <b style={{ color: "blue" }}> Answers: {"  "}</b>
          {q.info}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Answers;
