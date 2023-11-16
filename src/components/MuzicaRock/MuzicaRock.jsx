import React from "react";
import MuzicaRockBodyCard from "./MuzicaRockBodyCard.jsx";
import background from "./../../media/images/BK/Concert7.jpg";

const MuzicaRock = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "210%",
          width: "100vw",
          height: "140vw",
        }}
      >
        <h1
          className="row d-flex justify-content-center text-white"
          style={{ fontSize: "35px" }}
        >
          <p style={{ height: "25px" }}></p>
          Muzica Rock
        </h1>
        <MuzicaRockBodyCard></MuzicaRockBodyCard>
      </div>
    </>
  );
};

export default MuzicaRock;
