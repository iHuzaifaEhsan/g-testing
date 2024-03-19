import React from "react";
import style from "./App.module.css";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const btn = useRef();
  const changed = () => {
    btn.current.value = "Yes 😭";
    setVal("I can't believe you are Gandu 😭");
  };
  return (
    <div className="main">
    <div className={`${style.unori}`}>
      <h1>Gandu Testing</h1>
      <h2>ARE YOU GANDU?</h2>
      <input ref={btn} type="text" placeholder="Yes/No" />
      <button onClick={changed}>Enter</button>
      
      <p>{val}</p>
    </div>
    </div>
  );
};

export default App;
