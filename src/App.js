import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // useEffect(() => {
  //   const apiKey = "pk_live_f86c1cb89655efdb48e78088332f7436";
  //   const animalNonProfits = "https://partners.every.org/v0.2/search/pets";

  //   axios
  //     .get(animalNonProfits, {
  //       params: {
  //         apiKey: apiKey,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
