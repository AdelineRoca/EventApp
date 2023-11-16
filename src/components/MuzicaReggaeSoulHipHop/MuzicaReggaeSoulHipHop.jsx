import React from "react";
import MuzicaReggaeSoulHipHopCard from "./MuzicaReggaeSoulHipHopBody.jsx";
import background from "./../../media/images/BK/Concert3.jpg";

const MuzicaReggaeSoulHipHop = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "120%",
          width: "100vw",
          height: "75vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Muzica Reggae, Soul, Hip-Hop
        </h1>
        <MuzicaReggaeSoulHipHopCard></MuzicaReggaeSoulHipHopCard>
      </div>
    </>
  );
};

export default MuzicaReggaeSoulHipHop;
