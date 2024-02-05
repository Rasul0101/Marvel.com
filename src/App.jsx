// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// Pages
import Characters from "./pages/Characters.jsx";
import CharacterHomePage from "./pages/CharacterHomePage.jsx";
import Comics from "./pages/Comics.jsx";
import ComicsInner from "./pages/ComicsInner.jsx";

// Components
import Header from "./components/Header.jsx";

// Api
const urlApi =
  "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(urlApi)
      .then((res) => setData(res.data.data.results))
      .catch((err) => console.log(err, "Xəta baş verdi!"));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Characters myData={data} />} />
        <Route exact path="/:ID" element={<CharacterHomePage />} />
        <Route exact path="/comics" element={<Comics />} />
        <Route exact path="/comics/:comicId" element={<ComicsInner />} />
      </Routes>
    </>
  );
};

export default App;
