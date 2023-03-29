import React, { useRef, useState } from "react";

function Try1() {
  const [renk, setRenk] = useState("Renk");

  const renkDegisimi = useRef(null);

  const degisim = () => {
    document.body.style.backgroundColor = renkDegisimi.current.value;
    setRenk(() => renkDegisimi.current.value);
  };

  return (
    <div className="App">
      <p>İngilizce Renk Yaz</p>
      <input type="text" ref={renkDegisimi} onChange={degisim} />
      <p>{renk}</p>
    </div>
  );
}

export default Try1;
