import { useState, useEffect, Fragment } from "react";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector.js";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component.jsx";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = function () {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesLoading = useSelector(selectCategoriesIsLoading);
  const [products, setproducts] = useState(categoriesMap[category]);

  useEffect(
    function () {
      setproducts(categoriesMap[category]);
    },
    [category, categoriesMap]
  );

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
