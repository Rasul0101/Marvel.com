// import React from 'react'
import { Link } from "react-router-dom";

// Images
import Decoration from "../assets/images/Decoration.svg";

const InfoCards = ({ forCards }) => {
  const randomIndex = Math.floor(Math.random() * forCards.length);

  const selectedProduct = forCards[randomIndex];

  return (
    <section className="info-cards">
      <div className="container">
        <div className="cards">
          {/* {forCards
            .map((item) => (
              <div key={item?.id} className="character-card">
                <img
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt=""
                />
                <div className="content">
                  <h3 className="title">{item?.name}</h3>
                  <p className="text">{item?.description}</p>
                  <div className="buttons">
                    <Link to={`/${item?.id}`} className="btn btn-homepage">
                      Homepage
                    </Link>
                    <Link to="" className="btn btn-wiki">
                      Wiki
                    </Link>
                  </div>
                </div>
              </div>
            ))
            .slice(4, 5)} */}
          <div key={selectedProduct?.id} className="character-card">
            <img
              src={`${selectedProduct?.thumbnail?.path}.${selectedProduct?.thumbnail?.extension}`}
              alt=""
            />
            <div className="content">
              <h3 className="title">{selectedProduct?.name}</h3>
              <p className="text">{selectedProduct?.description}</p>
              <div className="buttons">
                <Link
                  to={`/${selectedProduct?.id}`}
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
          <div className="info-card">
            <img className="decor-img" src={Decoration} alt="" />
            <h1 className="title">
              Random character for today! <br /> Do you want to get to know him
              better?
            </h1>
            <p className="text">Or choose another one</p>
            <Link to="" className="btn btn-homepage">
              try it
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
