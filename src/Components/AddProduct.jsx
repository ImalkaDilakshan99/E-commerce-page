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
                <button>Register</button>
            </fieldset>
        </form>
    )
}

export default AddProduct;