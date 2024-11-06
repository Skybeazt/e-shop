import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, CategoryTitle } from "./category.styles.jsx";

const Category = function () {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);
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
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
