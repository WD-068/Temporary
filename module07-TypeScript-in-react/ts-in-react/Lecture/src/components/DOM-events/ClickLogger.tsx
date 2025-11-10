import { type MouseEventHandler } from "react";

const ClickLogger = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log("Button clicked", event);
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default ClickLogger;

// _____________________________________________________________________
// _____________________________________________________________________

// // Another option is typing the parameters of the handler:

// import { type MouseEvent } from 'react';

// const ClickLogger = () => {
//   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//     console.log('Button clicked', event);
//   };

//   return <button onClick={handleClick}>Click Me</button>;
// };

// export default ClickLogger;
