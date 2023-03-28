import React, { useEffect, useState } from "react";

function Try1() {
  const [timer, setTimer] = useState(15);
  useEffect(() => {
    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div>
      <div className="stil">
        <h1>{timer}</h1>
      </div>
    </div>
  );
}

export default Try1;
