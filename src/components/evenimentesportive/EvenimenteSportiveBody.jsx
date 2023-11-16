import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import hockey from "./../../media/images/Banners/Hockey.png";
import superenduro from "./../../media/images/Banners/superenduro.png";
import { Link } from "react-router-dom";

function EvenimenteSportiveCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={hockey}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>2024 IIHF WM20 Division IA</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              10 Decembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              19:30
            </Card.Text>
            <Card.Text>
              <ImLocation /> Tuskecsarnok, Budapesta
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link to="/hockey" style={{ textDecoration: "none", color: "black" }}>
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={superenduro}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>SuperEnduro GP of Hungary</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />3 Februarie 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              16:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> MVM Dome, Budapest
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/superenduro"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default EvenimenteSportiveCard;
