import React, { useContext } from "react";
import { Heading } from "./Heading";
import { ProductList } from "./ProductList";
import { GlobalContext } from "../data/GlobalState"; // Import the GlobalContext

export const Home = () => {
  const { products } = useContext(GlobalContext); // Access the products array from the global context

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Product Manager
        </h3>
        <Heading />
        {products.length > 0 ? (
          <ProductList />
        ) : (
          <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
        )}
      </div>
    </React.Fragment>
  );
};