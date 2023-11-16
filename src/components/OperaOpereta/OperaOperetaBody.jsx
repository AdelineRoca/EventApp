import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import opera from "./../../media/images/Banners/opera.png";

function OperaOperetaCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={opera}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>ORCHESTRA SIMFONICA CROSSOVER 38 SAMURAI</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />6 Ianuarie 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              16:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> Sala Palatului, Bucuresti
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

export default OperaOperetaCard;
