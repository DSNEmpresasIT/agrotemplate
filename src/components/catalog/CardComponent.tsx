import { Product } from '@/util/types/types';
import Link from 'next/link';
import React from 'react'
import { IoIosLink } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addItemToCart, toggleCartVisibility } from '@/redux/store/features/cartSlice';
import toast from 'react-hot-toast';
import ButtonComponent from '../ui/ButtonComponent';

interface CardCartComponentProps {
  data: Product;
  filtro?: string;
  catalogView?: boolean;
}

const CardComponent: React.FC<CardCartComponentProps> = ({ data, catalogView }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart({
      product: data,
      quantity: 1,
    }));
    toast.success(() => (
      <span className="flex items-center gap-2">
        Producto agregado al presupuesto
        <button
          onClick={() => dispatch(toggleCartVisibility())}
          className="bg-white text- px-2 py-1 rounded text-sm hover:underline"
        >
          Ver presupuesto
        </button>
      </span>
    ));
  };



  return (
    <div className='max-w-[300px] w-full mx-auto relative rounded-md hover:shadow-lg bg-white border border-black/10 hover:border-light/30   shadow-md p-3 pb-3'>
      <div className='relative peer flex aspect-video md:aspect-square items-center'>
        <img
          alt='Imagen de producto'
          className='w-full object-contain aspect-video md:aspect-square '
          src={Array.isArray(data.images) && data.images.length > 0 ? data.images[0].url : `/assets/images/placeholder.png`}
        />
        <Link className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 expanded-link' href={`${data.link ? data.link : data.slug + '.html'}`}>
          <IoIosLink className='text-4xl text-light' />
        </Link>
      </div>
      <div className="flex flex-col pt-1 justify-between min-h-[100px] ">
        <span className="truncate text-gray-600">{data.supplier?.name}</span>

        <h5
          className={`hover:text-light ${catalogView ? 'text-center' : 'text-start'} text-gray-600 cursor-pointer font-semibold ps-4 text-sm md:text-lg`}
        >
          {catalogView ? data.label : data.name}
        </h5>

        {data.formulacion && (
          <div className="flex justify-between">
            <span className="truncate">
              <strong>
                {data.is_active_substance ? "Principio Activo" : "Formulación"}:
              </strong>{" "}
              {data.formulacion}
            </span>
          </div>
        )}

        {!catalogView && (
          <div className="flex justify-end mt-auto pt-3">
            <ButtonComponent onClickFunction={handleAddToCart} text="Cotizar" />
          </div>
        )}
      </div>

    </div>
  )
}

export default CardComponent
