import "../Style/ProductTable.css"

function ProductTable() {
  return (
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
                <div className="view">View</div>
                <div className="edit">Edit</div>
                <div className="remove">Remove</div>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
);
};

export default ProductTable;