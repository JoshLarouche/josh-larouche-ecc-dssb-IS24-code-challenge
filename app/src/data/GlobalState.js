import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';
import { v4 as uuidv4 } from 'uuid';

function generateRandomAcronym() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let acronym = "";
  for (let i = 0; i < 3; i++) {
    acronym += alphabet[Math.floor(Math.random() * 26)];
  }
  return acronym;
}

function generateRandomRealWord() {
  const realWords = ["Registration", "Portal", "Service", "Solution", "System", "Management"];
  return realWords[Math.floor(Math.random() * realWords.length)];
}

const randomProducts = [];

const productOwnerNames = [
  "John Smith",
  "Alice Johnson",
  "Michael Brown",
  "Sarah Taylor",
  "David Clark",
];
const developerNames = [
  "Emily Davis",
  "James Wilson",
  "Sophia Lee",
  "Daniel Evans",
  "Olivia White",
];
const scrumMasterNames = [
  "Robert Anderson",
  "Linda Martinez",
  "William Jones",
  "Karen Garcia",
  "Richard Miller",
];

for (let i = 1; i <= 40; i++) {

  const isAgile = Math.random() < 0.5;

  // Generate a random start date within the last year
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const randomStartDate = new Date(oneYearAgo.getTime() + Math.random() * (new Date() - oneYearAgo));

  const acronym1 = generateRandomAcronym();
  const acronym2 = generateRandomAcronym();
  const realWord = generateRandomRealWord();

  // Generate a random number of developers between 1 and 5
  const numberOfDevelopers = Math.floor(Math.random() * 5) + 1;
  
  // Shuffle the developer names array to ensure uniqueness
  const shuffledDeveloperNames = [...developerNames];
  for (let i = shuffledDeveloperNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeveloperNames[i], shuffledDeveloperNames[j]] = [shuffledDeveloperNames[j], shuffledDeveloperNames[i]];
  }
  
  // Select the first `numberOfDevelopers` names
  const developers = shuffledDeveloperNames.slice(0, numberOfDevelopers).join(', ');

  const product = {
      id: uuidv4(),
      productName: `${acronym1}-${acronym2}-${realWord}`,
      productOwnerName: productOwnerNames[Math.floor(Math.random() * productOwnerNames.length)],
      developers,
      scrumMasterName: scrumMasterNames[Math.floor(Math.random() * scrumMasterNames.length)],
      startDate: randomStartDate.toISOString().slice(0, 10),
      methodology: isAgile ? "Agile" : "Waterfall",
      location: `https://github.com/bcgov/ecc-ofm`,
  };
  randomProducts.push(product);
  }

  const initialState = {
    products: randomProducts,
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