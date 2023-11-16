import React, { useState } from "react";
import { Card } from "react-bootstrap";

function PaymentForm() {
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setPayment({ issuer });
    }
  }
  function onInputFocus({ target }) {}
  function onInputUpdate({ target }) {
    console.log({ [target.name]: target.value });
  }
  function handleSubmit(e) {}
  const { name, number, expiry, cvc, focused, issuer } = payment;
  return (
    <div key="Payment">
      <div>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-4">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Numarul Cardului"
              pattern="[\d| ]{16,22}"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Numele Detinatorului"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Data Expirare Card"
                pattern="\d\d/\d\d"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
        </form>
      </div>
    </div>
  );
}
export default PaymentForm;
