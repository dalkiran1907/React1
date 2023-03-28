import React, { useState } from "react";
import Try2 from "./Try2";

function Try1() {
  const [baslik, setBaslik] = useState("Props Öğreniyorum");

  return (
    <div>
      <Try2 title={baslik} />
    </div>
  );
}

export default Try1;
