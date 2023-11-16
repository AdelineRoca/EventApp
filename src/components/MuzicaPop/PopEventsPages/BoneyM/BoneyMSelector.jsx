import React from "react";
import Form from "react-bootstrap/Form";

function BoneyMSelector() {
  return (
    <Form.Select aria-label="Default select example" style={{ width: "250px" }}>
      <option>Alege categoria</option>
      <option value="1">VIP</option>
      <option value="2">Categoria 1</option>
      <option value="3">Categoria 2</option>
      <option value="2">Categoria 3</option>
      <option value="3">Categoria 4</option>
    </Form.Select>
  );
}

export default BoneyMSelector;
