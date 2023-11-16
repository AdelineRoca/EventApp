import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import Homepage from "../homepage/Homepage";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MyEvent.ro</Navbar.Brand>
          {/* 
          <Nav.Item>
            <Link to="/">MyEvent.ro</Link>
          </Nav.Item> */}

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Concerte" id="basic-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicapop"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Pop{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicarock"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Rock
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicabluescountryfolk"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Blues, Country, Folk
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicajazz"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Jazz
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicareggaesoulhiphop"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Reggae, Soul, Hip Hop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/muzicaclasica"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Muzica Clasica{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/muzicapopulara"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Muzica Populara
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Evenimente Culturale" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="/teatru"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Teatru
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <Link
                  to="/operaopereta"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Opera, Opereta{" "}
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Alte Evenimente" id="basic-nav-dropdown">
              <NavDropdown.Item>
                {" "}
                <Link
                  to="spectacolepentrucopii"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Spectacole pentru Copii{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/standupcomedy">
                <Link
                  to="/standupcomedy"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Stand up Comedy
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="expozitiivernisaje"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Expozitii, Vernisaje{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="evenimentesportive"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Evenimente Sportive
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            {/* SearchBar
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link>
//               {" "}
//               <Link to={"/"}>Home</Link>
//             </Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
