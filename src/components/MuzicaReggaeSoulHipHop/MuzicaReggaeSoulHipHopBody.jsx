import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import reggae from "./../../media/images/Banners/reggae.png";
import hiphop from "./../../media/images/Banners/hihphop.png";
import { Link } from "react-router-dom";

function MuzicaReggaeSoulHipHopCard() {
  return (
    <Card
      className="row d-flex justify-content-center mx-auto mb-5 mt-5"
      style={{ width: "50rem", border: "0" }}
    >
      <Card.Img
        variant="top"
        src={reggae}
        style={{ height: "200px" }}
        className="mb-3 mt-2"
      />
      <Card.Body>
        <Card.Title>LIGHTNING REGGAE FESTIVAL</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />6 mai 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              18:00
            </Card.Text>
            <Card.Text>
              <ImLocation /> The Green Village, Le Morne, Mauritius{" "}
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/lightningreggaefestival"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>

      <Card.Img
        variant="top"
        src={hiphop}
        style={{ height: "200px" }}
        className="mb-3 mt-5"
      />
      <Card.Body>
        <Card.Title>HIP HOP 50 Live</Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              <BsCalendarCheck class="me-2" />
              11 August 2024{" "}
            </Card.Text>
            <Card.Text>
              <AiOutlineClockCircle class="me-2" />
              16:30
            </Card.Text>
            <Card.Text>
              <ImLocation /> Yankee Stadium, New York, SUA
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="outline-warning" className="ms-2 mt-2">
          <Link
            to="/hiphop50live"
            style={{ textDecoration: "none", color: "black" }}
          >
            Cumpara Bilete{" "}
          </Link>
        </Button>{" "}
      </Card.Body>
    </Card>
  );
}

export default MuzicaReggaeSoulHipHopCard;
