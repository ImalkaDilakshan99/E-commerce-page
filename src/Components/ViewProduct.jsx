import chair from "../Images/chair.jpg";
import "../Style/ViewProduct.css"

function ViewProduct() {
  return (
    <dev className="cont">
      <dev className="productimg" >
        <img src={chair} alt="chair" />
      </dev>
      <dev className="productCont">
        <h2>Chair</h2>
        <h2 className="prize">$55.00</h2>
        <p>Catagory-furnitures</p>


      </dev>
    </dev>
  );
}

export default ViewProduct;
