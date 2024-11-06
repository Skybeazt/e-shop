import { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "./../button/button.component.jsx";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";

const ProductCard = function ({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = function () {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
