import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
function Header() {
  return (
    <div className="header">
      <PersonIcon />
      <h1>Header</h1>
      <ForumIcon />
    </div>
  );
}

export default Header;
