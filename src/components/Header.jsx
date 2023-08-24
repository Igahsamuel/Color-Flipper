import { useState } from "react";

function Header({ onColorModeChange }) {
  const [defaultColor, setDefaultColor] = useState("Simple");

  const handleDefault = (format) => {
    setDefaultColor(format);
    onColorModeChange(format); // Notify the parent (App) of the color mode change
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center container mx-auto py-5 px-4">
        <h1 className="font-bold text-xl">Color Flipper</h1>
        <ul className="flex">
          <li
            className={`mr-6 cursor-pointer ${
              defaultColor === "Simple" ? "bg-white" : " "
            }`}
            onClick={() => handleDefault("Simple")}
          >
            Simple
          </li>
          <li
            className={` cursor-pointer ${
              defaultColor === "Hex" ? "bg-white" : " "
            }`}
            onClick={() => handleDefault("Hex")}
          >
            Hex
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
