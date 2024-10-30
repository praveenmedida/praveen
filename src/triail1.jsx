import React, { useState } from "react";

const CounterX = () => {
  const [counterValue, setCounterValue] = useState(0);

  const onIncrement = () => {
    const updatedCounterValue = counterValue + 1;
    updateCounter(updatedCounterValue);
  };

  const onDecrement = () => {
    const updatedCounterValue = counterValue - 1;
    updateCounter(updatedCounterValue);
  };

  const onReset = () => {
    updateCounter(0);
  };

  const updateCounter = (updatedValue) => {
    setCounterValue(updatedValue);

    if (updatedValue > 0) {
      setColor("green");
    } else if (updatedValue < 0) {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  const setColor = (color) => {
    const counterElement = document.getElementById("counterValue");
    if (counterElement) {
      counterElement.style.color = color;
    }
  };

  return (
    <div>
      <div id="counterValue">{counterValue}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default CounterX;
