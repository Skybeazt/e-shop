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

// const countCartItems = function (cartItems) {
//   const totalItems =

//   return totalItems;
// };

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartContextProvider = function ({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  //   useEffect;

  const addItemToCart = function (productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
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

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
