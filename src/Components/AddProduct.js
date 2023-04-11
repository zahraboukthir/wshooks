import React from "react";
import { useState } from "react";

const AddProduct = ({ handleAddprops }) => {
  // get data from inputs
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setprice] = useState(0);
  const [qteS, setqteS] = useState(0);
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  // submit
  const add = (e) => {
    e.preventDefault();
    const newProd = { title, image, price, QtS: qteS, category, description };
    handleAddprops(newProd);
    setTitle("");
    setImage("");
    setprice(0);
    setcategory("");
    setdescription("");
    setqteS(0);
  };
  return (
    <>
      <form
        onSubmit={add}
        style={{
          display: "flex",
          margin: "12px auto ",
          justifyContent: "space-around",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Product Image</label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Product Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            value={qteS}
            onChange={(e) => setqteS(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label htmlFor="">Product descreption </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <button>submit</button>
      </form>
    </>
  );
};

export default AddProduct;
