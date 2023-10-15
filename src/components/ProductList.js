// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import {database } from "./firebase.js";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = database.ref("products");

    productsRef.on("value", (snapshot) => {
      const productsData = snapshot.val();
      if (productsData) {
        const productList = Object.values(productsData);
        setProducts(productList);
      }
    });

    return () => {
      productsRef.off("value");
    };
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
