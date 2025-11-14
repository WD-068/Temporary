// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the default value of a piece of state called count
// Render buttons to increase, decrease and reset
import { useState, type MouseEvent } from 'react';

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);

  const handleCount = (event: MouseEvent<HTMLButtonElement>) => {
    const operation = (event.target as HTMLButtonElement).value;

    if (operation === '+') {
      setCount((prev) => prev + 1);
    } else if (operation === '-') {
      setCount((prev) => prev - 1);
    } else if (operation === 'reset') {
      setCount(0);
    }
  };

  return (
    <>
      <p>Initial count: {count}</p>
      <button value='+' onClick={handleCount}>
        +
      </button>
      <button value='-' onClick={handleCount}>
        -
      </button>
      <button value='reset' onClick={handleCount}>
        Reset
      </button>
    </>
  );
};

export default Counter;
