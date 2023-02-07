import "./App.css";
import { useState } from "react";
import { messeages, userDetails, userProfile } from "./database";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [sender, setsender] = useState("");
  const [receiver, setreceiver] = useState("");
  const [chatPage, setchatPage] = useState(false);
  const [showChat, setshowChat] = useState(false);
  const [chatboxWord, setchatboxWord] = useState("");

  const loginUser = () => {
    if (userDetails[username]) {
      if (userDetails[username] === password) {
        console.log("done");
        setchatPage(true);
        userProfile[username].isOnline = true;
        return;
      }
    }
    console.log("fail");
  };
  const loginPage = (
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
  const logoutUser = () => {
    setchatPage(false);
    userProfile[username].isOnline = false;
  };
  const openChatbox = (receiverName) => {
    setsender(username);
    setreceiver(receiverName);
    setshowChat(!showChat);
  };
  const loadedMessages = (
    <>
      {sender} to {receiver}
      <h4>'df'</h4>
    </>
  );
  const sendMessage = () => {
    console.log(sender, receiver, chatboxWord);
  };
  const chatWindow = (
    <>
      personal chat
      <br />
      {loadedMessages}
      <input onChange={(e) => setchatboxWord(e.target.value)} />
      <button onClick={sendMessage}>sendMessage</button>
    </>
  );

  const chatting = (
    <>
      username is {userProfile[username]?.name}
      <br />
      location is {userProfile[username]?.location}
      <br />
      profilePic is {userProfile[username]?.profilePic}
      <br />
      <button onClick={logoutUser}>logout</button>
      <br />
      chatbox
      <div>
        <h1>all chat users</h1>
        {Object.keys(userDetails).map((user) => {
          if (user !== username)
            return <li onClick={() => openChatbox(user)}>{user}</li>;
        })}
      </div>
      <br />
      {showChat ? chatWindow : null}
    </>
  );
  return <>{!chatPage ? loginPage : chatting}</>;
}

export default App;
