import React, { useContext } from "react";
import { Tema } from "./Try1";

function Try2() {
  return (
    <div style={useContext(Tema)}>
      <h1> Merhaba </h1>
    </div>
  );
}

export default Try2;
