import { useEffect, useState } from "react";

type User = { id: number; name: string };

const UseEffect = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      document.title = `Welcome, ${user.name}`;
    }
  }, [user]);

  return null;
};
export default UseEffect;
