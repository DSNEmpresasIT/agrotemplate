'use client'

import Header from "@/components/common/header";
import { RelatedProductsSection } from "@/components/product-single/RelatedProductsSection";
import NavDetails from "@/components/product-single/product-details/navDetails";
import ButtonComponent from "@/components/ui/ButtonComponent";
import { getProductById } from "@/services/Supabase/product-services";
import { getProductSingleById } from "@/services/Supabase/productSingle-service";
import { CUSTOMPATHS } from "@/util/enums";
import { Product } from "@/util/types/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const type = useSearchParams().get("type");
  const categorie = useSearchParams().get("categoria")
  const [productSingle, setProductSingle] = useState<ProductFeature | null>(null);
  const [productSelected, setProduct] = useState<Product | null>(null)
  const router = useRouter()

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

    <div className="flex flex-col mx-auto max-w-[1200px] gap-20 mt-10 px-4">
      {/* <!-- Shop Page Section start here --> */}

      <section className="flex w-full   flex-col   justify-center  items-center  gap-20">
             
                
                <div  className="flex   max-h-[600px]  w-full gap-10 ">
               
                    <div className="w-full ">
                      <img
                                    className='rounded min-h-[600px]'
                                    width="100%"
                                    src={productSelected?.img ? productSelected?.img : '/assets/images/product/solubles/solubles.png'}
                                    alt="shop-single"
                                  />
                    </div>

                  <div className="flex flex-col w-full  flex-grow justify-between">
                      
                      <div className="">
                      <h1 className="text-black font-semibold text-2xl py-6" >{productSelected?.name}</h1>
                      <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                        <p className="line-clamp-[15]">{productSingle?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero eos culpa perspiciatis aliquam provident, vitae ullam ipsa asperiores voluptate eum obcaecati ab repellat recusandae nostrum debitis similique voluptas aut doloribus labore magni temporibus blanditiis magnam! Voluptate, doloremque suscipit! Perferendis reiciendis esse blanditiis error deleniti nam hic dicta. Cumque maiores sequi molestias sit totam exercitationem doloremque, at quidem ipsam fugit ab. Enim sequi consequuntur soluta, iusto vero minima fuga officiis quia quas dolorem iure nesciunt voluptates eos eaque ad tempore quaerat veniam dignissimos dicta eius illum, voluptate repellendus, mollitia asperiores? Molestiae animi adipisci aliquid, ipsum fugit facere mollitia quas nihil ducimus totam itaque est perspiciatis porro. Ipsum odit rem doloremque aperiam facere eos minima deleniti impedit, ullam pariatur autem! Repellendus consequuntur voluptatum, quod veritatis dolores expedita nostrum temporibus laborum, numquam eveniet aperiam quos aliquid quisquam minus illo possimus officiis? Reprehenderit veritatis asperiores eveniet quas ipsa error dolores, repellendus ad nobis aliquid. Labore, aspernatur? Ea consequatur labore ratione nisi deserunt quibusdam eaque maiores. Natus similique aspernatur, laborum mollitia magnam ab debitis molestias, dolor consequuntur possimus esse vel ea labore, dicta dolore sint? Impedit, consequuntur a suscipit alias libero quibusdam ab quo itaque architecto accusantium placeat! Voluptate quia eos vero sequi dignissimos id mollitia error non, libero itaque! Dolore voluptatum dicta, ad eveniet officia possimus unde consectetur sit libero beatae ducimus temporibus nisi eius commodi illum modi vitae est soluta sint dolores delectus adipisci? Officia perferendis quis necessitatibus provident eveniet reprehenderit magnam possimus a aliquid odit ipsum fugiat cum vero, iusto pariatur vel minima alias quibusdam inventore ipsa, odio enim ratione? Officia molestias tempora ipsum, itaque explicabo quam eos doloremque a nobis, eligendi necessitatibus voluptas. Accusantium quibusdam asperiores ab, at sunt aliquid laborum dolorum unde dignissimos eligendi esse? Suscipit sit vitae explicabo iusto. Placeat quae laborum eum nisi eligendi, amet vero inventore fugiat nihil laudantium sint repudiandae alias ullam dolores quis incidunt non sed reiciendis, saepe commodi perferendis, deserunt provident? Minus fuga dicta eos animi. Corporis ea placeat sint reprehenderit sequi. Id ratione sed illo laudantium accusantium molestias consequuntur eius consequatur quisquam inventore sequi neque, minima mollitia optio. Quo, animi architecto quas quam nulla ipsam ducimus similique odio vel cum iure autem, mollitia provident dicta, sequi illum dolorum delectus optio illo in saepe praesentium itaque. Rerum tempore pariatur quis in numquam tempora quod cum, iste, iusto architecto officiis maiores vel aliquam magni sint molestiae eos cupiditate incidunt labore maxime suscipit itaque. Praesentium modi earum magni, maxime ipsum dignissimos iusto rerum perspiciatis. Quaerat unde cum repellat quod est, obcaecati mollitia voluptates autem quasi. Expedita, veniam omnis ipsa officia error non ea nam eius voluptatibus minima natus laboriosam iste fugit quae atque ut, a, magnam eveniet deserunt molestiae esse sequi exercitationem laudantium accusantium. Architecto, eveniet magnam animi modi nulla in, atque dolorum nobis exercitationem quam, at doloremque obcaecati. Alias commodi cum necessitatibus ab consequatur hic molestiae, sed tenetur harum fugiat quibusdam unde illum voluptas earum maxime inventore porro temporibus error! Enim id rem numquam mollitia odit at eaque nulla vitae dolorum, cumque culpa adipisci.</p>

                      </div>
                    
                     
                      <div className=" flex flex-col gap-6">
                        <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary ' >Conseguí el mejor precio</p>
                        <Link className='bg-light lab-btn font-semibold  px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${productSelected?.name}`}><span className="text-center">Consultar</span></Link>
                      </div>
                    </div>
                </div>
              
      </section>    
      <div>
                <NavDetails data={productSingle} categorie={categorie} type={type} ></NavDetails>
               <RelatedProductsSection productSelected={productSelected} categorie={categorie} type={type}/> 
                </div>
     
    </div>
    </>
  )
}

export default page