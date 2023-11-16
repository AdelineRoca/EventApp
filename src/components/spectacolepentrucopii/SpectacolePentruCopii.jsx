import React from "react";
import SpectacolePentruCopiiCard from "./SpectacolePentruCopiiBody.jsx";
import background from "./../../media/images/BK/teatru2.jpg";

const SpectacolePentruCopii = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "50%",
          width: "100vw",
          height: "50vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Spectacole pentru Copii
        </h1>
        <SpectacolePentruCopiiCard></SpectacolePentruCopiiCard>
      </div>
    </>
  );
};

export default SpectacolePentruCopii;
