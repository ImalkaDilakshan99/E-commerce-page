import chair from "../Images/chair.jpg";
import "../Style/ViewProduct.css"

function ViewProduct() {

  const [products, setProducts]=useState([]);

  return (
    <dev className="cont">
      <dev className="productimg" >
        <img src={productimg} alt="chair" />
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
