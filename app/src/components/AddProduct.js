import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../data/GlobalState';
import axios from 'axios';

export const AddProduct = () => {
  let history = useHistory();
  const { addProduct } = useContext(GlobalContext);

  const [product, setProduct] = useState({
    id: uuidv4(),
    productName: "",
    productOwnerName: "",
    developers: "",
    scrumMasterName: "",
    startDate: "",
    methodology: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Django backend API to create a new product
      const response = await axios.post('http://localhost:8000/api/products/', product);

      // Handle the response, e.g., show a success message
      console.log('Product created:', response.data);

      // Add the new product to the local state
      addProduct(response.data);

      // Redirect to another page, e.g., the product list page
      history.push('/');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Input fields for product details */}
        <input
          type="text"
          name="productName"
          placeholder="Name of product"
          value={product.productName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="productOwnerName"
          placeholder="Name of product owner"
          value={product.productOwnerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="developers"
          placeholder="Developers"
          value={product.developers}
          onChange={handleChange}
        />
        <input
          type="text"
          name="scrumMasterName"
          placeholder="Name of scrum master"
          value={product.scrumMasterName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={product.startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="methodology"
          placeholder="Methodology"
          value={product.methodology}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={product.location}
          onChange={handleChange}
        />
        {/* Add similar input fields for other product details */}
        <button type="submit">Add Product</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};