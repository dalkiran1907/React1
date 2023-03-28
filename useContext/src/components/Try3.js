import React, { useContext } from "react";
import { Tema } from "./Try1";

function Try3() {
  return (
    <div style={useContext(Tema)}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus.
      </p>
    </div>
  );
}

export default Try3;
