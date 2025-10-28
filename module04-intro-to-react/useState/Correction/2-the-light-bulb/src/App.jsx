import "./index.css";
import LightBulb from "./components/LightBulb";
import { useState } from "react";

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const maxTurns = 10;

  const handleToggle = () => {
    if (!isLightOn && counter >= maxTurns) {
      alert("You've reached the limit! Reset to turn the light on again.");
      return;
    }

    if (!isLightOn) {
      setCounter((prev) => prev + 1);
    }

    setIsLightOn((prev) => !prev);
  };

  const handleReset = () => {
    setIsLightOn(false);
    setCounter(0);
  };

  const buttonLabel =
    counter >= maxTurns && !isLightOn
      ? "Locked"
      : isLightOn
      ? "Turn off"
      : "Turn on";

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button onClick={handleToggle}>{buttonLabel}</button>
        <button onClick={handleReset}>Reset</button>
        <p>You have turned the light on {counter} times</p>
      </div>
      s
      <LightBulb isLightOn={isLightOn} />
    </>
  );
};

export default App;
