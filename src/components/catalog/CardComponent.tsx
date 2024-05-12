
import { CUSTOMPATHS } from '@/util/enums';
import { getPlaceholder } from '@/util/helpers/getPlaceholder';
import { Product } from '@/util/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ButtonComponent from '../ui/ButtonComponent';

import { IoIosLink } from "react-icons/io";
import { useCart } from '@/context/cart-context/cart-context';

interface CardCartComponentProps {
  data: Product;
  filtro: string | null
}

const CardComponent: React.FC<CardCartComponentProps> = ({data, filtro}) => {
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
    <div className='relative hover:shadow-lg  shadow-md p-2 pb-3'>
      <div className='relative peer   flex aspect-square items-center'>
        <img
          alt='Imagen de producto'
          className='w-full'
          src={data.img || `/assets/images/product/${image}/${image}.png`}
        />
        <Link  className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 expanded-link' href={`${CUSTOMPATHS.PRODUCT}?id=${data.id}&categoria=${filtro}`}>
          <IoIosLink className='text-4xl'/>
        </Link>
      </div>
      <div className='flex flex-col gap-3 peer-hover:[&>h5]:text-light'>
        <span className='truncate pt-2'>{data.supplier?.name}</span>
        <h5 className='hover:text-light cursor-pointer truncate '>{data.name}</h5>
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
        <div className='relative flex gap-1'>
          <Link className='bg-light lab-btn font-semibold px-4 py-1' href={`${CUSTOMPATHS.PRODUCT}?id=${data.id}&categoria=${filtro}`}><span>Consultar</span></Link>
          <ButtonComponent  onClickFunction={handleAddToCart} text="Cotizar"/>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
