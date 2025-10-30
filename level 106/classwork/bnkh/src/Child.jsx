import React, { useContext } from "react";
import { ColorContext } from "./ColorProvider";

const Child = () => {
  const { color, handleClick } = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: color, padding: "50px", textAlign: "center" }}>
      <h2>Current Color: {color}</h2>
      <button onClick={handleClick} style={{ padding: "10px 20px" }}>
        Change Color
      </button>
    </div>
  );
};

export default Child;
