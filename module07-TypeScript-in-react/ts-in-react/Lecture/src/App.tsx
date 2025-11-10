import Greeting from "./components/typing-props/Greeting";
import Button from "./components/typing-props/Button";
import Status from "./components/typing-props/Status";
import Container from "./components/typing-props/Container";

import Posts from "./components/typing-state/Posts";
import Counter from "./components/typing-state/Counter";
import UserInfo from "./components/typing-state/UserInfo";
import Profile from "./components/typing-state/Profile";

import NameForm from "./components/controlled-components/NameForm";
import FruitSelector from "./components/controlled-components/FruitSelector";

import ClickLogger from "./components/DOM-events/ClickLogger";
import InputLogger from "./components/DOM-events/InputLogger";
import FormHandler from "./components/DOM-events/FormHandler";
import KeyLogger from "./components/DOM-events/KeyLogger";

import UseState from "./components/typing-hooks/useState";
import UseRef from "./components/typing-hooks/useRef";
import UseEffect from "./components/typing-hooks/useEffect";
import UseCallbackUseMemo from "./components/typing-hooks/useCallback-useMemo";
import UseReducer from "./components/typing-hooks/useReducer";

const App = () => {
  return (
    <div>
      {/* Typing Props */}

      {/* Children Props */}
      <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Basic Props */}
        <Greeting name="Jorge" />
        {/* <Greeting name={42} /> */}

        {/* Optional and Default Props */}
        <Button label="Click Me" colour="green" />
        <Button label="Submit" />
        {/* <Button />  */}

        {/* Union Types for Prop Variants */}
        <Status status="success" />
        <Status status="loading" />
        <Status status="error" />
        {/* <Status status="thinking" /> */}

        {/* Typing State */}

        <Posts />

        {/* Inferred State from Initial Value */}
        <Counter />

        {/* Explicit State Type with Null */}
        <UserInfo />

        {/* State with Objects (Explicit) */}
        <Profile />

        {/* Controlled Components */}

        {/* Controlled Input */}
        <NameForm />

        {/* Controlled Select Dropdown */}
        <FruitSelector />

        {/* DOM Events */}

        {/* Click Events */}
        <ClickLogger />

        {/* Input Events */}
        <InputLogger />

        {/* Form Submission */}
        <FormHandler />

        {/* Keyboard Events */}
        <KeyLogger />

        {/* Typing Hooks */}

        {/* useState */}
        <UseState />

        {/* useRef */}
        <UseRef />

        {/* useEffect */}
        <UseEffect />

        {/* useCallback and useMemo */}
        <UseCallbackUseMemo />

        {/* useReducer */}
        <UseReducer />
      </Container>
    </div>
  );
};

export default App;
