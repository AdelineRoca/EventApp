import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import location from "./../../media/icons/Location.png";
import ennio from "./../../media/images/TopEventsImages/ocyb_210_280.webp";
import baniciu from "./../../media/images/TopEventsImages/Baniciu.webp";
import edSheeran from "./../../media/images/TopEventsImages/EdSheeran.webp";
import stbj from "./../../media/images/TopEventsImages/STBJ.webp";
import schoenbrunn from "./../../media/images/TopEventsImages/Schoenbrunn.webp";
import mariza from "./../../media/images/TopEventsImages/Mariza.webp";
import nout from "./../../media/images/TopEventsImages/Nout.webp";
import ara from "./../../media/images/TopEventsImages/Ara.webp";
import nikos from "./../../media/images/TopEventsImages/Nikos.webp";
import sonata from "./../../media/images/TopEventsImages/Sonata de Toamna.webp";
import nora from "./../../media/images/TopEventsImages/Nora.webp";
import superenduro from "./../../media/images/TopEventsImages/superenduro.jpg";

function TopEvents() {
  return (
    <CardGroup class="row d-flex justify-content-center mt-4">
      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/enniomorricone"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={ennio} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Ennio Morricone
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Ateneul Roman, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/mirceabaniciu"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={baniciu}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Mircea Baniciu
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Teatrul National, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/edsheeran"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={edSheeran}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Eh Sheeran</Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Arena Nationala, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/stbj" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={stbj} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Stefan Banica Jr.
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Sala Palatului, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/schoenbrunn"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={schoenbrunn}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Schoenbrunn</Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Ateneul Roman, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/mariza" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={mariza}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Mariza</Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Sala Palatului, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/nout" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={nout} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>NOUT</Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Academia de Muzica, <br />
              Cluj-Napoca
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/ara" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={ara} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              ARA Malikian
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Sala Palatului, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/nikos" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={nikos} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Nikos Vertis
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Sala Palatului, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/sonatadetoamna"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={sonata}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Sonata de Toamna
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Teatrul Nottara, Bucuresti
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link to="/nora" style={{ textDecoration: "none", color: "#1f3d7a" }}>
          <Card.Img style={{ marginTop: "0.8rem" }} variant="top" src={nora} />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>NORA II</Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              Teatrul Andrei Muresanu, <br />
              Sfantu Gheorghe
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      <Card
        style={{
          width: "14rem",
          height: "26.2rem",
          marginTop: "1rem",
          marginBottom: "2rem",
          backgroundColor: "#f9f1fe",
        }}
      >
        <Link
          to="/superenduro"
          style={{ textDecoration: "none", color: "#1f3d7a" }}
        >
          <Card.Img
            style={{ marginTop: "0.8rem" }}
            variant="top"
            src={superenduro}
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              SuperEnduro GP of Hungary
            </Card.Title>
            <img
              style={{
                height: "1.8rem",
                marginTop: "0.5rem",
                marginLeft: "0.1rem",
              }}
              src={location}
            />
            <Card.Text
              style={{
                textAlign: "left",
                marginLeft: "2rem",
                marginTop: "-2.1rem",
              }}
            >
              MVM Dome <br />
              Budapesta
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </CardGroup>
  );
}

export default TopEvents;
