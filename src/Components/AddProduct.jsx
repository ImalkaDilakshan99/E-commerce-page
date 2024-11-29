import { useState } from "react";
import "../Style/AddProduct.css";

function AddProduct() {
    const [product, setProduct] = useState({
        productname: '',
        price: '',
        description: '',
        productimg: null,  // Add productimg to state
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: name === 'price' ? parseFloat(value) : value,  // Ensure price is a number
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Capture the first selected file
        setProduct({
            ...product,
            productimg: file,  // Store file in state
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('productname', product.productname);
        formData.append('price', product.price);
        formData.append('description', product.description);
        if (product.productimg) {
            formData.append('productimg', product.productimg);  // Append file to FormData
        } else {
            alert('Please select an image for the product!');
            return;
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData,  // Send FormData directly
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add product');
                }
                return response.json();
            })
            .then((data) => {
                alert('Product added successfully!');
                console.log('Added product:', data);
                // Reset the form
                setProduct({ productname: '', price: '', description: '', productimg: null });
                document.getElementById('productimg').value = ''; // Reset file input
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error adding product');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add Product</legend>

                <label htmlFor="productname">Product Name</label>
                <input 
                    type="text" 
                    id="productname" 
                    name="productname" 
                    value={product.productname} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="price">Price</label>
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    value={product.price} 
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={product.description} 
                    onChange={handleChange} 
                    required
                />

                <label htmlFor="productimg">Add Image for Product</label>
                <input 
                    type="file" 
                    id="productimg" 
                    name="productimg" 
                    onChange={handleFileChange} 
                />

                <button type="submit">ADD</button>
            </fieldset>
        </form>
    );
}

export default AddProduct;
