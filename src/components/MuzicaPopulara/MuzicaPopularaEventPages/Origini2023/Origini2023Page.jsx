import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import origini from "../../../../media/images/Banners/laut.png";
import PopUpSalaPalatului from "../../../ModalsSaliEvenimente/SalaPalatului/SalaPalatului.jsx";
import ChooseTicket from "./ChooseTicket.js";
import Basket from "./Basket.js";
import "./Origini2023Page.css";
import tickets from "./Tickets.js";
import { useState } from "react";
import background from "./../../../../media/images/BK/Concert15.jpg";

function OriginiEvent() {
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
      className="OriginiEvent"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        width: "100vw",
        height: "70vw",
        marginTop: "-42px",
      }}
    >
      <Card
        className="row d-flex justify-content-center mx-auto mb-5 mt-5"
        style={{ width: "50rem", border: "0" }}
      >
        <Card.Img
          variant="top"
          src={origini}
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
            Origini 2023 - Concert Muzica Populara
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
                  12 Octombrie 2023
                  <AiOutlineClockCircle
                    class="me-2"
                    style={{ marginLeft: "3rem" }}
                  />
                  19:00
                </p>
              </Card.Text>
              <Card.Text
                style={{
                  fontSize: "25px",
                  marginTop: "25px",
                  textAlign: "center",
                }}
              >
                <ImLocation /> Arenele Romane, Bucuresti{" "}
                <PopUpSalaPalatului></PopUpSalaPalatului>
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

export default OriginiEvent;
