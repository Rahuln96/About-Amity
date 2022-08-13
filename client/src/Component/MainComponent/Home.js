// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <React.Fragment>
    <div>
    <section className="header">
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-mdb-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="static">
      <h1>AMURA</h1>
      <p className="amura_content">
        <b>Answer Your Query Related To Amity University</b>
      </p>
      <div className="carousel-inner">
        <div className="carousel-item active IMG1">
          <img src="./../img/B.jpg" alt="college" className="d-block w-100 caro" />
        </div>
        <div className="carousel-item">
          <img src="./../img/A.jpg" alt="college" className="d-block w-100 caro" />
        </div>
        <div className="carousel-item">
          <img src="./../img/R.jpg" alt="college" className="d-block w-100 caro" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleIndicators"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

<section className="about_us">
  <div className="container about_us">
    <div className="row">
      <div className="col-md-6">
        <img src="./../img/about2.jpg" alt="about" className="aboutimg" />
      </div>
      <div className="col-md-6 about">
        <h3 className="text-center">About Us</h3>
        <p>
          "AMURA" mission is to share and grow the knowledge and quary related
          to "Amity University Patna" for now. Not all knowledge can be written
          down, but much of that which can be , still isn't . We want to connect
          the people who have knowledge to the people who need it, to bring
          together people with different perspectives so they can understand
          each other better related to any quary any knowledge about "Amity
          University " Patna for now, and to empower everyone to share their
          knowledge for the rest of the World. "AMURA" is a place where you can
          ask questions related to "Amity University" Patna for now that matter
          to you and get answers from people who have been there and done that.
          "AMURA" answers come from people who really understand the issues and
          have first-hand knowledge about "Amity University" Patna.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="category">
  <div className="container category">
    <h3 style={{ textAlign: "center" }}>CATEGORY</h3>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <a href="/Ballb">
            <img
              src="./../img/study1.webp"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="card-body">
          <a href="/Ballb">
              <h5 className="card-title">B.TECH</h5>
            </a>
            <p className="card-text">
              Bachelor's in Technology is undergraduate level engineering
              courses offered in Indian universties. Most of these courses
              accept Joint Entrance Examination (JEE) as their mode of entrance
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
        <a href="/Ballb">
            <img
              src="./../img/study2.jpg"
              className="card-img-top"
              alt="Palm Springs Road"
            />
          </a>
          <div className="card-body">
          <a href="/Ballb">
              <h5 className="card-title">BCA</h5>
            </a>
            <p className="card-text">
              BCA is a three-year undergraduate course in computer application.
              This degree gives good knowledge in areas related to computer
              science, and IT industry and networking.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
        <a href="/Ballb">
            <img
              src="./../img/study3.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="card-body">
          <a href="/Ballb">
              <h5 className="card-title">BBA</h5>
            </a>
            <p className="card-text">
              BBA is a 3-year undergraduate course in managememt that has huge
              BBA scope for students from all subject backgrounds.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
        <a href="/Ballb">
            <img
              src="./../img/study4.jpg"
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="card-body">
          <a href="/Ballb">
              <h5 className="card-title">B.COM</h5>
            </a>
            <p className="card-text">
              The Bachelor of Commerce or B.Com is a 3-year undergraduate degree
              in commerce and its related subjects.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <a href="/Ba">
            <img
              src="./../img/study5.jpg"
              className="card-img-top"
              alt="Palm Springs Road"
            />
          </a>
          <div className="card-body">
            <a href="/Ba">
              <h5 className="card-title">BA</h5>
            </a>
            <p className="card-text">
              Bachelor of Arts or BA is an undergraduate program. The full form
              of BA is Bachelor of Arts and it comes under the discipline of
              humanities/arts. BA course duration is 3 years.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <a href="/Ballb">
            <img
              src="./../img/study6.webp"
              className="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="card-body">
            <a href="/Ballb">
              <h5 className="card-title">BA-LLB</h5>
            </a>
            <p className="card-text">
              BA LLB is a 5 year integrated law course that deals with
              interdisciplinary topics such as law and arts subjects such as
              history, sociology, English, Economics etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
    </React.Fragment>
  )
}
