
import { CUSTOMPATHS } from '@/util/enums';
import { getPlaceholder } from '@/util/helpers/getPlaceholder';
import { Product } from '@/util/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../ui/ButtonComponent';
import { addToCart } from '../cart/cart-service';
import { IoIosLink } from "react-icons/io";

interface CardCartComponentProps {
  data: Product;
}

const CardComponent: React.FC<CardCartComponentProps> = ({data}) => {
  const [image, setImage] = useState<string>("solubles");

  useEffect(() => {
    if (data.img) {
      setImage(data.img);
    } else {
      setImage(getPlaceholder(data.filters));
    }
  }, [data.img]);

  const handleAddToCart = () => {
    addToCart(data);
  };
 

  return (
    <div className='min-h-[28rem]  relative hover:shadow-lg  shadow-md p-2'>
      <div className='relative peer max-h-[316px]  flex aspect-[4/3] items-center'>
        <img
          alt='Imagen de producto'
          className='w-full'
          src={data.img || `/assets/images/product/${image}/${image}.png`}
        />
     
        <Link  className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 expanded-link' href={`/${CUSTOMPATHS.PRODUCTS_PATH}?id=${data.id?.toString()}`}>
          <IoIosLink className='text-xl'/>
        </Link>
      </div>

      <div className='peer-hover:[&>h5]:text-light'>
        <span className='truncate'>{data.supplier?.name}</span>
        <h5 className='hover:text-light cursor-pointer truncate'>{data.name}</h5>
        {data.formulacion ? (
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
          ) : (
            <div className="p-2 my-1"></div>
          )}
        <div className='relative flex gap-1'>
          <Link className='bg-light lab-btn font-semibold px-4 py-1' href={`${CUSTOMPATHS.PRODUCTS_PATH}?id=${data.id?.toString()}`}><span>Consultar</span></Link>
          <ButtonComponent  onClickFunction={handleAddToCart} text="Cotizar"/>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
