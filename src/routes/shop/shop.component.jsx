import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action.js";

import { useEffect } from "react";
import { getCollectionAndDocuments } from "./../../utils/firebase/firebase.utils.js";

import CategoriesPreview from "./../categories-preview/categories-preview.component.jsx";
import Category from "../category/category.component.jsx";

const Shop = function () {
  const dispatch = useDispatch();

  useEffect(function () {
    (async function () {
      const categoriesArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoriesArray));
    })();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
