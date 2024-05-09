'use client'
import React, { FC, ReactNode, createContext, useContext, useState } from "react";
import { Product } from "@/util/types/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addItemToCart: (item: Product) => void;
  removeItemFromCart: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  isVisible: boolean;
  toggleCartVisibility: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  isVisible: false,
  toggleCartVisibility: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const addItemToCart = (item: Product) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.product.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (id: number) => {
    const updatedCart = cart.filter(cartItem => cartItem.product.id !== id);
    setCart(updatedCart);
  };
  

  const increaseItemQuantity = (id: number) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.product.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decreaseItemQuantity = (id: number) => {
    const updatedCart = cart.map(cartItem => {
      if (cartItem.product.id === id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
  
    const itemToDecrease = updatedCart.find(cartItem => cartItem.product.id === id);
    if (itemToDecrease && itemToDecrease.quantity <= 1) {
      removeItemFromCart(id);
      return;
    }
    
    setCart(updatedCart);
  };

  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, isVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};
