import React from "react";
import TeatruCard from "./TeatruBody.jsx";
import background from "./../../media/images/BK/teatru4.jpg";

const Teatru = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "115%",
          width: "100vw",
          height: "140vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Spectacole de Teatru
        </h1>
        <TeatruCard></TeatruCard>
      </div>
    </>
  );
};

export default Teatru;
