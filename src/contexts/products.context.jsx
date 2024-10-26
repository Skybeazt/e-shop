import { useState, useEffect, createContext } from "react";
import PRODUCTS from "./../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsContextProvider = function ({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    setProducts(PRODUCTS);
  }, []);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
