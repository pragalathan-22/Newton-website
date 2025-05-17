import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";

const ProductDetail = () => {
  const { productId } = useParams();

  // Helper function to find product or subproduct by id
  const findProduct = (id) => {
    const products = JsonData.Products || [];

    for (const product of products) {
      if (product.id === id) return product;
      if (product.subItems) {
        const sub = product.subItems.find((sub) => sub.id === id);
        if (sub) return sub;
      }
    }
    return null;
  };

  const product = findProduct(productId);

  if (!product) {
    return <div style={{ padding: "20px" }}>Product not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>This is the detail page for <b>{product.title}</b>.</p>
      {/* You can add more product info here (images, descriptions, etc.) */}
    </div>
  );
};

export default ProductDetail;
