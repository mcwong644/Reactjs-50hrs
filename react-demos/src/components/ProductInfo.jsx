import React from "react";

const ProductInfo = () => {
  const product = {
    name: "iPhone 14 Pro Max",
    price: 1099,
    availability: "In Stock",
    description:
      "The latest iPhone with advanced features and improved performance.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3tlmEyBDBaJIEUlL1Bu8wnYvWoLPbWX6Qo72iJymCw&s=10",
  };

  return (
    <div>
      ProductInfo
      <h1>Name: {product.name}</h1>
      <h1>Price: ${product.price}</h1>
      <h1>Availability: {product.availability}</h1>
      <img src={product.imageUrl} alt={product.name} height={300} />
    </div>
  );
};

export default ProductInfo;
