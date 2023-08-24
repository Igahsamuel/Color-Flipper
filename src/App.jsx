import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [colorMode, setColorMode] = useState("Simple");

  const handleColorModeChange = (mode) => {
    setColorMode(mode); // Update the color mode in the parent (App) component
  };

  return (
    <div className="App">
      <Header onColorModeChange={handleColorModeChange} />
      <Body colorMode={colorMode} />
    </div>
  );
}

export default App;
