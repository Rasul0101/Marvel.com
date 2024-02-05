// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// Image
// import bgAsset from "../assets/images/bg-asset.svg";

// Material UI
import { Skeleton } from "@mui/material";

const CharacterCards = ({ forCards }) => {
  const [active, setActive] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [num, setNum] = useState(9);
  const [searchInput, setSearchInput] = useState("");

  const handleClick = (item) => {
    // active == null ? setActive(item.id) : setActive(null);
    setActive(item.id);

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters/${item.id}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`
      )
      .then((res) => setCardData(res.data.data.results[0]));
  };

  const handleFind = () => {
    let a = forCards.find((item) =>
      item.name.toLowerCase().includes(searchInput.trim().toLowerCase())
    );
    setCardData(a);
  };

  return (
    <section className="character-cards">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <div className="cards">
              {forCards
                .map((item) => (
                  <div
                    className={`card ${item.id == active ? "active" : ""}`}
                    key={item?.id}
                    onClick={() => handleClick(item)}
                  >
                    <img
                      src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                      alt=""
                    />
                    <div className="content">
                      <h1 className="title">{item?.name}</h1>
                    </div>
                  </div>
                ))
                .slice(0, num)}
            </div>
            <div onClick={() => setNum(num + 3)} className="btn load-more">
              Load More
            </div>
          </div>
          <div className="right-side">
            {cardData ? (
              <div className="side-column">
                <div className="person-card">
                  <div className="card-head">
                    <img
                      src={`${cardData?.thumbnail?.path}.${cardData?.thumbnail?.extension}`}
                      alt=""
                    />
                    <div className="right">
                      <h1 className="name">{cardData?.name}</h1>
                      <div className="buttons">
                        <Link
                          to={`/${cardData.id}`}
                          className="btn btn-homepage"
                        >
                          Homepage
                        </Link>
                        <Link to="" className="btn btn-wiki">
                          Wiki
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="info">{cardData?.description}</p>
                  <div className="comics">
                    <h4 className="title">Comics:</h4>
                    <div className="boxes">
                      {cardData?.comics?.items?.map((item) => (
                        <div key={item?.name} className="box">
                          {item?.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="right-skeleton">
                <div className="skeleton">
                  <h3 className="title">
                    Please select a character to see information
                  </h3>
                  <div className="head">
                    <Skeleton
                      variant="circular"
                      animation="wave"
                      width={40}
                      height={40}
                    />
                    <Skeleton animation="wave" width={310} />
                  </div>
                  <Skeleton animation="wave" height={50} />
                  <Skeleton animation="wave" height={50} />
                  <Skeleton animation="wave" height={50} />
                </div>
              </div>
            )}
            <div className="find-box">
              <h4 className="title">Or find a character by name:</h4>
              <div className="search-side">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Enter name"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className="btn search-btn" onClick={handleFind}>
                  Find
                </div>
              </div>
              {/* <div className="message"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterCards;
