import "../Style/NavBar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                <ul className="navcont">
                    <li Link to="/">Product List</li>
                    <li Link to="/AddProduct">Add Product</li>
                </ul>
                
            </div>
        </div>
    )
}

export default NavBar;