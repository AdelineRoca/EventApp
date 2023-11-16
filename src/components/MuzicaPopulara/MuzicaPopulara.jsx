import React from "react";
import MuzicaPopularaCard from "./MuzicaPopularaBody.jsx";
import background from "./../../media/images/BK/Concert7.jpg";

const MuzicaPopulara = () => {
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
          <p style={{ height: "25px" }}></p>Muzica Populara
        </h1>
        <MuzicaPopularaCard></MuzicaPopularaCard>
      </div>
    </>
  );
};

export default MuzicaPopulara;
