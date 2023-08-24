import { useState } from "react";

function Body({ colorMode }) {
  let colors = [
    "red",
    "green",
    "orange",
    "blue",
    "indigo",
    "violet",
    "pink",
    "brown",
    "chocolate",
  ];
  const colorCodes = [
    "#FF0000",
    "#008000",
    "#FFA500",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
    "#FFC0CB",
    "#A52A2A",
    "#D2691E",
  ];
  const [color, setColor] = useState(0);

  const isHexMode = colorMode === "Hex";
  const changeColor = () => {
    setColor((color + 1) % colors.length);
  };

  return (
    <div
      className="h-screen flex items-center justify-center flex-col"
      style={{
        backgroundColor: isHexMode ? colorCodes[color] : colors[color],
      }}
    >
      <p className="font-bold text-2xl">
        Background {"color"}:{isHexMode ? colorCodes[color] : colors[color]}
      </p>
      <button
        className="border-2 bg-gray-100 py-2 px-9 rounded-md my-6 text-xl border-black hover:border-white hover:text-white hover:bg-purple-600"
        onClick={changeColor}
      >
        Change Color
      </button>
    </div>
  );
}

export default Body;
