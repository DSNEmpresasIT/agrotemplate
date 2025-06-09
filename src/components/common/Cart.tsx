'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, toggleCartVisibility, setCartVisibility } from "@/redux/store/features/cartSlice";
import CartFavItem from "./CartFavItem";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { IoClose } from "react-icons/io5";
import { CUSTOMPATHS } from "@/util/enums";

const favItems = [
  {
    title: 'titulo random 1',
    category: 'categoria random 1'
  },
  {
    title: 'titulo random 2',
    category: 'categoria random 2'
  },
  {
    title: 'titulo random 3',
    category: 'categoria random 3'
  },
  {
    title: 'titulo random 4',
    category: 'categoria random 4'
  },
  {
    title: 'titulo random 5',
    category: 'categoria random 5'
  }
];

const Cart = () => {
  const [cartView, setCartView] = useState(true);
  const cart = useSelector((state: any) => state.cart.cart);
  const isVisible = useSelector((state: any) => state.cart.isVisible);

  const dispatch = useDispatch();
  const router = useRouter();

  const generateWhatsAppMessage = () => {
    const cartMessage = cart
      .map((item: any) => `${item.product.name}: ${item.quantity} ${item.product.unid ? `unidad ${item.product.unid}` : ''}.`)
      .join("\n");
    const initialMessage = "Me gustaría consultar la cotización de los siguientes productos:\n\n";
    const fullMessage = initialMessage + cartMessage;
    return encodeURIComponent(fullMessage);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-col fixed top-9 right-0 md:right-[15%] max-w-[447px] shadow-lg w-full  bg-white z-[9999] text-black/80 mt-[60px] pb-7">
      <div className="flex border-b-2 mx-4 border-black/20 ">
        <div aria-label="Carrito" onClick={() => setCartView(true)} className={`${!cartView ? 'bg-[#EFEFEF]' : ' bg-white'} text-light font-semibold text-center w-full text-xl py-3`}>
          Carrito
        </div>
        <button onClick={() => dispatch(toggleCartVisibility())}>
          <IoClose className="text-red-400/80 text-3xl font-bold hover:text-red-400 "/>
        </button>
        {/* <button aria-label="Favoritos" onClick={() => setCartView(false)} className={`${!cartView ? 'bg-[#EFEFEF]' : 'text-[#195984]/50 bg-[#D9D9D9]'} w-full text-xl font-medium py-3`}>
          Favoritos
        </button> */}
      </div>

      <ul className="max-h-[400px] overflow-auto space-y-3 px-4 pt-4">
      {
        cartView && cart.length === 0 && (
        <li className="flex flex-col items-center justify-center py-10">
          <span className="text-lg font-semibold mb-2">El carrito está vacío</span>
          <Link
          href={`${CUSTOMPATHS.CATALOG || "catalogo"}`}
          className="text-blue-600 underline"
          onClick={() => dispatch(toggleCartVisibility())}
          >
          Ir al catálogo
          </Link>
        </li>
        )
      }
      {
        cartView && cart.length > 0 && cart.map((item: any) => (
        <li key={item.product.id} className="flex gap-4 items-center border p-4 rounded-lg shadow-sm bg-[#EBEBEB]">
          <div className="w-20 h-20 relative">
          <Image
            src={item.product.images[0]?.url || "/placeholder.jpg"}
            alt={item.product.name}
            fill
            className="object-cover rounded-md"
          />
          </div>
          <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.product.name}</h3>
          <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
          {item.isCustomized ? (
            <p className="text-sm text-green-600 font-medium">Producto personalizado</p>
          ) : (
            // <p className="text-sm text-yellow-600">No personalizado</p>
            <div></div>
          )}
          <div className="flex gap-2 mt-2">
            <button className="bg-white px-3 py-1 rounded" onClick={() => dispatch(decreaseItemQuantity(item.product.id))}>-</button>
            <button className="bg-white px-3 py-1 rounded" onClick={() => dispatch(increaseItemQuantity(item.product.id))}>+</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => dispatch(removeItemFromCart(item.product.id))}>Eliminar</button>
            {/* <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => router.push(`/customize/${item.product.slug}`)}>Customizar</button> */}
          </div>
          </div>
        </li>
        ))
      }

      {
        !cartView && favItems.map((item: any, i: number) => (
        <li key={i}>
          <CartFavItem product={item} />
        </li>
        ))
      }
      </ul>

      {
      cartView && cart.length > 0 &&
      <Link
        // href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBERS.WHATSAPP_VENTAS}&text=${generateWhatsAppMessage()}`}
        href={`${CUSTOMPATHS.BUDGET}`}
        onClick={() => dispatch(setCartVisibility(false))}
        className="self-center text-2xl font-medium text-white mt-6 py-3 px-14 bg-light rounded-[10px]"
      >
        Ver mi presupuesto
      </Link>
      }
    </div>
  );
};

export default Cart;
