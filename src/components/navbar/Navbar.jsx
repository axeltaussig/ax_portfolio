import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";

function Navbar() {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.api-ninjas.com/v1/babynames?gender=neutral", {
  //       headers: {
  //         "x-api-key": "A+Ncz8PzDeMNU8+IoLgv5A==MBYIfTL1vkeKCwdq",
  //       },
  //     })
  //     .then(function (response) {
  //       // handle success
  //       setNames(response.data);
  //       //console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <header className="main-head">
        <nav className="navbar">
          <div className="name">
            <span>
              <i className="fa-solid fa-circle" />
            </span>
            <h1>Axel Taussig</h1>
          </div>
          <ul>
            <li>Digital Marketing Specialist</li>
          </ul>
          <a href="https://www.hyperfocus.au">
            <p>Personal Projects</p>
            <h2>Hyperfocus</h2>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
