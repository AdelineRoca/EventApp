// import Carousel from "react-bootstrap";
// import { ExampleCarouselImageOne } from "";
// import { ExampleCarouselImageTwo } from "";
// import { ExampleCarouselImageThree } from "";

import { Carousel } from "react-bootstrap";
import rock from "./../../media/images/Concert Muzica Rock_New.jpg";
import stbj from "./../../media/images/STBJ_New.jpg";
import coldplay from "./../../media/images/Coldplay_New.jpg";
import muzicaclasica from "./../../media/images/Concert Muzica Clasica_New.jpg";
import jamesblunt from "./../../media/images/James Blunt_New.jpg";
import edsheeran from "./../../media/images/Ed Sheeran_New.jpg";
import hiphop from "./../../media/images/Hip Hip_New.jpg";
import reggae from "./../../media/images/Reggae_New.jpg";
import blues from "./../../media/images/Blues_New.jpg";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img src={blues} text="Blues" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={edsheeran} text="Ed Sheeran" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={coldplay} text="Coldplay" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={rock} text="Bryan Adams" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={muzicaclasica} text="Muzica Clasica" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={jamesblunt} text="James Blunt" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={hiphop} text="Hip Hop" />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={reggae} text="Reggae" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
