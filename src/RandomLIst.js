import React, { useState } from "react";
import "./RandomList.css";

export default function RandomList() {
  const [randArr, setRandom] = useState([]);

  const generate = () => {
    setRandom([...randArr, Math.floor(Math.random() * 100)]);
  };

  return (
    <div className="container">
      <div className="listCon">
        {randArr.map((num, idx) => {
          return (
            <li className="li" key={idx}>
              {" "}
              {num}{" "}
            </li>
          );
        })}
      </div>
      <button className="btn" onClick={generate}>
        Generate
      </button>
    </div>
  );
}
