import React from "react";
import "./style.scss";

const CountSection = ({ handleCountPeople, Numberofpeople }) => {
  const handleDecrement = (e) => {
    e.preventDefault();
    if (Numberofpeople > 1) {
      handleCountPeople(Numberofpeople - 1);
    }
  };
  const handleIncrement = (e) => {
    e.preventDefault();
    if (Numberofpeople < 3) {
      handleCountPeople(Numberofpeople + 1);
    }
  };
  
  return (
    <div className="countSection">
      <div className="title">Number of people</div>
      <div className="count">
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
