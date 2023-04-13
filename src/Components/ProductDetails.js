import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
const ProductDetails = ({ produits, handleAddToCart, handleLike }) => {
  const { idprod } = useParams();
  const prod = produits.find((el) => el.id == idprod);
  const [like, setlike] = useState(false);
  const likeProd = () => {
    setlike(true);
    handleLike(prod.id);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Rating initialValue={parseInt(prod.rating.rate)} readonly />
        <Card.Text>{prod.category}</Card.Text>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>{prod.description}</Card.Text>
        <Card.Text>price : {prod.price} dt</Card.Text>
        <Card.Text>Quantite en stock {prod.QtS}</Card.Text>
        <Button onClick={() => handleAddToCart(prod)} variant="primary">
          Add to Cart
        </Button>
        <Link to="/">
          <Button variant="primary">Go Back</Button>
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <AiTwotoneLike onClick={likeProd} className={like ? "like" : null} />

          <p>{prod.rating.count}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
