/** @format */

import React, { useState } from "react";

const Counter = () => {
  const [read, setRead] = useState(0);
  return (
    <>
      <div className="counter-container ">
        <h2> this is a count </h2>

        <button onClick={() => setRead((read) => read + 1)}>
          click here to count
        </button>

        <p> the counted number is {read} </p>

        <h4> this section shows how many times you have cicked the button </h4>
        <p> you have clicked {read} times </p>
      </div>
    </>
  );
};

export default Counter;
