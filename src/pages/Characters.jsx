// import React from "react";

// Components
import InfoCards from "../components/InfoCards.jsx";
import CharacterCards from "../components/CharacterCards.jsx";

const Characters = ({ myData }) => {
  return (
    <main className="characters">
      <InfoCards forCards={myData} />
      <CharacterCards forCards={myData} />
    </main>
  );
};

export default Characters;
