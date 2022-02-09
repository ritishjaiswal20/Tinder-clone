import React from "react";
import { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Ritish jaiswal",
      url: " https://i0.wp.com/rayhaber.com/wp-content/uploads/2020/10/steve-jobs-kimdir.jpg?fit=1424%2C800&ssl=1",
    },
    {
      name: "Rishabh  jaiswal",
      url: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/01/29/1009845-1005945-elon-musk.jpg",
    },
  ]);
  return (
    <div>
      <h1>Tinder cards</h1>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card "
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
