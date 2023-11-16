import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import baniciu from "./../../media/images/Banners/baniciu.png";
import lorenam from "./../../media/images/Banners/loreenam.png";
import { Link } from "react-router-dom";

function MuzicaBluesCountryFolkCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={baniciu}
        style={{ height: "200px" }}
        className="mb-3 mt-2"
      />
      <Card.Body>
        <Card.Title>Mircea Baniciu - 50 de ani de cariera</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              22 Noiembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              18:30
            </Card.Text>
            <Card.Text>
              <ImLocation /> Teatru National I.L.Caragiale, Bucuresti{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/mirceabaniciu"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={lorenam}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>Loreena McKennitt</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              24 Martie 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              20:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> MVM Dome, Budapesta, Ungaria{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/loreenamckennitt"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default MuzicaBluesCountryFolkCard;
