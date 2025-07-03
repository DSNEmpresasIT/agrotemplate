'use client';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, toggleCartVisibility, setCartVisibility } from "@/redux/store/features/cartSlice";
import CartFavItem from "./CartFavItem";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiPlus, FiMinus } from "react-icons/fi";
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
    <div className="flex flex-col absolute top-[73px] mt-4 right-4 max-w-[447px] shadow-lg w-full bg-white rounded-2xl z-[9999] pb-7">
      <div className="flex border-b-2 mx-4 border-black/20 relative">
        <div aria-label="Carrito" onClick={() => setCartView(true)} className={`${!cartView ? 'bg-[#EFEFEF]' : ' bg-white'} text-cc-light-green font-semibold text-center w-full text-size-item py-3`}>
          Carrito
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2" onClick={() => dispatch(toggleCartVisibility())}>
          <IoClose className="text-cc-green text-3xl font-bold hover:text-cc-light-green transition-colors duration-200" />
        </button>
        {/* <button aria-label="Favoritos" onClick={() => setCartView(false)} className={`${!cartView ? 'bg-[#EFEFEF]' : 'text-[#195984]/50 bg-[#D9D9D9]'} w-full text-xl font-medium py-3`}>
          Favoritos
        </button> */}
      </div>

      <ul className="max-h-[400px] overflow-auto space-y-3 px-4 pt-4">
        {
          cartView && cart.length === 0 && (
            <li className="flex flex-col items-center justify-center py-10">
              <span className="text-size-paragraph text-cc-very-dark-green font-medium mb-2">El carrito está vacío</span>
              <Link
                href={`${CUSTOMPATHS.CATALOG || "catalogo"}`}
                className="text-cc-light-green underline text-size-paragraph"
                onClick={() => dispatch(toggleCartVisibility())}
              >
                Ir al catálogo
              </Link>
            </li>
          )
        }
        {
          cartView && cart.length > 0 && cart.map((item: any) => (
            <li key={item.product.id} className="flex gap-4 items-center border p-2 rounded-lg shadow-sm bg-[#EBEBEB]">
              <Link href={`${CUSTOMPATHS.CATALOG}/${item.product.slug}.html`}>
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.product.images[0]?.url || "/assets/images/placeholder.png"}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </Link>
              <div className="flex-1">
                <Link href={`${CUSTOMPATHS.CATALOG}/${item.product.slug}.html`}>
                  <h3 className="line-clamp-1 text-size-item font-medium text-cc-green hover:text-cc-light-green transition-colors duration-200">{item.product.name}</h3>
                </Link>
                <p className="text-size-aux text-gray-600">Cantidad: {item.quantity}</p>
                {item.isCustomized ? (
                  <p className="text-size-aux text-green-600 font-medium">Producto personalizado</p>
                ) : (
                  // <p className="text-sm text-yellow-600">No personalizado</p>
                  <div></div>
                )}
                <div className="flex gap-2 mt-2 text-cc-very-dark-green">
                  <button className="bg-white hover:bg-gray-100 transition-colors duration-200 px-3 py-1 rounded" onClick={() => dispatch(decreaseItemQuantity(item.product.id))}>
                    <FiMinus />
                  </button>
                  <button className="bg-white hover:bg-gray-100 transition-colors duration-200 px-3 py-1 rounded" onClick={() => dispatch(increaseItemQuantity(item.product.id))}>
                    <FiPlus />
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-size-paragraph text-white px-3 py-1 rounded" onClick={() => dispatch(removeItemFromCart(item.product.id))}>Eliminar</button>
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
          className="self-center text-size-paragraph font-medium text-white mt-6 py-2 px-14 bg-cc-green hover:bg-cc-light-green transition-colors duration-200 rounded-[10px]"
        >
          Ver mi presupuesto
        </Link>
      }
    </div>
  );
};

export default Cart;
