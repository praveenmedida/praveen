import React, { useState } from "react";

const IncrementDecrementButton = () => {
  const [count, setCount] = useState(4);

  const handleIncrement = () => {
    setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : prevCount));
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  const zero = () => {
    setCount((prevCount) => (prevCount = 0));
  };

  return (
    <div className="wrapper">
      <span className="minus" onClick={handleDecrement}>
        -
      </span>
      <div className="wrapper">
        <span className="num">{count < 10 ? `0${count}` : count}</span>
        <span className="plus" onClick={handleIncrement}>
          +
        </span>
      </div>

      <div>
        <span className="reset" onClick={zero}>
          Reset
        </span>
      </div>
    </div>
  );
};

export default IncrementDecrementButton;
