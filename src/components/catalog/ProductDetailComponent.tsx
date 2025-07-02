'use client'

import { useCart } from "@/context/cart-context/cart-context";
import { Product } from "@/util/types/types";
import Link from "next/link";
import NavDetails from "../product-single/product-details/navDetails";
import { RelatedProductsSection } from "../product-single/RelatedProductsSection";
import { TbShoppingCartQuestion } from "react-icons/tb";
import Banner from "../common/Banner";
import { useDispatch } from "react-redux";
import { addItemToCart, toggleCartVisibility } from "@/redux/store/features/cartSlice";
import toast from "react-hot-toast";

import DOMPurify from "dompurify";
import SliderProductImg from "./SliderProductImg";
import SafeHTMLComponent from "../common/SafeHTMLComponent";
import BackLinks from "../common/backLinks";
import { CUSTOMPATHS } from "@/util/enums";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailComponent = ({ product }: ProductDetailProps) => {

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      product,
      quantity: 1,
    }));
    toast.success(() => (
      <span className="flex items-center gap-2">
        Producto agregado al presupuesto
        <button
          onClick={() => dispatch(toggleCartVisibility())}
          className="bg-white text- px-2 py-1 rounded text-sm hover:underline"
        >
          Ver presupuesto
        </button>
      </span>
    ));
  };
 
  const sanitizeProductName = (name: any = product?.name) => {
    if (name) {
      return name.replace(/\//g, '')
    }
    return "producto desconocido"
  }

  return (
    <>
      <Banner title={`Producto ${sanitizeProductName(product?.name)}`}></Banner>
      <div className="flex px-4 mx-auto max-w-wrapper pt-10">
        <BackLinks rutas={[CUSTOMPATHS.CATALOG, ...(product.categories?.map(category => category.slug).filter(slug => slug !== null) as string[] || []), product.slug]}></BackLinks>
      </div>
      <div className="flex flex-col flex-grow w-full mx-auto max-w-wrapper gap-20 mt-4 mb-20 px-4">
        <section className="flex w-full flex-col justify-center items-center gap-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-10 ">
            <div className="w-full">
              {
                product?.images && (
                  <SliderProductImg images={product.images}/>
                )
              }

            </div>

            <div className="flex flex-col w-full flex-grow justify-between">
              <div>
                <h1 className="text-black font-semibold text-size-subtle capitalize">{product?.name}</h1>
                {
                  product.description && 
                  <div className="mt-4">
                    <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                    <SafeHTMLComponent html={product.description}/>
                  </div>
                }
              </div>

              <div className=" flex flex-col gap-6">
                <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary'>Conseguí el mejor precio</p>
                <div className="flex flex-col lg:flex-row gap-4">
                  <Link className='bg-light lab-btn font-semibold w-full px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${product?.name}`}><span className="text-center">Consultar</span></Link>
                  <button onClick={handleAddToCart} className="bg-light justify-center lab-btn font-semibold w-full flex  px-2 py-4"><span className="flex  justify-center text-center">Agregar al presupuesto<TbShoppingCartQuestion className="text-2xl " /></span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NavDetails data={product?.product_features}  ></NavDetails>
        {/* <RelatedProductsSection productSelected={product} /> */}
      </div>
    </>

  )
}
