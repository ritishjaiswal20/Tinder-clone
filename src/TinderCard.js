import React from "react";
import { useState } from "react";
import "./TinderCard.css";
function TinderCard() {
  const [people, setPeople] = useState([
    {
      name: "Ritish jaiswal",
      url: " ",
    },
    {
      name: "Rishabh  jaiswal",
      url: "",
    },
  ]);
  return (
    <div>
      <h1>Tinder cards</h1>
    </div>
  );
}

export default TinderCard;
