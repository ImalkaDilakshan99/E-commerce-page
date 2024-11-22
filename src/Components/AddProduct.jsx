import "../Style/AddProduct.css"

function AddProduct(){
    return(
        <form action="">
            <fieldset>
                <legend>Add Product</legend>
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName"/>
                <label htmlFor="category">Category</label>
                <input type="category" id="category" name="Category"/>
                <label htmlFor="prize">Prize</label>
                <input type="number" id="prize" name="prize"/>
                <label htmlFor="productimg">Add Images for Product</label>
                <input type="file" id="productimg" name="productimg"/>
                <button>ADD</button>
            </fieldset>
        </form>
    )
}

export default AddProduct;