import { Product } from "@/util/types/types";
import { CartItem } from "./cart-model";

const cart: CartItem[] = [];
let updateCallback: () => void = () => {};

export const addToCart = (product: Product): void => {
  const existingItem = cart.find((item) => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  updateCallback();
};

export const removeFromCart = (productId: string): void => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }

  updateCallback();
};

export const decreaseQuantity = (productId: string): void => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    const currentItem = cart[index];

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
  }

  updateCallback();
};

export const increaseQuantity = (productId: string): void => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    cart[index].quantity += 1;
  }

  updateCallback();
};

export const updateCartItemQuantity = (productId: string, newQuantity: number) => {
  const index = cart.findIndex((item) => item.product.id.toString() === productId);
  if (index !== -1) {
    cart[index].quantity = newQuantity;
    updateCallback();
  }
};

export const getCart = (): CartItem[] => {
  return [...cart];
};

export const registerUpdateCallback = (callback: () => void): void => {
  updateCallback = callback;
};
