import React from "react";
import ProdPanie from "./ProdPanie";
import { Table } from "react-bootstrap";

const Panier = ({
  cart,
  totalPanier,
  delProdPanier,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quanti Ach</th>
          <th>Price Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((el) => (
          <ProdPanie
            key={el.id}
            prod={el}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            delProdPanier={delProdPanier}
          />
        ))}
        <tr>
          <td>Total</td>
          <td>{totalPanier} dt</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Panier;
