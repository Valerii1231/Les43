
import React, { useState } from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({ name: "", price: "", id: 3 });
  const [classOnName, setClassOnName] = useState("");
  const [classOnPrice, setClassOnPrice] = useState("");

  const changeName = (e) => {
    setNewProducts((prev) => ({ ...prev, name: e.target.value }));
  };

  const changePrice = (e) => {
    setNewProducts((prev) => ({ ...prev, price: e.target.value }));
  };

  const addProducts = () => {
    let key = Math.random();
    let validName = newProducts.name.split("");

    if (newProducts.name.trim().length > 1 && newProducts.price > 0 ) {
      setProducts((prev) => [...prev, newProducts]);
      setNewProducts({ name: "", price: "" });
      setClassOnName("");
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };
 
  const validateName = () => {
    newProducts.name.trim().length > 1 ? setClassOnName("") : setClassOnName("invalid");
  };

  const validatePrice = () => {
    newProducts.price > 0 ? setClassOnPrice("") : setClassOnPrice("invalid");
  };

  return (
    <div className="wrapper">
      <Add
        chName={changeName}
        chPrice={changePrice}
        adProducts={addProducts}
        val={newProducts}
        valName={validateName}
        clName={classOnName}
        valPrice={validatePrice}
        clPrice={classOnPrice}
      />
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;