import "../Style/ProductTable.css";
import WelcomeBar from "./WelcomeBar";
import { Link} from "react-router-dom";

function ProductTable() {
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
            <tr>
              <td>product-id</td>
              <td>product-name</td>
              <td>product-category</td>
              <td>product-price</td>
              <td className="fun">
              <Link to='/view-product/:id'><div className="view">View</div></Link>
                <div className="edit"><Link></Link>Edit</div>
                <div className="remove"><Link></Link>Remove</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
