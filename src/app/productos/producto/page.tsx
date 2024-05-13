'use client'

import Header from "@/components/common/header";
import { RelatedProductsSection } from "@/components/product-single/RelatedProductsSection";
import NavDetails from "@/components/product-single/product-details/navDetails";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { useCart } from "@/context/cart-context/cart-context";
import { getProductById } from "@/services/Supabase/product-services";
import { getProductSingleById } from "@/services/Supabase/productSingle-service";
import { CUSTOMPATHS } from "@/util/enums";
import { Product } from "@/util/types/types";
import { button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";

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
  downloadCommercialFlyer : string
}


const page =() => {
  const path  = useSearchParams().get("id");
  const categorie = useSearchParams().get("categoria")
  const [productSingle, setProductSingle] = useState<ProductFeature | null>(null);
  const [productSelected, setProduct] = useState<Product | null>(null)
  const { cart, isVisible, addItemToCart, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();
  


  const getProduct = async () => {
    try {
      
        const productById = await getProductById(path as string);
     
          setProduct(productById);
        
        
        console.log(productSelected)
      
    } catch (error) {
      console.error('Error fetching product by id:', error);
    }
  };

  const getProductSingle = async () => {
    try {
      const productSingle = await getProductSingleById(path as string);
      setProductSingle(productSingle);
      console.log(productSingle)
    } catch (error) {
      console.error('Error fetching product single:', error);
    }
  };

  useEffect(() => {
    if (path) {
      getProduct()
      getProductSingle();
    }
  }, [path]);

  const sanitizeProductName= (name : any = productSelected?.name) => {
    if(name){
      return name.replace(/\//g, '')
    }
    return "producto desconocido"
  }
 
  const rutas = [`${CUSTOMPATHS.CATALOG}`, `${sanitizeProductName(productSelected?.name)}`];

  return (
    <>
    <Header backLinks={rutas} title={`Producto Agropecuario`} seccion='Berardo'/>
    <div className="flex flex-col flex-grow w-full  mx-auto max-w-[1200px] gap-20 mt-10 px-4">
      <section className="flex w-full   flex-col   justify-center  items-center  gap-20">
        <div  className="grid grid-cols-1 sm:grid-cols-2  w-full gap-10 ">
            <div className="w-full ">
              <img
                className='rounded min-h-[600px]'
                width="100%"
                src={productSelected?.img ? productSelected?.img : '/assets/images/product/solubles/solubles.png'}
                alt="shop-single"
                />
            </div>

            <div className="flex flex-col w-full  flex-grow justify-between">
              <div>
                <h1 className="text-black font-semibold text-2xl py-6" >{productSelected?.name}</h1>
                <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                <p className="line-clamp-[15]">{productSingle?.description}</p>
              </div>
            
              <div className=" flex flex-col gap-6">
                <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary'>Conseguí el mejor precio</p>
                <div className="flex gap-4">
                <Link className='bg-light lab-btn font-semibold w-full px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${productSelected?.name}`}><span className="text-center">Consultar</span></Link>
                <button onClick={()=> addItemToCart(productSelected as Product)} className="bg-light justify-center lab-btn font-semibold w-full flex  px-2 py-4"><span className="flex  justify-center text-center">Agregar al cotizador<TbShoppingCartQuestion className="text-2xl "/></span></button>
                </div>
              </div>
            </div>
        </div>
      </section>    
     
      <NavDetails data={productSingle} categorie={categorie} ></NavDetails>
      <RelatedProductsSection productSelected={productSelected} categorie={categorie}/> 
    </div>
    </>
  )
}

export default page