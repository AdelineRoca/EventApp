import React from "react";
import MuzicaPopBodyCard from "./MuzicaPopBodyCard.jsx";
import background from "./../../media/images/BK/Concert9.jpg";

const MuzicaPop = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "190%",
          width: "100vw",
          height: "265vw",
        }}
      >
        <h1
          className="row d-flex justify-content-center text-white"
          style={{ fontSize: "35px" }}
        >
          <p style={{ height: "25px" }}></p>Muzica Pop
        </h1>
        <MuzicaPopBodyCard></MuzicaPopBodyCard>
      </div>
    </>
  );
};

export default MuzicaPop;
