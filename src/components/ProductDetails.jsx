import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const ProductDetails = () => {
  const { id } = useParams();

  // Flatten all products and subitems into a single list
  const allProducts = data.Products.flatMap((product) =>
    product.subItems
      ? product.subItems.map((item) => ({
          ...item,
          description: item.description || "No description available.",
        }))
      : [
          {
            id: product.id,
            title: product.title,
            description: product.description || "No description available.",
          },
        ]
  );

  const product = allProducts.find((p) => p.id === id);

if (!product) {
return (
<div style={{ padding: "2rem" }}>
<h2>Product not found</h2>
<p>The product with ID "{id}" does not exist.</p>
</div>
);
}

return (
<div style={{ padding: "2rem" }}>
<h1>{product.title}</h1>
<p>{product.description}</p>
{/* Add more product details here if you have */}
</div>
);
};

export default ProductDetails;