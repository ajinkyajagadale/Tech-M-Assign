import "./App.css";
import { useState } from "react";
import { userDetails } from "./database";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const loginUser = () => {
    if (userDetails[username]) {
      if (userDetails[username] === password) {
        console.log("done");
        return;
      }
    }
    console.log("fail");
  };
  return (
    <>
      <h1>Login Page</h1>
      username
      <input onChange={(e) => setusername(e.target.value)} />
      <br />
      password
      <input onChange={(e) => setpassword(e.target.value)} />
      <br />
      <button onClick={loginUser}>login</button>
    </>
  );
}

export default App;
