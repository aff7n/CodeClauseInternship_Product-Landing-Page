import React from "react";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid flex-column">
        <a className="navbar-brand fs-2" href="#">
          Casa<span className="fs-1" style={{ color: "#dbb481", textDecoration:"underline"}}>Decor</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
