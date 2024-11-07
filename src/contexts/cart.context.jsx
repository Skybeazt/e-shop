import { createContext, useReducer } from "react";
import { createAction } from "./../utils/reducer/reducer.utils.js";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartTotalPrice: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} cartReducer!!!`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
};

export const CartContextProvider = function ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotalPrice } = state;

  const setIsCartOpen = function () {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN));
  };

  const updateCartItemsReducer = function (newCartItems) {
    const newCartCount = newCartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (accumulator, cartItem) =>
        (accumulator += cartItem.quantity * cartItem.price),
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotalPrice: newCartTotal,
      })
    );
  };

  const addItemToCart = function (productToAdd) {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = function (cartItemToRemove) {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = function (cartItemToClear) {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
