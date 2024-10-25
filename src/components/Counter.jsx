import { useState } from "react";

const Counter = (props) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button
        className="counter-button"
        onClick={() => props.callBackToDecrement()}
      >
        -
      </button>
      <button
        className="counter-button"
        onClick={() => props.callBackToIncrement()}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
