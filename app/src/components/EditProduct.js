import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../data/GlobalState';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const EditProduct = () => {
  let history = useHistory();
  const { products, editProduct } = useContext(GlobalContext);
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState({
    productName: '',
    productOwnerName: '',
    developers: '',
    scrumMasterName: '',
    startDate: '',
    methodology: '',
    location: '',
  });

  useEffect(() => {
    // Fetch product data from your Django API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/products/${id}`);
        setSelectedProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        const selectedProduct = products.find(
          (product) => product.id === id);
        if (selectedProduct) {
          setSelectedProduct(selectedProduct);
        } else {
          console.error('Selected product not found.');
        }
      }
    };

    fetchData();
  }, [id]);

  const updateProduct = async (product) => {
    try {
      await axios.put(`http://localhost:8000/api/products/${id}`, product);
      history.push('/');
    } catch (error) {
      console.error('Error updating product:', error);
      editProduct(product);
      history.push('/');
    }
  };

  const handleOnChange = (productKey, newValue) => {
    setSelectedProduct({ ...selectedProduct, [productKey]: newValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateProduct(selectedProduct);
  };

  if (!selectedProduct || !selectedProduct.id) {
    return <div>Invalid Product ID.</div>;
  }

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="productName"
          >
            Name of product
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.productName}
            onChange={(e) => handleOnChange("productName", e.target.value)}
            type="text"
            placeholder="Enter productName"
          />
        </div>
        <div className="w-full  mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="productOwnerName"
          >
            Name of product owner
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.productOwnerName}
            onChange={(e) => handleOnChange("productOwnerName", e.target.value)}
            type="text"
            placeholder="Enter productOwnerName"
          />
        </div>
        <div className="w-full  mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="developers"
          >
            Names of developers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.developers}
            onChange={(e) => handleOnChange("developers", e.target.value)}
            type="text"
            placeholder="Enter developers"
          />
        </div>
        <div className="w-full  mb-5">
        <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="scrumMasterName"
          >
            Name of scrum master
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.scrumMasterName}
            onChange={(e) => handleOnChange("scrumMasterName", e.target.value)}
            type="text"
            placeholder="Enter scrumMasterName"
          />
        </div>
        <div className="w-full  mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="startDate"
          >
            Start date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.startDate}
            onChange={(e) => handleOnChange("startDate", e.target.value)}
            type="text"
            placeholder="Enter startDate"
          />
        </div>
        <div className="w-full  mb-5">
        < label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="methodology"
          >
            Methodology
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.methodology}
            onChange={(e) => handleOnChange("methodology", e.target.value)}
            type="text"
            placeholder="Enter methodology"
          />
        </div>
        <div className="w-full  mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
            value={selectedProduct.location}
            onChange={(e) => handleOnChange("location", e.target.value)}
            type="text"
            placeholder="Enter location"
          />
        </div>
        <div className="w-full text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
        <div className="text-center mt-4 text-gray-500">
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};