import React, { useContext } from 'react';

import { GlobalContext } from '../data/GlobalState';

export const ProductList = () => {
  const { products } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {products.length > 0 ? (
        <React.Fragment>
          {products.map((product) => (
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
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};