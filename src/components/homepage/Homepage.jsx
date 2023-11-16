import React, { useEffect } from "react";
import { Container } from "./Homepage.style";
import useLog from "../../hooks/useLog";
import "./../../media/images/Concert Jazz.png";
import "./../../media/images/Concert Muzica Clasica.png";
import Slider from "../carousel/Carousel";
import TopEvents from "../TopEventsGroupCards/TopEvents.jsx";
import background from "./../../media/images/BK/Concert8.jpg";

const Homepage = () => {
  useLog("Salut", "err");
  return (
    <Container>
      <Slider></Slider>

      {/* Ending Card */}

      <div class="card text-center">
        <div class="card-header">MyEvent.ro</div>
        <div class="card-body">
          <h5 class="card-title">Locul distractiei tale</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer text-body-secondary"></div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100%",
          backgroundPositionY: "center",
          width: "100vw",
          height: "70vw",
        }}
      >
        <div class="text-center p-1 text-white">
          <h2 className="mt-4">Top Events</h2>
        </div>
        <TopEvents></TopEvents>
      </div>
    </Container>
  );
};

export default Homepage;
