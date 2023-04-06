import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ propsproduits, del }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {propsproduits.map((prod) => (
        <ProductCard propsprod={prod} key={prod.id} del={del} />
      ))}
    </div>
  );
};

export default ProductList;
