'use client'

import { Product } from "@/util/types/types";
import Banner from "../common/Banner";
import SafeHTMLComponent from "../common/SafeHTMLComponent";
import { useEffect, useState } from "react";
import { getAttributes } from "@/services/api/attributes-service";
import ProductDetailImages from "./ProductDetailImages";
import ProductDetailAttributes from "./ProductDetailAttributes";
import BackLinks from "../common/backLinks";
import { CUSTOMPATHS } from "@/util/enums";
import { capitalizeFirst } from "@/util/helpers/strings";
import ProductDetailCartControls from "./ProductDetailCartControls";

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
                <ProductDetailCartControls product={product}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
