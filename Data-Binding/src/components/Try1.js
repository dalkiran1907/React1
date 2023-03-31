import React, { useState } from "react";

function Try1() {
  const [count, setCount] = useState(0);

  const handleIncremant = () => {
    setCount(count + 1);
  };
  const handleDecremant = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={handleIncremant}>Artır</button>
      <h1>Count: {count} </h1>
      <button onClick={handleDecremant}>Azalt</button>
    </div>
  );
}

export default Try1;

// import React, { useState } from 'react'

// function Try1() {
//    const [name,setName]=useState("Deniz")

//    const handleChange =(event)=>{
//     setName(event.target.value)
//    }

//   return (
//     <div>
//         <h1>Hello, {name} !</h1>
//         <input type="text" value={name} onChange={handleChange}  />
//     </div>
//   )
// }

// export default Try1



