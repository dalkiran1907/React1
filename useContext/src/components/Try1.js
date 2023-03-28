import React, { useState } from "react";
import Try2 from "./Try2";
import Try3 from "./Try3";
const style = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};

export const Tema = React.createContext();
function Try1() {
  const [stil, setStil] = useState(style.dark);

  function Degistir() {
    if (stil === style.dark) {
      setStil(style.light);
    } else {
      setStil(style.dark);
    }
  }

  return (
    <div>
      <button  className="btn" onClick={Degistir}>
        {stil === style.dark ? "Açık" : "Koyu"}
      </button>

      <Tema.Provider value={stil}>
        <Try2 />
        <Try3 />
      </Tema.Provider>
    </div>
  );
}

export default Try1;
