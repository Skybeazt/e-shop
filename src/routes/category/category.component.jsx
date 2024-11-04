import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

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
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
