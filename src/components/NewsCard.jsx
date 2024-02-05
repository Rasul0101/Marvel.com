// import React from 'react'

// Images
import Avengers from "../assets/images/Avengers.svg";
import Logo from "../assets/images/Avengers-logo.svg";

const NewsCard = () => {
  return (
    <section className="news-card">
      <div className="container">
        <div className="card-in">
          <div className="card-left">
            <img src={Avengers} alt="" />
            <p className="text">
              New comics every week! <br /> Stay tuned!
            </p>
          </div>
          <div className="card-right">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
