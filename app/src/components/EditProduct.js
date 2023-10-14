import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../data/GlobalState';

export const EditProduct = (route) => {
  let history = useHistory();

  const { products, editProduct } = useContext(GlobalContext);

  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    productName: "",
    productOwnerName: "",
    developers: "",
    scrumMasterName: "",
    startDate: "",
    methodology: "",
    location: "",
  });

  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (currentProductTraversal) => currentProductTraversal.id === parseInt(productId)
    );
    setSelectedProduct(selectedProduct);
  }, [currentProductId, products]);

  const onSubmit = (e) => {
    e.preventDefault();
    editProduct(selectedProduct);
    history.push("/");
  };

  const handleOnChange = (productKey, newValue) =>
    setSelectedProduct({ ...selectedProduct, [productKey]: newValue });

  if (!selectedProduct || !selectedProduct.id) {
    return <div>Invalid Product ID.</div>;
  }

  return (
    <React.Fragment>
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
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};