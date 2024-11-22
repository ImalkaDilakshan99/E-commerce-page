import "../Style/NavBar.css"

function NavBar(){
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div>
                <ul className="navcont">
                    <li>Product List</li>
                    <li>Add Product</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;