import React from "react";
import StandUpComedyCard from "./StandUpComedyBody";
import background from "./../../media/images/BK/comedy.jpg";

const StandUpComedy = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "98%",
          width: "100vw",
          height: "65vw",
        }}
      >
        <h1 className="row d-flex justify-content-center text-white">
          <p style={{ height: "25px" }}></p>Stand Up Comedy
        </h1>
        <StandUpComedyCard></StandUpComedyCard>
      </div>
    </>
  );
};

export default StandUpComedy;
