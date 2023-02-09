import React from "react";
import "./style.scss";

const CountSection = ({ handleState, Numberofpeople }) => {
  const handleDecrement = (e) => {
    e.preventDefault();
    Numberofpeople > 1 && handleState("Number of people", Numberofpeople - 1);
  };
  const handleIncrement = (e) => {
    e.preventDefault();
    Numberofpeople < 3 && handleState("Number of people", Numberofpeople + 1);
  };

  return (
    <div className="countSection">
      <div className="title">Number of people</div>
      <div className="container">
        <button className="decr" onClick={(e) => handleDecrement(e)}>
          -
        </button>
        <p className="number">{Numberofpeople}</p>
        <button className="incr" onClick={(e) => handleIncrement(e)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CountSection;
