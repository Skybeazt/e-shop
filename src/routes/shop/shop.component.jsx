import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "./../../store/categories/category.action.js";

import { useEffect } from "react";

import CategoriesPreview from "./../categories-preview/categories-preview.component.jsx";
import Category from "../category/category.component.jsx";

const Shop = function () {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
