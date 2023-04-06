import React from "react";
import ProdPanie from "./ProdPanie";
import { Table } from "react-bootstrap";

const Panier = () => {
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
        <ProdPanie />
      </tbody>
    </Table>
  );
};

export default Panier;
