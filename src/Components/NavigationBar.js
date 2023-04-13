import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavigationBar = ({
  handleSbName,
  handleSbChar,
  handleCategory,
  handleRating,
  rating,
  handleReset,
}) => {
  const [input, setinput] = useState("");
  const SerchByName = () => {
    handleSbName(input);
    setinput("");
  };
  return (
    <>
      {" "}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">
          <AiFillHome />
        </Link>
        <div>
          <span>Search by Name</span>
          <input
            value={input}
            type="text"
            onChange={(e) => setinput(e.target.value)}
          />
          <button onClick={SerchByName}>submit</button>
        </div>
        <div>
          <span>Search by Char</span>
          <input type="text" onChange={(e) => handleSbChar(e.target.value)} />
        </div>
        <Rating onClick={handleRating} initialValue={rating} />
        <button onClick={handleReset}>reset</button>
        <div>
          <select onChange={(e) => handleCategory(e.target.value)}>
            <option value="all">all</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <Link to="/panier">
          <AiOutlineShoppingCart />
        </Link>
      </div>
      <Link to="/add">Add New Product</Link>
    </>
  );
};

export default NavigationBar;
