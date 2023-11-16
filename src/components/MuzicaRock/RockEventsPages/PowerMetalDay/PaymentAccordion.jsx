import Accordion from "react-bootstrap/Accordion";
import PaymentForm from "./PaymentForm";

function PaymentAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Plata cu cardul</Accordion.Header>
        <Accordion.Body>
          <PaymentForm></PaymentForm>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PaymentAccordion;
