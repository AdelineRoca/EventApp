import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img className="small" src={product.image} alt={product.name} />
      <h3 style={{ fontSize: "20px" }}>{product.name}</h3>
      <div style={{ fontSize: "18px", marginBottom: "6px" }}>
        {product.price} RON
      </div>
      <div
        style={{
          fontSize: "15px",
        }}
      >
        <button
          onClick={() => onAdd(product)}
          type="button"
          class="btn btn-info"
          style={{ marginLeft: "5px" }}
        >
          {" "}
          Adauga in Cos
        </button>
      </div>
    </div>
  );
}
