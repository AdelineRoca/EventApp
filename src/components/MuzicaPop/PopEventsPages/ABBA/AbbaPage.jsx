import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import abba from "../../../../media/images/Banners/abba.png";
import PopUpSalaPalatului from "../../../ModalsSaliEvenimente/SalaPalatului/SalaPalatului.jsx";
import ChooseTicket from "./ChooseTicket.js";
import Basket from "./Basket.js";
import "./AbbaPage.css";
import tickets from "./Tickets.js";
import { useState } from "react";
import background from "./../../../../media/images/BK/Concert19.jpg";

function AbbaEvent() {
  const { products } = tickets;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div
      className="AbbaEvent"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        width: "100vw",
        height: "65vw",
        marginTop: "-42px",
      }}
    >
      <Card
        className="row d-flex justify-content-center mx-auto mb-5 mt-5"
        style={{ width: "50rem", border: "0" }}
      >
        <Card.Img
          variant="top"
          src={abba}
          style={{ height: "200px" }}
          className="mb-3 mt-2"
        />
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "50px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            The Show - ABBA Tribute Band
          </Card.Title>
          <hr
            style={{
              borderColor: "grey",
            }}
          />
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text style={{ textAlign: "center" }}>
                <p>
                  <BsCalendarCheck class="me-2" />
                  28 Aprilie 2024
                  <AiOutlineClockCircle
                    class="me-2"
                    style={{ marginLeft: "3rem" }}
                  />
                  20:30 CET
                </p>
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "25px",
                  marginTop: "25px",
                  textAlign: "center",
                }}
              >
                <ImLocation /> Papp Laszlo Budapest Sportarena, Budapesta,
                Ungaria <PopUpSalaPalatului></PopUpSalaPalatului>
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>

          <div className="row">
            <ChooseTicket onAdd={onAdd} products={products}></ChooseTicket>
            <Basket
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
            ></Basket>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AbbaEvent;
