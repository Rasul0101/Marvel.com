// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import NewsCard from "../components/NewsCard";

const ComicsInner = () => {
  const [comicInnerData, setComicInnerData] = useState([]);
  const { comicId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`
      )
      .then((res) => {setComicInnerData(res.data.data.results[0]),console.log(res.data.data.results[0]);});
  }, [comicId]);

  return (
    <main className="inner-main">
      <NewsCard />
      <section className="comic-inner">
        <div className="container">
          <div className="inner">
            <div className="left">
              <img
                className="comic-img"
                src={`${comicInnerData?.thumbnail?.path}.${comicInnerData?.thumbnail?.extension}`}
                alt=""
              />
              <div className="content">
                <h3 className="title">{comicInnerData?.title}</h3>
                <p className="text">{comicInnerData?.textObjects?.[0].text}</p>
                <p className="pages">{comicInnerData?.pageCount} pages</p>
                <p className="language">
                  Language: {comicInnerData?.textObjects?.[0].language}
                </p>
                <p className="price">{comicInnerData?.prices?.[0].price}$</p>
              </div>
            </div>
            <Link className="right" to="/comics">
              Back to all
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComicsInner;
