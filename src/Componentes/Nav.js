import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg bg-body-tertiary " >
    <div class="container">
      <div class="navbar-brand"><img src='https://cdn-icons-png.flaticon.com/128/918/918404.png' alt='text'/><h1><b>L❤️VERR</b></h1></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>&nbsp;&nbsp;&nbsp;
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/price">L❤️VERR</NavLink>&nbsp;&nbsp;&nbsp;
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">Sing Up</NavLink>&nbsp;&nbsp;&nbsp;
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/Cart"><img src='https://cdn-icons-png.flaticon.com/128/3128/3128313.png' alt='text' height={50} width={50}></img></NavLink>&nbsp;&nbsp;&nbsp;
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Nav
