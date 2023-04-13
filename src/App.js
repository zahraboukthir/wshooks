import "./App.css";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
import Panier from "./Components/Panier";
import { useState } from "react";
import { products } from "./data";

import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";

import { Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
function App() {
  const [produits, setProduits] = useState(products);
  const [cart, setcart] = useState([]);
  const [totalPanier, settotalPanier] = useState(0);
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
  // add to cart
  const handleAddToCart = (prodA) => {
    const findedProd = cart.find((el) => el.id == prodA.id);
    if (findedProd) {
      return alert("prod deja ajouté");
    }
    // console.log(prodA);
    const prod = {
      ...prodA,
      QtS: prodA.QtS - 1,
      QtA: 1,
      totalPrice: Number(prodA.price),
    };
    setcart([...cart, prod]);
    setProduits(
      produits.map((el) =>
        el.id == prodA.id ? { ...el, QtS: el.QtS - 1 } : el
      )
    );
    settotalPanier(totalPanier + Number(prodA.price));
  };
  // add quantity
  const handleIncrement = (id, price) => {
    setcart(
      cart.map((el) =>
        el.id == id
          ? {
              ...el,
              QtA: el.QtA + 1,
              QtS: el.QtS - 1,
              totalPrice: el.totalPrice + Number(price),
            }
          : el
      )
    );
    settotalPanier(totalPanier + price);
    setProduits(
      produits.map((el) => (el.id == id ? { ...el, QtS: el.QtS - 1 } : el))
    );
  };
  // decrement
  const handleDecrement = (id, price, qta) => {
    setcart(
      cart.map((el) =>
        el.id == id
          ? {
              ...el,
              QtA: el.QtA > 1 ? el.QtA - 1 : el.QtA,
              QtS: el.QtA > 1 ? el.QtS + 1 : el.QtS,
              totalPrice:
                el.QtA > 1 ? el.totalPrice - Number(price) : el.totalPrice,
            }
          : el
      )
    );
    settotalPanier(qta > 1 ? totalPanier - price : totalPanier);
    setProduits(
      produits.map((el) =>
        el.id == id ? { ...el, QtS: qta > 1 ? el.QtS + 1 : el.QtS } : el
      )
    );
  };
  // delete prod from panier
  const delProdPanier = (id, qta, pricetot) => {
    setcart(cart.filter((el) => el.id != id));
    setProduits(
      produits.map((el) => (el.id == id ? { ...el, QtS: el.QtS + qta } : el))
    );
    settotalPanier(totalPanier - Number(pricetot));
  };
  // like
  const handleLike = (id) => {
    setProduits(
      produits.map((el) =>
        el.id == id
          ? {
              ...el,
              rating: { ...el.rating, count: Number(el.rating.count) + 1 },
            }
          : el
      )
    );
  };
  const [show, setshow] = useState(false);
  // search
  // search by Name
  const [searchBYName, setsearchBYName] = useState("");
  const handleSbName = (name) => {
    setsearchBYName(name);
  };
  const handleSbChar = (char) => {
    setsearchBYName(char);
  };
  // search by category
  const [searchByCategory, setsearchByCategory] = useState("all");
  const handleCategory = (serchedCat) => {
    setsearchByCategory(serchedCat);
  };
  // search by rate
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };
  return (
    <div className="container">
      <NavigationBar
        handleReset={handleReset}
        handleCategory={handleCategory}
        handleSbName={handleSbName}
        handleSbChar={handleSbChar}
        handleRating={handleRating}
        rating={rating}
      />

      <Routes>
        <Route
          path="/add"
          element={<AddProduct handleAddprops={handleAdd} />}
        />
        <Route
          path="/"
          element={
            <ProductList
              propsproduits={
                searchByCategory == "all"
                  ? produits.filter(
                      (el) =>
                        el.title
                          .toLowerCase()
                          .includes(searchBYName.toLowerCase()) &&
                        parseInt(el.rating.rate) >= rating
                    )
                  : produits.filter(
                      (el) =>
                        el.title
                          .toLowerCase()
                          .includes(searchBYName.toLowerCase()) &&
                        el.category == searchByCategory &&
                        parseInt(el.rating.rate) >= rating
                    )
              }
              del={handleDelete}
              handleAddToCart={handleAddToCart}
              handleLike={handleLike}
            />
          }
        />
        <Route
          path="/panier"
          element={
            <Panier
              cart={cart}
              totalPanier={totalPanier}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              delProdPanier={delProdPanier}
            />
          }
        />
        <Route
          path="/details/:idprod"
          element={
            <ProductDetails
              produits={produits}
              handleAddToCart={handleAddToCart}
              handleLike={handleLike}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
