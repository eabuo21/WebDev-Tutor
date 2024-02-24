/** @format */

import React, { useState } from "react";

const Card = ({ background, image, heading, title, button, counter }) => {
  const [count, setCount] = useState(0);

  return (
    <>
          <div className="card-container  " >
 
        <div
          className="background-container "
          style={{
              background: background,
              width: '100%',
              height: '50%',
              borderRadius: '20px',
              padding: '4px',
                 justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
          }}
        >
                  <img className="image-container" src={image} alt="image" style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
          }}/>
          <h3 className="heading-container "> {heading} </h3>
          <p className="title-container "> {title} </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="button-contener "
                  >
                      like
            {button}
          </button>
          <p className="counter-contaier ">
            {counter} {count} likes {" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
