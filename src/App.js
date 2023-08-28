import React, { useState, useEffect } from "react";

import ContainersUnified from "./containers/ContainersUnified";
import Test from "./containers/test/Test";

import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./components/slide/slide.css";
import "./App.css";

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

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainersUnified />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
