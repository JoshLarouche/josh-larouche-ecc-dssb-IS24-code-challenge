import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';

// Generate 40 random product objects
const randomProducts = [];
for (let i = 1; i <= 40; i++) {
const product = {
    id: uuidv4(),
    productName: `Product ${i}`,
    productOwnerName: `Owner ${i}`,
    developers: [
    `Developer 1`,
    ` Developer 2`,
    ` Developer 3`,
    ` Developer 4`,
    ` Developer 5`,
    ],
    scrumMasterName: `Scrum Master ${i}`,
    startDate: "YYYY/MM/DD",
    methodology: `Methodology ${i}`,
    location: `Location ${i}`,
};
randomProducts.push(product);
}

const initialState = {
  products: randomProducts,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log('Current state:', state); // Log the current state

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

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        addProduct,
        editProduct,
        removeProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};