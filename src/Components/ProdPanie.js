import React from "react";

const ProdPanie = ({
  prod,
  delProdPanier,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <tr>
      <td>
        <img src={prod.image} alt="" width={"30px"} />
      </td>
      <td>{prod.title}</td>
      <td>{prod.price} dt</td>
      <td>
        <button
          onClick={() =>
            prod.QtS
              ? handleIncrement(prod.id, prod.price)
              : alert("stock insuffisant !!")
          }
        >
          +
        </button>{" "}
        <p>{prod.QtA}</p>{" "}
        <button onClick={() => handleDecrement(prod.id, prod.price, prod.QtA)}>
          -
        </button>
      </td>
      <td>{prod.totalPrice} dt</td>
      <td>
        {" "}
        <button
          onClick={() => delProdPanier(prod.id, prod.QtA, prod.totalPrice)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ProdPanie;
