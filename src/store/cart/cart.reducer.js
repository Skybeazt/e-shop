import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = function (state = CART_INITIAL_STATE, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
