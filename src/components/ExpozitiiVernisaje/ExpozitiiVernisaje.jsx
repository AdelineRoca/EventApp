import React from "react";
import ExpozitiiVernisajeCard from "./ExpozitiiVernisajeBody.jsx";
import background from "./../../media/images/BK/teatru2.jpg";

const ExpozitiiVernisaje = () => {
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
          <p style={{ height: "25px" }}></p>Opera si Opereta
        </h1>
        <ExpozitiiVernisajeCard></ExpozitiiVernisajeCard>
      </div>
    </>
  );
};

export default ExpozitiiVernisaje;
