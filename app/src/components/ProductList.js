import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../data/GlobalState';
import axios from 'axios';

export const ProductList = () => {
  const { products, removeProduct } = useContext(GlobalContext);
  const [apiProducts, setApiProducts] = useState([]);

  console.log('Products:', products);
  console.log('apiProducts:', apiProducts);

  // const handleDelete = (productId) => {
  //   console.log('Delete button clicked for product ID:', productId);

  //   // Use your removeProduct function to delete the product
  //   removeProduct(productId);
  // }

  const handleDelete = async (productId) => {
    console.log('Delete button clicked for product ID:', productId);
  
    try {
      // Send a DELETE request to the API to delete the product
      await axios.delete(`http://localhost:8000/api/products/${productId}`);
  
      // If the delete request was successful, remove the product from apiProducts
      setApiProducts(apiProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product: Trying to remove from initial mock data', error);
      removeProduct(productId);
    }
  }

  useEffect(() => {
    // Fetch product data from your Django API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products/');
        setApiProducts(response.data); // Update state with API data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render the list based on the updated state
  const renderProductList = () => {
    const allProducts = [...products, ...apiProducts];
    console.log('All Products:', allProducts);
    if (allProducts.length > 0) {
      return allProducts.map((product) => (
        <div
          className="flex items-center bg-gray-100 mb-10 shadow"
          key={product.id}
        >
          <div className="flex-auto text-left px-4 py-2 m-2">
            <p className="text-gray-900 leading-none">
              {product.productName}
            </p>
            <p className="text-gray-600">
              {product.productOwnerName}
            </p>
            <p className="text-gray-600">
              {product.developers}
            </p>
            <p className="text-gray-600">
              {product.scrumMasterName}
            </p>
            <p className="text-gray-600">
              {product.startDate}
            </p>
            <p className="text-gray-600">
              {product.methodology}
            </p>
            <p className="text-gray-600">
              {product.location}
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
    } else {
      return <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>;
    }
  };

  return (
    <React.Fragment> 
      {renderProductList()}
    </React.Fragment>
  );
};

// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { GlobalContext } from '../data/GlobalState';

// export const ProductList = () => {
//   const { products, removeProduct } = useContext(GlobalContext);
//   return (
//     <React.Fragment>
//       {products.length > 0 ? (
//         <React.Fragment>
//           {products.map((product) => (
//             <div
//               className="flex items-center bg-gray-100 mb-10 shadow"
//               key={product.id}
//             >
//               <div className="flex-auto text-left px-4 py-2 m-2">
//                 <p className="text-gray-900 leading-none">
//                   {product.productName}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.productOwnerName}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.developers}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.scrumMasterName}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.startDate}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.methodology}
//                 </p>
//                 <p className="text-gray-600">
//                   {product.location}
//                 </p>
//               </div>
//               <div className="flex-auto text-right px-4 py-2 m-2">
//                 <Link
//                   to={`/edit/${product.id}`}
//                   title="Edit Product"
//                 >
//                   <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
//                   </div>
//                 </Link>
//                 <button
//                   onClick={() => removeProduct(product.id)}
//                   className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
//                   title="Remove Product"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </React.Fragment>
//       ) : (
//         <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
//       )}
//     </React.Fragment>
//   );
// };