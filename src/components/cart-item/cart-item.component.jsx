import "./cart-item.styles.scss";

const CartItem = function ({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name} image`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
