import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ propsproduits, handleLike, del, handleAddToCart }) => {
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
        <ProductCard
          handleAddToCart={handleAddToCart}
          propsprod={prod}
          key={prod.id}
          del={del}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
};

export default ProductList;
