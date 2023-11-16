import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import fricadeumbrasa from "./../../media/images/Banners/umbra.png";
import greuceanu from "./../../media/images/Banners/greuceanu.png";

function SpectacolePentruCopiiCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={fricadeumbrasa}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>Frica de Umbra sa</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              10 Decembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              16:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Teatrul de Păpuși „Prichindel” Alba Iulia - Sala 67
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          Cumpara Bilete
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={greuceanu}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>Greuceanu - Teatru de Papusi</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              22 Decembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              17:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Teatrul de Păpuși Iasi
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          Cumpara Bilete
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default SpectacolePentruCopiiCard;
