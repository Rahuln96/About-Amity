import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
     <>
     
     
     <section className="footer">
  <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4 pb-0 ">
      <div className="col-md-12 ">
        <h3>Ask Your Query?</h3>
        {/* <p>You will get personalize detail of everything realted</p> */}
        <form action="">
          <textarea
            name="Enter your  name"
            id=""
            cols={30}
            rows={1}
            defaultValue={""}
          />
          <br />
          <button className="btn btn-light" type="submit">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/bookishgirllove/?igshid=YmMyMTA2M2Y%3D"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2022 Copyright:
      <a className="text-white" href="/">
        Amura
      </a>
    </div>
    {/* Copyright */}
  </footer>
</section>

     
     
     
     </>

  )
}
