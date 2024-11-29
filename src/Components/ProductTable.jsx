import "../Style/ProductTable.css";
import WelcomeBar from "./WelcomeBar";
import { Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';



function ProductTable() {

  const [products, setProducts]=useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
     
  }, []);
  console.log(products);
  return (
    <div>
      <WelcomeBar></WelcomeBar>
      <div className="product-dashboard">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {products.length === 0 ? (
        <p>No products available</p>):(
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productname}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td className="fun">
              <Link to='/view-product/${product.id}'><div className="view">View</div></Link>
                <div className="edit"><Link></Link>Edit</div>
                <div className="remove"><Link></Link>Remove</div>
              </td>
            </tr>
  )))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
