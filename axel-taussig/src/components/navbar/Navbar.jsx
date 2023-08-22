import React from 'react'
import './navbar.css'

function Navbar() {
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
  )
}

export default Navbar