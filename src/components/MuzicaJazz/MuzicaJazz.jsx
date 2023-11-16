import React from "react";
import MuzicaJazzCard from "./MuzicaJazzBody.jsx";
import background from "./../../media/images/BK/Concert2.jpg";

const MuzicaJazz = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100%",
          width: "100vw",
          height: "75vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-grey">
          <p style={{ height: "25px" }}></p>Muzica Jazz
        </h1>
        <MuzicaJazzCard></MuzicaJazzCard>
      </div>
    </>
  );
};

export default MuzicaJazz;
