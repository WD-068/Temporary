// src/components/HooksDemo.tsx
import { useCallback, useEffect, useMemo, useState } from "react";

const UseCallbackUseMemo = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);

    return () => clearTimeout(timer);
  }, []);

  const doubledCached = useMemo(() => count * 2, [count]); // Recomputed only when count changes
  const doubledNoCached = count * 2; // Recomputed on every render

  const addLog = useCallback((entry: string) => {
    setLog((prev) => [...prev, entry]);
  }, []); // This function is never re-created

  return (
    <div>
      <p>Time Elapsed: {timeElapsed}s</p>
      <p>Count: {count}</p>
      <p>Doubled: {doubledCached}</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          addLog(`Count increased to ${count + 1}`);
        }}
      >
        Increment
      </button>
      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackUseMemo;
