
import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-dark toppp">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img
        src="./../img/amuralogonew.png"
        height={30}
        alt="AMURA Logo"
        loading="lazy"
      />
    </a>
    {/* Container wrapper */}
    {/* <div class="container-fluid"> */}
    {/* Toggle button */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      {/* Left links */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#about_us">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#category">
            Category
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="/Signup">
            Sign Up
          </a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* </div> */}
    {/* Container wrapper */}
  </div>
</nav>

    
   
    </div>
    
  );
}
