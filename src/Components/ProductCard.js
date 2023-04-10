import React from "react";
import { useState } from "react";
import "./prod.css";
import { Button, Card } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
const ProductCard = ({ handleLike, propsprod, del, handleAddToCart }) => {
  const { title, price, description, category, image, rating, QtS, id } =
    propsprod;
  const [like, setlike] = useState(false);
  const likeProd = () => {
    setlike(true);
    handleLike(propsprod.id);
  };
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

        <Button onClick={() => handleAddToCart(propsprod)} variant="primary">
          Add to Cart
        </Button>
        <div>
          <AiTwotoneLike onClick={likeProd} className={like ? "like" : null} />

          <p>{rating.count}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
