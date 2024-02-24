/** @format */

import React from "react";
import Hero from "../../components/home/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <section className="hero-section">
          <Hero />
        </section>

              <section className="sub-hero-section">
                  <Link to="/contact">
                      go to contact page
                  </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
