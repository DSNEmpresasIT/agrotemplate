'use client'

import { Product } from "@/util/types/types";
import { RelatedProductsSection } from "../product-single/RelatedProductsSection";
import { TbShoppingCartQuestion } from "react-icons/tb";
import Banner from "../common/Banner";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, CartItem, decreaseItemQuantity, increaseItemQuantity, toggleCartVisibility } from "@/redux/store/features/cartSlice";
import toast from "react-hot-toast";
import SafeHTMLComponent from "../common/SafeHTMLComponent";
import { useEffect, useState } from "react";
import { getAttributes } from "@/services/api/attributes-service";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetailAttributes from "./ProductDetailAttributes";
import BackLinks from "../common/backLinks";
import { CUSTOMPATHS } from "@/util/enums";
import { FiPlus, FiMinus } from "react-icons/fi";
import { capitalizeFirst } from "@/util/helpers/strings";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailComponent = ({ product }: ProductDetailProps) => {

  const [productAttributes, setProductAttributes] = useState<any[]>([]);
  const cart = useSelector((state: any) => state.cart.cart);
  const productCart = cart.find((productCart: CartItem) => productCart.product.id === product.id);

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
      <Banner title={`${sanitizeProductName(product?.name)}`}></Banner>
      <div className="max-w-main-wrapper w-full px-4 mx-auto pt-10">
        <BackLinks rutas={[CUSTOMPATHS.CATALOG, ...(product.categories?.map(category => category.slug).filter(slug => slug !== null) as string[] || []), product.slug]}></BackLinks>
      </div>
      <div className="w-full mx-auto flex flex-col flex-grow">
        <div className="max-w-main-wrapper mx-auto w-full flex flex-grow px-4 mt-10">
          <div className="w-full mx-auto grid md:grid-cols-2 gap-10 main-wrapper-gradient p-10 rounded-t-[30px]">
            <div className="flex flex-col gap-10">
              <ProductDetailImages propsImages={product.images} />
              {
                productAttributes.length > 0 &&
                <ProductDetailAttributes productAttributes={productAttributes} />
              }
            </div>
            <div className="relative pb-10">
              <div className="sticky top-[113px] flex flex-col gap-3 items-start">
                {
                  product.description && (
                    <>
                      <h2 className="text-size-subtle font-medium text-cc-green">{capitalizeFirst(product?.name || '')}</h2>
                      <SafeHTMLComponent html={product.description} />
                    </>
                  )
                }
                <div className="flex gap-10 items-center">
                  <div className="flex flex-col">
                    <span className="text-size-item">Cantidad</span>
                    <span className="text-size-paragraph">{productCart && productCart.quantity ? productCart.quantity : 0} {productCart && productCart.quantity === 1? 'Unidad' : 'Unidades'}</span>
                  </div>
                  <div className="border border-cc-green rounded-[20px] text-size-subtle text-cc-very-dark-green px-4 flex items-center gap-4">
                    <button onClick={() => dispatch(decreaseItemQuantity(product.id))} className="hover:text-cc-green text-size-item">
                      <FiMinus />
                    </button>
                    <span>{productCart && productCart.quantity ? productCart.quantity : 0}</span>
                    <button onClick={handleAddToCart} className="hover:text-cc-green text-size-item">
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <button onClick={handleAddToCart} className="px-10 mt-10 py-2 rounded-lg bg-cc-green hover:bg-cc-light-green transition-colors duration-100 text-white"><span className="flex justify-center text-center">Agregar al presupuesto<TbShoppingCartQuestion className="text-2xl ms-3" /></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
