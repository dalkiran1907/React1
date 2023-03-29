import React, { useEffect, useState } from "react";
import axios from "axios";

function Try1() {
  const [title, setTitel] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) =>
      setTitel(res.data)
    );
  }, []);

  return (
    <div className="App">
      <h1>Title</h1>
      {title.map((baslik) => (
        <div>{baslik.title} </div>
      ))}
    </div>
  );
}

export default Try1;
