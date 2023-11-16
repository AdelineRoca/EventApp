import React from "react";
import { Link } from "react-router-dom";
import "./TheDeadDaisiesPage.css";

export default function CartHeaderBoneyM(props) {
  return (
    <header className="row block center">
      <div>
        <Link to="">
          <h2>Cart</h2>
        </Link>
      </div>
      <div></div>
    </header>
  );
}
