import React from "react";
import Style from "./Subscribe.module.css";
import { LiaPaperPlane } from "react-icons/lia";
// import Image from "next/image";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Aboneaza-te la noutati</h2>
          <p>Fii la curent cu toate evenimentele din orasul tau!</p>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <LiaPaperPlane style={{ height: "10rem" }} />
          </div>
        </div>
        <div className={Style.subscribe_box_right}></div>
      </div>
    </div>
  );
};

export default Subscribe;
