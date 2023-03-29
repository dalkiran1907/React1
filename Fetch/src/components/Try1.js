import React, { useEffect, useState } from "react";

function Try1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user) => (
        <div>{user.name} </div>
      ))}
    </div>
  );
}

export default Try1;
