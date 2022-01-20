import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const Clear = () => {
    setResult("");
  };
  const Backspace = () => {
    setResult(result.slice(0, -1));
  };
  const Calculate = () => {
    setResult(eval(result));
  };
  return (
    <>
    <h1 className="title">Simple Calculator</h1>
      <div className="container">
        <form>
          <input className="display" type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="sky" onClick={Clear} id="clear">
            Clear
          </button>
          <button className="sky" onClick={Backspace} id="backspace">
            C
          </button>
          <button className="sky" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="sky" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="sky" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="sky" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="sky" onClick={Calculate} id="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
