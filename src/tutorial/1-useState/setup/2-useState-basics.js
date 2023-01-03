import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Basic useState Toggle");

  const EventHandler = function() {
    if (text === "Basic useState Toggle") {
      setText("Voila..! It changed.");
    } else {
      setText("Basic useState Toggle");
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={EventHandler}>
        CHANGE TEXT
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
