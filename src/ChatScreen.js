import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar, IconButton } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png",
      message: "Hey, how are you?",
    },
    {
      name: "Saam",
      image:
        "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png",
      message: "Hey, gusys?",
    },
    {
      message: "Hey, Buddy?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>s
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textuser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputField"
            placeholder="type a message"
            type="text"
          />
          <button
            type="submit"
            onClick={handleSend}
            className="chatScreen_inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
