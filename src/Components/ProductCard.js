import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({
  propsprod: { title, price, description, category, image, rating, QtS, id },
  del,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>rate</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>price : {price} dt</Card.Text>
        <Card.Text>Quantite en stock {QtS}</Card.Text>
        <Button variant="primary">Edit </Button>
        <Button onClick={() => del(id)} variant="primary">
          X
        </Button>
        <Button variant="primary">Like</Button>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
