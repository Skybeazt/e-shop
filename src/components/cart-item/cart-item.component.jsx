import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = function ({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name} image`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
