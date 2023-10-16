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
      const response = await axios.post('http://localhost:8000/api/products/', product);
      addProduct(response.data);
      history.push('/');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="w-full max-w-md container mt-20 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="productName"
          >
            Name of product
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="productName"
            placeholder="Name of product"
            value={product.productName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="productOwnerName"
          >
            Name of product owner
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="productOwnerName"
            placeholder="Name of product owner"
            value={product.productOwnerName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="developers"
          >
            Names of developers
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="developers"
            placeholder="Developers"
            value={product.developers}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="scrumMasterName"
          >
            Name of scrum master
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="scrumMasterName"
            placeholder="Name of scrum master"
            value={product.scrumMasterName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="startDate"
          >
            Start date
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={product.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="methodology"
          >
            Methodology
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="methodology"
            placeholder="Methodology"
            value={product.methodology}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 text-center">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="w-full p-2 text-gray-700 rounded"
            type="text"
            name="location"
            placeholder="Location"
            value={product.location}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="mt-5 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Product
          </button>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};