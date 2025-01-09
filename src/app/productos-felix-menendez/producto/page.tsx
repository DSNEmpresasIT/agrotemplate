'use client'
import Header from "@/components/common/header";
import { RelatedProductsSection } from "@/components/product-single/RelatedProductsSection";
import NavDetails from "@/components/product-single/product-details/navDetails";
import { useCart } from "@/context/cart-context/cart-context";
import { getProductById } from "@/services/api/products-service";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { CUSTOMPATHS } from "@/util/enums";
import { Product } from "@/util/types/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { TbShoppingCartQuestion } from "react-icons/tb";
import PreviewCarousel from "@/components/common/PreviewCarousel";
import { DescriptionComponent } from "@/components/description/descriptionComponent";

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


const ProductPageComponent =() => {
  const path  = useSearchParams().get("id");
  const categorie = useSearchParams().get("categoria")
  // const [productSingle, setProductSingle] = useState<ProductFeature | null>(null);
  const [productSelected, setProduct] = useState<Product | null>(null)
  const { cart, isVisible, addItemToCart, toggleCartVisibility, removeItemFromCart, decreaseItemQuantity, increaseItemQuantity } = useCart();
  const [index, setIndex] = useState(0)
  const swiperRef = useRef<any>();
  const handleThumbnailClick = (i: number = 1) => {
    setIndex(i);
    swiperRef.current?.slideTo(i);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const openDialog = (index: number = 1) => {
    setModalOpen(true);
    setIndex(index);
  };
  const getProduct = async () => {
    try {
      
        const productById = await getProductById(path as string);
        productById.images = productById.images.map((img: any, index: any) => {
          return {...img, index}
        })
          setProduct(productById);
      
    } catch (error) {
      console.error('Error fetching product by id:', error);
    }
  };



  useEffect(() => {
    if (path) {
      getProduct()
     
    }
  }, [path]);

  const sanitizeProductName= (name : any = productSelected?.name) => {
    if(name){
      return name.replace(/\//g, '')
    }
    return "producto desconocido"
  }
 
  const rutas = [`${CUSTOMPATHS.CATALOG}`];
  return (
    <>
    <Header backLinks={rutas} title={`Producto ${sanitizeProductName(productSelected?.name)}`} seccion='Felix Menendez'/>
    <div className="flex flex-col flex-grow w-full mx-auto max-w-[1200px] gap-20 mt-10 px-4">
      <section className="flex w-full flex-col justify-center items-center gap-20">
        <article className="grid grid-cols-1 md:grid-cols-2 w-full xl:gap-40 ">
            <div className="w-full flex flex-row gap-5">
              <div className="hidden xl:flex flex-col gap-2 ">
                {productSelected?.images?.slice(0, 3)?.map((img) =>
                  <img
                    key={img.index}
                    onClick={()=> handleThumbnailClick(img.index)}
                    className={`rounded object-contain cursor-pointer h-[100px] min-w-[100px] border-2 ${index === img.index ? 'border-[#FFB11F]' : ''}`}
                    src={img?.url ? img?.url : '/assets/images/placeholder.png'}
                    alt="shop-single"
                  />
                )}
                <div className={`${(productSelected?.images?.length ?? 0) > 3 ? 'relative' : 'hidden'}`}>
                  <img
                    key={4}
                    onClick={()=> handleThumbnailClick(4)}
                    className={`rounded object-contain h-[100px] cursor-pointer min-w-[100px]bg-[#FFB11F]`}
                    src={productSelected?.images?.[3]?.url ?? '/assets/images/placeholder.png'}
                    alt="shop-single"
                  />
                  <div 
                    onClick={() => openDialog(3)}
                    className="absolute rounded top-0 w-full h-full bg-[#FFB11F8F] border-1 border-[#FFB11F] flex items-center justify-center text-4xl text-white">
                    +{productSelected?.images?.slice(3).length}
                  </div>
                </div>
              </div>
              <div className="w-full">
                {  
                  productSelected?.images && (
                    <Swiper 
                      modules={[Navigation]} 
                      navigation onSwiper={(swiper) => (swiperRef.current = swiper)} 
                      onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
                    >
                        {productSelected.images.map((img) =>
                        <SwiperSlide>
                          <img
                            key={img.index}
                            className='rounded cursor-pointer object-contain h-[500px] aspect-[564/650] p-20'
                            width="100%"
                            src={img?.url ? img?.url : '/assets/images/placeholder.png'}
                            alt="shop-single"
                            onClick={() => openDialog(img.index)}
                          />
                        </SwiperSlide>)}
                    </Swiper>
                  )
                }
              </div>
            </div>

            <div className="flex flex-col w-full  flex-grow justify-between">
              <div>
                <h1 className="text-black font-semibold text-2xl py-6" >{productSelected?.name}</h1>
                <h3 className="text-black font-semibold pb-2  text-lg">Descripción del producto</h3>
                <DescriptionComponent className="line-clamp-[15]" description={productSelected?.description ?? ""}></DescriptionComponent>
              </div>
            
              <div className=" flex flex-col gap-6">
                <p className='border-b w-full border-slate-500/50 text-slate-500  border-bottom d-inline-flex w-100 border-secondary'>Conseguí el mejor precio</p>
                <div className="flex gap-4">
                <Link className='bg-light lab-btn font-semibold w-full px-4 py-4' href={`https://api.whatsapp.com/send?phone=5493454037365&text=Hola, me gustaría saber mas información sobre el producto ${productSelected?.name}`}><span className="text-center">Consultar</span></Link>
                <button onClick={()=> addItemToCart(productSelected as Product)} className="bg-light justify-center lab-btn font-semibold w-full flex  px-2 py-4"><span className="flex  justify-center text-center">Agregar al cotizador<TbShoppingCartQuestion className="text-2xl "/></span></button>
                </div>
              </div>
            </div>
            <PreviewCarousel 
              images={productSelected?.images ?? []}
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen} 
              setIndex={setIndex}  
              currentImageIndex={index}/>
        </article>
      </section>    
     
      <NavDetails data={productSelected?.product_features} categorie={categorie} ></NavDetails>
      <RelatedProductsSection productSelected={productSelected} categorie={categorie}/> 
    </div>
    </>
  )
}


const page = () =>{
  return (
    <Suspense fallback={<div>Cargando...</div>}> 
      <ProductPageComponent/>
    </Suspense>)
}

export default page