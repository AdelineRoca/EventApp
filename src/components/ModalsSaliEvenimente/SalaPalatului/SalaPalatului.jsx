import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import salapalatului from "./../../../media/sali/sala-palatului-plan-bun.jpg";

function PopUpSalaPalatului() {
  const [show, setShow] = useState(false);

  return (
    <>
      {" "}
      <p></p>
      <Button variant="primary" onClick={() => setShow(true)}>
        Vezi Planul Salii
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ fontSize: "35px", marginLeft: "135px" }}
          >
            Sala Palatului
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              variant="top"
              src={salapalatului}
              style={{ height: "550px" }}
              className="mb-3 mt-2"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpSalaPalatului;
