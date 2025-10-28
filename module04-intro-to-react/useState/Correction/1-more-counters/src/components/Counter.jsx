const Counter = ({ counter, setCounter }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
