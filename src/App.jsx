import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="h-80 text-black flex items-center justify-center text-5xl md:text-7xl lg:text-8xl">
        OpenBeep
      </div>
      <Text />
    </>
  );
}

export default App;
