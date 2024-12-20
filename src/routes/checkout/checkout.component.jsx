import {
  selectCartItems,
  selectCartTotalPrice,
} from "./../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component.jsx";
import PaymentForm from "./../../components/payment-form/payment-form.component.jsx";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

const Checkout = function () {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>{`Total: $${cartTotalPrice}`}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
