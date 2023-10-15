import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../data/GlobalState';
import axios from 'axios';

export const AddProduct = () => {
  let history = useHistory();

  const [product, setProduct] = useState({
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

      // Redirect to another page, e.g., the product list page
      history.push('/products');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error creating product:', error);
    }
  };

  // const { addProduct } = useContext(GlobalContext);
  //
  // const [productName, setProductName] = useState("");
  // const [productOwnerName, setProductOwnerName] = useState("");
  // const [developers, setDevelopers] = useState("");
  // const [scrumMasterName, setScrumMasterName] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [methodology, setMethodology] = useState("");
  // const [location, setLocation] = useState("");
  
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const newProduct = {
  //     id: uuidv4(),
  //     productName,
  //     productOwnerName,
  //     developers,
  //     scrumMasterName,
  //     startDate,
  //     methodology,
  //     location,
  //   };
  //   addProduct(newProduct);
  //   history.push("/");
  // };

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
        <Link to="/products">Cancel</Link>
      </form>
    </div>
    // <React.Fragment>
    //   <div className="w-full max-w-sm container mt-20 mx-auto">
    //     <form onSubmit={onSubmit}>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="productName"
    //         >
    //           Name of product
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
    //           value={productName}
    //           onChange={(e) => setProductName(e.target.value)}
    //           type="text"
    //           placeholder="Enter productName"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="productOwnerName"
    //         >
    //           Name of product owner
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={productOwnerName}
    //           onChange={(e) => setProductOwnerName(e.target.value)}
    //           type="text"
    //           placeholder="Enter productOwnerName"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="developers"
    //         >
    //           Names of developers
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={developers}
    //           onChange={(e) => setDevelopers(e.target.value)}
    //           type="text"
    //           placeholder="Enter developers"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="scrumMasterName"
    //         >
    //           Name of scrum master
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={scrumMasterName}
    //           onChange={(e) => setScrumMasterName(e.target.value)}
    //           type="text"
    //           placeholder="Enter scrumMasterName"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="startDate"
    //         >
    //           Start date
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={startDate}
    //           onChange={(e) => setStartDate(e.target.value)}
    //           type="text"
    //           placeholder="Enter startDate"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="methodology"
    //         >
    //           Methodology
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={methodology}
    //           onChange={(e) => setMethodology(e.target.value)}
    //           type="text"
    //           placeholder="Enter methodology"
    //         />
    //       </div>
    //       <div className="w-full mb-5">
    //         <label
    //           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //           htmlFor="location"
    //         >
    //           Location
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
    //           value={location}
    //           onChange={(e) => setLocation(e.target.value)}
    //           type="text"
    //           placeholder="Enter location"
    //         />
    //       </div>
          
    //       <div className="flex items-center justify-between">
    //         <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    //           Add Product
    //         </button>
    //       </div>
    //       <div className="text-center mt-4 text-gray-500">
    //         <Link to="/">Cancel</Link>
    //       </div>
    //     </form>
    //   </div>
    // </React.Fragment>
  );
};