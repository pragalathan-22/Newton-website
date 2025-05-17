import React from "react";
import JsonData from "../data/data.json";

export const Products = () => {
  const products = JsonData.Products || [];

  return (
    <section id="products" style={{ padding: "50px 20px" }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} id={product.id} style={{ marginTop: "40px" }}>
          <h3>{product.title}</h3>
          {product.subItems && (
            <ul>
              {product.subItems.map(sub => (
                <li key={sub.id} id={sub.id}>
                  <h4>{sub.title}</h4>
                  <p>Description or content about {sub.title} here...</p>
                </li>
              ))}
            </ul>
          )}
          {!product.subItems && (
            <p>Description or content about {product.title} here...</p>
          )}
        </div>
      ))}
    </section>
  );
};
