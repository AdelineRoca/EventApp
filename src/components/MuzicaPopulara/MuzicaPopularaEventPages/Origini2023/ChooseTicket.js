import React from "react";
import "./Origini2023Page.css";
import Product from "./Product";

export default function TicketType(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-6">
      <h2>Categorii Bilete</h2>
      <hr></hr>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
