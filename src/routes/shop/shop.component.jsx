import { useContext } from "react";
import { ProductsContext } from "./../../contexts/products.context.jsx";

import ProductCard from "./../../components/product-card/product-card.component.jsx";

import "./shop.styles.scss";

const Shop = function () {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(function (product) {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;