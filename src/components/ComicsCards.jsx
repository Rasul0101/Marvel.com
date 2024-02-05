// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ComicsCards = () => {
  const [comicData, setComicData] = useState([]);
  const [comicNum, setComicNum] = useState(8);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92"
      )
      .then((res) => setComicData(res.data.data.results))
      .catch((err) => console.log(err, "Comicsdə xəta baş verdi!"));
  }, []);

  return (
    <section className="comics-cards">
      <div className="container">
        <div className="cards-row">
          {comicData
            .map((item) => (
              <Link to={`/comics/${item.id}`} key={item.id} className="card">
                <img
                  className="card-img"
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt=""
                />
                <h4 className="title">{item?.title}</h4>
                <p className="price">{item?.prices[0].price}$</p>
              </Link>
            ))
            .slice(0, comicNum)}
        </div>
        <div className="button-side">
          <div
            onClick={() => setComicNum(comicNum + 4)}
            className="btn load-more"
          >
            Load More
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComicsCards;
