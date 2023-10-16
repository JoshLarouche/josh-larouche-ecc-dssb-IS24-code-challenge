import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../data/GlobalState';
import axios from 'axios';

export const ProductList = () => {
  const { products, removeProduct } = useContext(GlobalContext);
  const [apiProducts, setApiProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${productId}`);
      setApiProducts(apiProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product: Trying to remove from initial mock data', error);
      removeProduct(productId);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
        setApiProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (products, searchTerm) => {
    return products.filter((product) => {
      // Convert all properties to lowercase for case-insensitive search
      const lowercaseProduct = Object.keys(product).reduce((result, key) => {
        result[key] = String(product[key]).toLowerCase();
        return result;
      }, {});
  
      // Create a regular expression to match the searchTerm as a whole word
      const wordBoundarySearchTerm = new RegExp(`\\b${searchTerm.toLowerCase()}\\b`);
  
      // Combine all the properties you want to search, including 'scrumMasterName'
      const searchString = Object.values(lowercaseProduct)
        .join(' ');
  
      // Use the regular expression to test for a whole word match
      return wordBoundarySearchTerm.test(searchString);
    });
  };

  // Render the list based on the updated state
  const renderProductList = () => {
    const allProducts = [...products, ...apiProducts];
    const filteredProducts = filterProducts(allProducts, searchTerm);
    
    if (filteredProducts.length > 0) {
      return filteredProducts.map((product) => (
        <div
          className="flex items-center bg-gray-100 mb-10 shadow"
          key={product.id}
        >
          <div className="flex-auto text-left px-4 py-2 m-2">
            <p className="text-gray-900 leading-none">
             <strong>Product Name: </strong>{product.productName}
            </p>
            <p className="text-gray-600">
             <strong>Product Owner Name: </strong>{product.productOwnerName}
            </p>
            <p className="text-gray-600">
             <strong>Developers: </strong>{product.developers}
            </p>
            <p className="text-gray-600">
             <strong>Scrum Master Name: </strong>{product.scrumMasterName}
            </p>
            <p className="text-gray-600">
             <strong>Start Date: </strong>{product.startDate}
            </p>
            <p className="text-gray-600">
             <strong>Methodology: </strong>{product.methodology}
            </p>
            <p className="text-gray-600">
             <strong>Location: </strong>{product.location}
            </p>
          </div>
          <div className="flex-auto text-right px-4 py-2 m-2">
            <Link
              to={`/api/edit/${product.id}`}
              title="Edit Product"
            >
              <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </div>
            </Link>
            <button
              onClick={() => handleDelete(product.id)} 
              className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
              title="Remove Product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
          </div>
        </div>
      ));
    } 
    else {
      return <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>;
    }
  };

  const allProducts = [...products, ...apiProducts];
  const filteredProducts = filterProducts(allProducts, searchTerm);
  const totalFilteredItems = filteredProducts.length; 

  return (
    <React.Fragment> 
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <p>Total Filtered Items: {totalFilteredItems}</p>
      </div>

      {renderProductList()}
    </React.Fragment>
  );
};