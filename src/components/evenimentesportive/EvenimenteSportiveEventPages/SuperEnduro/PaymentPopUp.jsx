import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CheckoutForm from "./CheckoutForm";

function PaymentPopUp() {
  const [show, setShow] = useState(false);

  return (
    <>
      {" "}
      <p></p>
      <Button
        type="button"
        className="btn btn-warning"
        variant="primary"
        onClick={() => setShow(true)}
      >
        {" "}
        Finalizeaza Comanda
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
            style={{ fontSize: "30px", marginLeft: "100px" }}
          >
            Finalizarea Comenzii
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <CheckoutForm></CheckoutForm>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentPopUp;
