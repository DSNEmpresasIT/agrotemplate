'use client'

import { useCart } from "@/context/cart-context/cart-context";
import { Product } from "@/util/types/types";
import Link from "next/link";
import NavDetails from "../product-single/product-details/navDetails";
import { RelatedProductsSection } from "../product-single/RelatedProductsSection";
import { TbShoppingCartQuestion } from "react-icons/tb";
import Banner from "../common/Banner";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailComponent = ({ product }: ProductDetailProps) => {

  const { cart, isVisible, addItemToCart, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();
  const sanitizeProductName = (name: any = product?.name) => {
    if (name) {
      return name.replace(/\//g, '')
    }
    return "producto desconocido"
  }
  return (
    <>
      <Banner title={`Producto ${sanitizeProductName(product?.name)}`}></Banner>
      <div className="flex flex-col flex-grow w-full  mx-auto max-w-[1200px] gap-20 mt-10 px-4">
        <section className="flex w-full   flex-col   justify-center  items-center  gap-20">
          <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-10 ">
            <div className="w-full ">
              {
                product?.images && (
                  <img
                    className='rounded object-contain h-[500px] aspect-[564/650]'
                    width="100%"
                    src={product.images[0]?.url ? product.images[0]?.url : '/assets/images/placeholder.png'}
                    alt="shop-single"
                  />
                )
              }

            </div>

            <div className="flex flex-col w-full  flex-grow justify-between">
              <div>
                <h1 className="text-black font-semibold text-2xl py-6" >{product?.name}</h1>
                <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                <p className="line-clamp-[15]">{product?.description}</p>
              </div>

              <div className=" flex flex-col gap-6">
                <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary'>Conseguí el mejor precio</p>
                <div className="flex gap-4">
                  <Link className='bg-light lab-btn font-semibold w-full px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${product?.name}`}><span className="text-center">Consultar</span></Link>
                  <button onClick={() => addItemToCart(product as Product)} className="bg-light justify-center lab-btn font-semibold w-full flex  px-2 py-4"><span className="flex  justify-center text-center">Agregar al cotizador<TbShoppingCartQuestion className="text-2xl " /></span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NavDetails data={product?.product_features}  ></NavDetails>
        <RelatedProductsSection productSelected={product} />
      </div>
    </>

  )
}
