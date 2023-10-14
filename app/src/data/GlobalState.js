import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addProduct(product) {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  }

  function editProduct(product) {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: product,
    });
  }

  function removeProduct(id) {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  }

  // Generate 40 random product objects
  const randomProducts = [];
  for (let i = 1; i <= 40; i++) {
    const product = {
      productId: i,
      productName: `Product ${i}`,
      productOwnerName: `Owner ${i}`,
      developers: [
        `Developer 1`,
        `Developer 2`,
        `Developer 3`,
        `Developer 4`,
        `Developer 5`,
      ],
      scrumMasterName: `Scrum Master ${i}`,
      startDate: "YYYY/MM/DD",
      methodology: `Methodology ${i}`,
      location: `Location ${i}`,
    };
    randomProducts.push(product);
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products.concat(randomProducts),
        addProduct,
        editProduct,
        removeProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};