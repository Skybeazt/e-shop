import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "./../../utils/reducer/reducer.utils.js";

const addCartItem = function (cartItems, productToAdd) {
  const existingProduct = cartItems.find(function (cartItem) {
    return cartItem.id === productToAdd.id;
  });

  if (existingProduct)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = function (cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

  return cartItems.map(function (cartItem) {
    return cartItem.id === existingCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { ...cartItem };
  });
};

const clearCartItem = function (cartItems, cartItemToClear) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const toggleCartDropDown = function () {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART_DROP_DOWN);
};

export const addItemToCart = function (cartItems, productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = function (cartItems, cartItemToRemove) {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = function (cartItems, cartItemToClear) {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
