/** @format */

import React from "react";
import Cards from "../../components/Cards/Cards";
import Hero from "../../components/home/Hero";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="main">
        <Cards />

              <button
                  style={{
                      background: 'red',
                      color: 'white',
                      padding: '4px',
                      width: 'auto',
                      borderRadius: '12px',

        }}
                  onClick={handleNavigation} className="navigation-back-button">
          previos page
        </button>
      </div>
    </>
  );
};

export default About;
