import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Find everything you need in one place. From finding ready-to-ship
              products or a partner to customize the product you want, all the
              way through to ensuring quality and shipping your order to its
              final destination.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          {/* <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
