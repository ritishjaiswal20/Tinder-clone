import React, { useState } from "react";
import "./ChatScreen.css";
function ChatScreen() {
  const message = useState([
    {
      name: "Mark",
      image: "..",
      message: "Hey, how are you?",
    },
    {
      name: "Saam",
      image: "..",
      message: "Hey, gusys?",
    },
    {
      name: "John",
      image: "..",
      message: "Hey, Buddy?",
    },
  ]);
  return <div className="chatScreen"></div>;
}

export default ChatScreen;
