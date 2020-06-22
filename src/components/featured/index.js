import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";



const Featured = () => {
  return (
    <div>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Hollywood Vampires</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
