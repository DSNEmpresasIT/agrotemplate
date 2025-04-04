'use client'
import Header from "@/components/common/header";
import { RelatedProductsSection } from "@/components/product-single/RelatedProductsSection";
import NavDetails from "@/components/product-single/product-details/navDetails";
import { useCart } from "@/context/cart-context/cart-context";
import { getCatalogSlug } from "@/services/api/catalog-service";

import { CUSTOMPATHS } from "@/util/enums";
import { Product } from "@/util/types/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useParams } from "next/navigation";

export interface ProductFeature {
  pdffiles: string,
  safetyDataSheet: string,
  description: string,
  modeOfAction: string,
  actionSite: string,
  formulation: string,
  toxicologicalClassification: string,
  presentation: string,
  activeIngredient: string,
  weedType: string,
  applicationTimingCrops: string,
  applicationTimingWeeds: string,
  actionForm: string,
  applicationLocation: string,
  downloadMarbete: string,
  downloadCommercialFlyer: string
}


const ProductPageComponent = () => {
  const { slug } = useParams();
  const categorie = useSearchParams().get("categoria")
  // const [productSingle, setProductSingle] = useState<ProductFeature | null>(null);
  const [productSelected, setProduct] = useState<Product | null>(null)
  const { cart, isVisible, addItemToCart, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();

  const getProduct = async () => {
    try {
      const productBySlug = await getCatalogSlug(slug as string)
      setProduct(productBySlug.data);
      console.log(productSelected)
    } catch (error) {
      console.error('Error fetching product by id:', error);
    }
  };

  useEffect(() => {
    if (slug) {
      getProduct()
    }
  }, [slug]);

  const sanitizeProductName = (name: any = productSelected?.name) => {
    if (name) {
      return name.replace(/\//g, '')
    }
    return "producto desconocido"
  }

  const rutas = [`${CUSTOMPATHS.CATALOG}`];

  return (
    <>
      <Header backLinks={rutas} title={`Producto ${sanitizeProductName(productSelected?.name)}`} seccion='Felix Menendez' />
      <div className="flex flex-col flex-grow w-full  mx-auto max-w-[1200px] gap-20 mt-10 px-4">
        <section className="flex w-full   flex-col   justify-center  items-center  gap-20">
          <div className="grid grid-cols-1 sm:grid-cols-2  w-full gap-10 ">
            <div className="w-full ">
              {
                productSelected?.images && (
                  <img
                    className='rounded object-contain h-[500px] aspect-[564/650]'
                    width="100%"
                    src={productSelected.images[0]?.url ? productSelected.images[0]?.url : '/assets/images/placeholder.png'}
                    alt="shop-single"
                  />
                )
              }

            </div>

            <div className="flex flex-col w-full  flex-grow justify-between">
              <div>
                <h1 className="text-black font-semibold text-2xl py-6" >{productSelected?.name}</h1>
                <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                <p className="line-clamp-[15]">{productSelected?.description}</p>
              </div>

              <div className=" flex flex-col gap-6">
                <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary'>Conseguí el mejor precio</p>
                <div className="flex gap-4">
                  <Link className='bg-light lab-btn font-semibold w-full px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${productSelected?.name}`}><span className="text-center">Consultar</span></Link>
                  <button onClick={() => addItemToCart(productSelected as Product)} className="bg-light justify-center lab-btn font-semibold w-full flex  px-2 py-4"><span className="flex  justify-center text-center">Agregar al cotizador<TbShoppingCartQuestion className="text-2xl " /></span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NavDetails data={productSelected?.product_features} categorie={categorie} ></NavDetails>
        <RelatedProductsSection productSelected={productSelected} categorie={categorie} />
      </div>
    </>
  )
}


const page = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ProductPageComponent />
    </Suspense>)
}

export default page