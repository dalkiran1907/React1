import React from "react";

function Try1() {
  return (
    <form action="/api/form" method="post">
      <label for="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label for="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <label for="mail">Mail:</label>
      <input type="text" id="mail" name="mail" />
      <label for="pswrd">Password:</label>
      <input
        type="password"
        id="pswrd"
        name="pswrd"
        pattern="[a-z0-9]{1,15}"
        title="Password should be digits (0 to 9) or alphabets (a to z)."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Try1;
