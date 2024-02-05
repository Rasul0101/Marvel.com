// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import NewsCard from "../components/NewsCard";

const CharacterHomePage = () => {
  const [personData, setPersonData] = useState([]);
  const { ID } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters/${ID}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`
      )
      .then((res) => setPersonData(res.data.data.results[0]));
  }, [ID]);

  return (
    <main className="char-home-page">
      <NewsCard />
      <section className="person-main">
        <div className="container">
          <div className="person-inner">
            <img
              src={`${personData?.thumbnail?.path}.${personData?.thumbnail?.extension}`}
              alt=""
            />
            <div className="content">
              <h3 className="title">{personData?.name}</h3>
              <p className="text">{personData?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CharacterHomePage;
