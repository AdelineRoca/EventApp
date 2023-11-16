import React from "react";
import MuzicaClasicaBodyCard from "./MuzicaClasicaBody.jsx";
import background from "./../../media/images/BK/Concert6.jpg";

const MuzicaClasica = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "160%",
          width: "100vw",
          height: "105vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Muzica Clasica
        </h1>
        <MuzicaClasicaBodyCard></MuzicaClasicaBodyCard>
      </div>
    </>
  );
};

export default MuzicaClasica;
