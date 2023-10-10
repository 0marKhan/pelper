import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    const apiKey = "pk_live_f86c1cb89655efdb48e78088332f7436";
    const animalNonProfits = "https://partners.every.org/v0.2/search/pets";

    axios
      .get(animalNonProfits, {
        params: {
          apiKey: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div></div>;
}

export default App;
