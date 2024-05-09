'use client'
import { useCart } from "@/context/cart-context/cart-context";
import React from "react";


const CartComponent: React.FC = () => {
  const { cart, isVisible, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();

  if (!isVisible) {
    return null; 
  }

  return (
     <div className="fixed  w-screen sm:w-[300px] top-16 px-6 sm:px-0 right-0  flex flex-col sm:absolute   z-[9999]   shadow-[0px 0px 10px rgba(0, 0, 0, 0.1)]  " >
      <div className="bg-white shadow-lg rounded-md  h-[300px]">
      <div className=" bg-light rounded-md justify-between">
        
        <div className="p-4 flex justify-between">
          <h2 className="text-white text-lg font-semibold">Carrito de compras</h2>
          <button onClick={toggleCartVisibility}>x</button>
        </div>
      </div>
      {cart.length === 0 ? (
        <p className="p-4">El carrito está vacío.</p>
      ) : (
        <ul className="p-4">
          {cart.map((item, index) => (
            <li className="flex gap-3 justify-between" key={index}>
              <div>{item.product.name}</div>
              <div className="flex">
                <button onClick={()=> increaseItemQuantity(item.product.id)}>+</button>
                  <span>{item.quantity} {item.product.unid}</span>
                <button className="bg-red-200 p-2" onClick={()=> decreaseItemQuantity(item.product.id)}>-</button>
              </div>
              <button onClick={() => removeItemFromCart(item.product.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-end">
        <button>Cotizar</button>
      </div>
    </div>
    </div>
    
  );
};

export default CartComponent;
