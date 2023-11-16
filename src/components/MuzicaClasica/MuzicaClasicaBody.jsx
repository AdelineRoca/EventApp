import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import havasi from "./../../media/images/Banners/Havasi.png";
import schoenbrunnpalace from "./../../media/images/Banners/Schoenbrunn.png";
import enniom from "./../../media/images/Banners/EnnioM.png";
import { Link } from "react-router-dom";

function MuzicaClasicaBodyCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={havasi}
        style={{ height: "200px" }}
        className="mb-3 mt-2"
      />
      <Card.Body>
        <Card.Title>HAVASI Symphonic Concert Show</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              18 Noiembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              19:30
            </Card.Text>
            <Card.Text>
              <ImLocation /> BT Arena, Cluj-Napoca{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link to="/havasi" style={{ textDecoration: "none", color: "black" }}>
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={schoenbrunnpalace}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>SCHOENBRUNN Palace Orchestra Vienna </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              23 Decembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              20:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Ateneul Roman, Bucuresti{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/schoenbrunn"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={enniom}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>ENNIO MORRICONE - Muzica de Oscar</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              20 Aprilie 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              20:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Ateneul Roman, Bucuresti{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/enniomorricone"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default MuzicaClasicaBodyCard;
