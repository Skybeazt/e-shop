import { createContext, useEffect, useState } from "react";

const addCartItem = function (cartItems, productToAdd) {
  // Find if cartItems contains product to add
  const existingProduct = cartItems.find(function (cartItem) {
    return cartItem.id === productToAdd.id;
  });

  // if found, increament quantity by one
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

export const CartContextProvider = function ({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addItemToCart = function (productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = function (cartItemToRemove) {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = function (cartItemToClear) {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(
    function () {
      const newCartCount = cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
      );
      setCartCount(newCartCount);
    },

    [cartItems]
  );

  useEffect(
    function () {
      const newCartTotalPrice = cartItems.reduce(
        (accumulator, cartItem) =>
          (accumulator += cartItem.quantity * cartItem.price),
        0
      );
      setCartTotalPrice(newCartTotalPrice);
    },
    [cartItems]
  );

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
