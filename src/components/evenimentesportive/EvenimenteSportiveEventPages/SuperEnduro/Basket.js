import React from "react";
import "./SuperEnduroPage.css";
import PaymentPopUp from "./PaymentPopUp.jsx";
import { Link } from "react-router-dom";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.19;
  const shippingPrice = itemsPrice > 250 ? 0 : 25;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-5">
      <h2 style={{ textAlign: "center" }}>Cosul Tau</h2>
      <hr></hr>
      <div>{cartItems.length === 0 && <div> Cosul tau este gol</div>} </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-4"> {item.name}</div>
          <div className="col-3">
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
          <div className="col-5 text-right">
            {item.qty} x {item.price.toFixed(2)} RON
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-4">Cost Produs</div>
            <div className="col-4 text-right">{itemsPrice.toFixed(2)} RON</div>
          </div>
          <div className="row">
            <div className="col-4">TVA</div>
            <div className="col-4 text-right">{taxPrice.toFixed(2)} RON</div>
          </div>
          <div className="row">
            <div className="col-4">Transport</div>
            <div className="col-4 text-right">
              {shippingPrice.toFixed(2)} RON
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-5">
              <strong>Total</strong>
            </div>
            <div className="col-5 text-right">
              <strong>{totalPrice.toFixed(2)} RON</strong>
            </div>
          </div>
          <div className="row">
            <PaymentPopUp></PaymentPopUp>
          </div>
        </>
      )}
    </aside>
  );
}
