import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Style/ViewProduct.css"

function ViewProduct() {

  const { id } = useParams(); // Extract `id` from the URL
  const [product, setProduct] = useState(null);
  const base64String = results[id].image;

  useEffect(() => {
    // Fetch the product details by ID
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <dev className="cont">
      <dev className="productimg" >
        <img src={product.productimg} alt="chair" />
      </dev>
      <dev className="productCont">
        <h2 className="productName">{product.productname}</h2>
        <h2 className="prize">{product.price}</h2>
        <p>{product.description}</p>
        <button className="buy">Buy</button>
      </dev>
    </dev>
  );
}

export default ViewProduct;
