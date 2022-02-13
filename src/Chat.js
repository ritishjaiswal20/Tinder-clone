import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";
function Chat({ name, message, profilePic, timeStamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" src={profilePic} alt={name} />

        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <p className="chat-timeStamp">{timeStamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
