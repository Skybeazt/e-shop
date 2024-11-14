import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "./../../store/categories/category.selector.js";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component.jsx";

const CategoriesPreview = function () {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesLoadinig = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isCategoriesLoadinig ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(function (title) {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
