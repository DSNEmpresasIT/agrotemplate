'use client'
import { useCart } from "@/context/cart-context/cart-context";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import ButtonComponent from "../ui/ButtonComponent";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { CONTACT_INFO } from "@/util/enums";

const CartComponent: React.FC = () => {
  const { cart, isVisible, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();

  if (!isVisible) {
    return null; 
  }

  const generateWhatsAppMessage = () => {
    const cartMessage = cart
      .map((item) => `${item.product.name}: ${item.quantity} unidad ${item.product.unid ? item.product.unid : ''}.`)
      .join("\n");
    const initialMessage =
      "Me gustaría consultar la cotización de los siguientes productos:\n\n";
    const fullMessage = initialMessage + cartMessage;
    return encodeURIComponent(fullMessage);
  };


  return (
     <div className="fixed  w-screen sm:w-[400px] top-16 px-6 sm:px-0 right-0  flex flex-col sm:absolute   z-[9000]   shadow-[0px 0px 10px rgba(0, 0, 0, 0.1)]  " >
       <div className=" bg-light  rounded-t-md ">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-white text-lg font-semibold">Cotización</h2>
            <button onClick={toggleCartVisibility}><IoIosClose className="text-4xl text-white hover:text-red-500"/></button>
          </div>
        </div>
      <div className="bg-white shadow-lg rounded-b-md flex  flex-col justify-between h-[300px]">
      {cart.length === 0 ? (
        <p className="p-4">El Cotizador está vacío.</p>
      ) : (
        <ul className="p-4 flex flex-col overflow-auto gap-3">
          {cart.map((item, index) => (
            <li className="flex gap-3  border-b pb-1" key={index}>
              <div className="grid grid-cols-3 gap-2 mx-auto justify-center w-full items-center ">
                <h5>{item.product.name}</h5>
                <div className="flex items-center justify-center gap-2">
                  <button className="text-red-400 text-2xl" onClick={()=> decreaseItemQuantity(item.product.id)}>-</button>
                    <span className="text-slate-500"><span className="text-black">{item.quantity}</span> {item.product.unid && `(${item.product.unid})`}</span>
                  <button className="text-green-400 text-2xl" onClick={()=> increaseItemQuantity(item.product.id)}>+</button>
                </div>
                <button  className="flex  items-center justify-center" onClick={() => removeItemFromCart(item.product.id)}><MdDeleteForever className="text-2xl hover:text-red-500"/></button>

              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-end p-4 ">
        <Link  href={`https://api.whatsapp.com/send?phone=${
              CONTACT_INFO.PHONE_2
            }&text=${generateWhatsAppMessage()}`} target="_blank" className="lab-btn bg-light p-3 flex items-center gap-2"><span className="flex">Cotizar<TbShoppingCartQuestion className="text-2xl"/></span></Link>
       
      </div>
    </div>
    </div>
    
  );
};

export default CartComponent;
