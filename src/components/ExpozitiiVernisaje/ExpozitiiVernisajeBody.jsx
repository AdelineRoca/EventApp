import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import expozitie from "./../../media/images/Banners/expozitie.png";

function ExpozitiiVernisajeCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={expozitie}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>Expoziţie inovativă cu bunuri restaurate</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              17 Noiembrie 2023{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              12:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> TNB - Muzeul Teatrului National
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

export default ExpozitiiVernisajeCard;
