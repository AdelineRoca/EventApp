import React from "react";
import MuzicaBluesCountryFolkBodyCard from "./MuzicaBluesCountryFolkBodyCard";
import background from "./../../media/images/BK/Concert3.jpg";

const MuzicaBluesCountryFolk = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "160%",
          width: "100vw",
          height: "80vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Muzica Blues, Country si Folk
        </h1>
        <MuzicaBluesCountryFolkBodyCard></MuzicaBluesCountryFolkBodyCard>
      </div>
    </>
  );
};

export default MuzicaBluesCountryFolk;
