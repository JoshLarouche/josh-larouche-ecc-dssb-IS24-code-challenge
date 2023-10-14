import React from "react";
import { Heading } from "./Heading";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <h3 className="text-center text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">
          Product Manager
        </h3>
        <Heading />
        <ProductList />
      </div>
    </React.Fragment>
  );
};