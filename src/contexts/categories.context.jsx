import { useState, useEffect, createContext } from "react";

import { getCollectionAndDocuments } from "./../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesContextProvider = function ({ children }) {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(function () {
    (async function () {
      const categoryMap = await getCollectionAndDocuments();
      setCategoriesMap(categoryMap);
    })();
  }, []);

  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
