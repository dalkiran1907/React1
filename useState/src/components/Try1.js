import React, { useState } from "react";

function Try1() {
  const [deger, setDeger] = useState(0);

  return (
    <div className="try">
      <button className="btn" onClick={() => setDeger(deger + 1)}>
        Arttır
      </button>
      <p> {deger} </p>
      <button className="btn" onClick={() => setDeger(deger - 1)}>
        Azalt
      </button>
    </div>
  );
}

export default Try1;
