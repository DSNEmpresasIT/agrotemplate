
import { CUSTOMPATHS } from '@/util/enums';
import { getPlaceholder } from '@/util/helpers/getPlaceholder';
import { Product } from '@/util/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoIosLink } from "react-icons/io";
import { useCart } from '@/context/cart-context/cart-context';

interface CardCartComponentProps {
  data: Product;
  filtro?: string 
}

const CardComponent: React.FC<CardCartComponentProps> = ({data, filtro = ''}) => {
  const [image, setImage] = useState<string>("solubles");
  const { addItemToCart } = useCart();
  
  const handleAddToCart = () => {
    addItemToCart(data);
  };

  useEffect(() => {
    if (data.img) {
      setImage(data.img);
    } else {
      setImage(getPlaceholder(data.filters));
    }
  }, [data.img]);



  return (
    <div className='relative rounded-md hover:shadow-lg bg-white border border-black/10 hover:border-light/30   shadow-md p-3 pb-3'>
      <div className='relative peer   flex aspect-square items-center'>
        <img
          alt='Imagen de producto'
          className='w-full object-contain aspect-square '
          src={Array.isArray(data.images) && data.images.length > 0 ? data.images[0].url : `/assets/images/placeholder.png`}
        />
        <Link className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 expanded-link' href={`${CUSTOMPATHS.CATALOG}/${data.slug}.html`}>
          <IoIosLink className='text-4xl text-light'/>
        </Link>
      </div>
      <div className='flex flex-col gap-3 pb-2 peer-hover:[&>h5]:text-light'>
        <span className='truncate  text-gray-600'>{data.supplier?.name}</span>
        <h5 className='hover:text-light text-gray-600 cursor-pointer truncate font-semibold ps-4 text-lg'>{data.name}</h5>
        {data.formulacion && (
            <div className="flex justify-between">
              <span
              className='truncate'>
                <strong>
                  {data.is_active_substance
                    ? "Principio Activo"
                    : "Formulación"}
                  :
                </strong>
                {data.formulacion}
              </span>
            </div>
          )}
        {/* <div className='relative flex gap-1'>
          <Link className='bg-light lab-btn font-semibold px-4 py-1' href={`${CUSTOMPATHS.PRODUCT}?id=${data.id}&categoria=${filtro}`}><span>Consultar</span></Link>
          <ButtonComponent  onClickFunction={handleAddToCart} text="Cotizar"/>
        </div> */}
      </div>
    </div>
  )
}

export default CardComponent
