import React from "react";

const About = () => {
  return (
    <section class="page-section bg-primary" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">We've got what you need!</h2>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4 fs-5">
            At CasaDecor  , we're on a mission to elevate your home's style and comfort. Our commitment to quality craftsmanship and affordability means you can create a uniquely beautiful living space. Welcome to CasaDecor, where your home reflects your personality.
            </p>
            <a class="btn btn-light btn-xl" href="#services">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
