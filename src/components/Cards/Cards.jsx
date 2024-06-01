/** @format */

import React from "react";
import Cardsx from "../../components/Cards/Card";
import pix from "../../assets/images/pix.png";

function Arrays() {
  const cards = [
    {
      background: "red",
      image: pix,
      heading: "Joseph",
      title: "Accountant",
      button: "",
      counter: "",
    },

    {
      background: "blue",
      image: pix,
      heading: "Joseph",
      title: "Accountant",
      button: "",
      counter: "",
    },

    {
      background: "gold",
      image: pix,
      heading: "Joseph",
      title: "Accountant",
      button: "",
      counter: "",
    },
  ];

  return (
    <>
      <div
        className="cards-container "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="cards-arrays">
            <Cardsx
              background={card.background}
              image={card.image}
              heading={card.heading}
              title={card.title}
              button={card.button}
              counter={card.counter}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Arrays;
