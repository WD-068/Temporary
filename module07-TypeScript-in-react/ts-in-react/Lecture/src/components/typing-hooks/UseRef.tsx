import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <button onClick={focusInput}>Focus input</button>
      <input ref={inputRef} />
    </>
  );
};
export default UseRef;
