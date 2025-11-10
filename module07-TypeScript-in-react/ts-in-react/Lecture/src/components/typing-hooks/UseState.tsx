// Simple inferred state:

import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0); // inferred as number

  return null;
};

export default UseState;

// _____________________________________________________________________
// _____________________________________________________________________

// Union types:

// import { useState } from "react";

// const HooksDemo = () => {
//   const [status, setStatus] = useState<"loading" | "error" | "success">(
//     "loading"
//   );

//   return null;
// };

// export default HooksDemo;

// _____________________________________________________________________
// _____________________________________________________________________

// Nullable state:

// import { useState } from "react";

// const HooksDemo = () => {
//   const [name, setName] = useState<string | null>(null);

//   return null;
// };

// export default HooksDemo;

// _____________________________________________________________________
// _____________________________________________________________________

// Complex state:

// import { useState } from "react";

// type User = { id: number; name: string };

// const HooksDemo = () => {
//   const [user, setUser] = useState<User | null>(null);

//   return null;
// };

// export default HooksDemo;
