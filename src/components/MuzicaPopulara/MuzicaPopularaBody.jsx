import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import laut from "./../../media/images/Banners/laut.png";
import andra from "./../../media/images/Banners/andra.png";
import { Link } from "react-router-dom";

function MuzicaPopularaCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={laut}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>ORIGINI 2023 - Concert Muzica Populara</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              12 Octombrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              19:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Arenele Romane, Bucuresti
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/origini"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={andra}
        style={{ height: "200px" }}
        className="mb-3 mt-2"
      />
      <Card.Body>
        <Card.Title>ANDRA si Fratii Advanov - Traditional</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />1 Decembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              19:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Sala Polivalenta BT Arena, Cluj-Napoca{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/andratraditional"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default MuzicaPopularaCard;
