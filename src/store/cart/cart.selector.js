import { createSelector } from "reselect";

const selectCartReducer = function (state) {
  return state.cart;
};

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) =>
        (accumulator += cartItem.quantity * cartItem.price),
      0
    )
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);

// export const selectIsCartOpen = function (state) {
//   return state.cart.isCartOpen;
// };
