import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import {
  Intro,
  Synq,
  Liv,
  Tv,
  Fankens,
  Dl,
  Piedras,
  Tt,
  Personal,
  Test,
} from "./containers";

import { Navbar } from "./components";



function App() {

  const [names, setNames] = useState([]);


useEffect(() => {

   axios
      .get("https://api.api-ninjas.com/v1/babynames?gender=neutral", {
        headers: {
          "x-api-key": "A+Ncz8PzDeMNU8+IoLgv5A==MBYIfTL1vkeKCwdq",
        },
      })
      .then(function (response) {
        // handle success
        setNames(response.data);
        //console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });


}, [])

  return (
    <>
      <Navbar />
      <Test/>
      <Intro />
      <Synq />
      <Liv />
      <Tv />
      <Fankens />
      <Dl />
      <Piedras />
      <Tt />
      <Personal />

      <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/143188444.js"></script>
      
    </>
  );
}

export default App;
