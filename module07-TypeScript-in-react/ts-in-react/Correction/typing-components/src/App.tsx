import { useState } from "react";
import Container from "./layouts/Container";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Status from "./components/Status";
import ProfileCard from "./components/ProfileCard";
import Alert from "./components/Alert";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";
import Avatar from "./components/Avatar";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Greeting name="John" />
      <Counter initialCount={0} />
      <Status status="loading" />
      <ProfileCard user={{ name: "Ada", age: 40 }} />
      <Alert message="Here is some info" type="info" />
      <ProductList
        products={[
          { id: 1, title: "Book" },
          { id: 2, title: "Pen" },
        ]}
      />
      <Toggle
        isOn={isOn}
        onToggle={() => setIsOn((previousState) => !previousState)}
      />
      <Avatar url="https://placedog.net/100" altText="blabla" />
    </Container>
  );
};

export default App;
