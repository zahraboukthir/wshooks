import "./App.css";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
import Panier from "./Components/Panier";
import { useState } from "react";
import { products } from "./data";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [produits, setProduits] = useState(products);
  // add new Product
  const handleAdd = (newProd) => {
    const prod = {
      ...newProd,
      id: Math.random(),
      rating: {
        rate: 0,
        count: 0,
      },
    };
    setProduits([prod, ...produits]);
  };
  // delete prod
  const handleDelete = (iddelprod) => {
    setProduits(produits.filter((el) => el.id != iddelprod));
  };
  return (
    <div className="App">
      <AddProduct handleAddprops={handleAdd} />
      <ProductList propsproduits={produits} del={handleDelete} />
      <Panier />
    </div>
  );
}

export default App;
