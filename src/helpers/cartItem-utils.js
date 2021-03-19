export const addToCartUtils = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, count: 1 }];
};

export const decreaseCartItems = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem.count === 1) {
    return cartItems.filter((itemToRemove) => itemToRemove.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, count: cartItem.count - 1 }
      : cartItem
  );
};
