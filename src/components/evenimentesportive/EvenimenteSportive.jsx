import React from "react";
import EvenimenteSportiveCard from "./EvenimenteSportiveBody";
import background from "./../../media/images/BK/santiagobernabeu.jpg";

const EvenimenteSportive = () => {
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
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Evenimente Sportive
        </h1>
        <EvenimenteSportiveCard></EvenimenteSportiveCard>
      </div>
    </>
  );
};

export default EvenimenteSportive;
