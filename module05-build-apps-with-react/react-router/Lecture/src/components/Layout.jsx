import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";

const Layout = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <main>
        {/* Child routes will render here */}
        <Outlet context={{ signedIn, setSignedIn }} />
      </main>
    </div>
  );
};

export default Layout;
