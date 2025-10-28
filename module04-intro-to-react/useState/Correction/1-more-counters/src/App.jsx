import "./index.css";
import Counter from "./components/Counter";
import { useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div>
      <Counter counter={counter1} setCounter={setCounter1} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />
    </div>
  );
};

export default App;
