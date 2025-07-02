'use client'

import { useCart } from "@/context/cart-context/cart-context";
import { Images, Product } from "@/util/types/types";
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
import { useEffect, useState } from "react";
import { getAttributes } from "@/services/api/attributes-service";
import PreviewCarousel from "../common/PreviewCarousel";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetailAttributes from "./ProductDetailAttributes";
import BackLinks from "../common/backLinks";
import { CUSTOMPATHS } from "@/util/enums";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailComponent = ({ product }: ProductDetailProps) => {

  const [productAttributes, setProductAttributes] = useState<any[]>([]);

  useEffect(() => {
    const fetchAttributes = async () => {
      if (!product?.id) return;
      try {
        const attributes = await getAttributes(product.id);
        setProductAttributes(attributes[0]);
      } catch (error) {
        console.error('Error obteniendo atributos del producto:', error);
      }
    };
    fetchAttributes();
  }, [product]);

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
          className="bg-white px-2 py-1 rounded text-size-paragraph hover:underline"
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
      <div className="flex flex-col flex-grow w-full mx-auto max-w-wrapper gap-20 mt-10 mb-20 px-4">
        <div className="flex w-full flex-col justify-center items-center gap-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-10 ">
            <div className="w-full">
              {
                product?.images && (
                  <SliderProductImg images={product.images}/>
                )
              }

            </div>
            <div className="relative pb-10">
              <div className="sticky top-[113px] flex flex-col gap-3 items-start">
                <div className="">nav links / nav links</div>
                {
                  product.description && (
                    <>
                      <h2 className="text-size-subtle font-medium text-cc-green">{product?.name}</h2>
                      <SafeHTMLComponent html={product.description} />
                    </>
                  )
                }
                <button onClick={handleAddToCart} className="px-10 mt-10 py-2 rounded-lg bg-cc-green text-white"><span className="flex justify-center text-center">Agregar al presupuesto<TbShoppingCartQuestion className="text-2xl ms-3" /></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
