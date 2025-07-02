'use client';
import { Product } from '@/util/types/types';
import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart, toggleCartVisibility } from '@/redux/store/features/cartSlice';
import toast from 'react-hot-toast';
import ButtonComponent from '../ui/ButtonComponent';
import { clearFilters } from '@/redux/store/features/filterSlice';
import { CUSTOMPATHS } from '@/util/enums';
import { useRouter } from 'next/navigation';

interface CardCartComponentProps {
  data: Product;
  filtro?: string;
  catalogView?: boolean;
}

const CardComponent: React.FC<CardCartComponentProps> = ({ data, catalogView }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    dispatch(addItemToCart({
      product: data,
      quantity: 1,
    }));
    toast.success(() => (
      <span className="flex items-center gap-2 text-size-paragraph">
        Producto agregado al presupuesto
        <button
          onClick={() => dispatch(toggleCartVisibility())}
          className="bg-white px-2 py-1 rounded hover:underline"
        >
          Ver presupuesto
        </button>
      </span>
    ));
  };

  const handleGoToProduct = (slug:string) => {
    dispatch(clearFilters());
    router.push(`${CUSTOMPATHS.CATALOG}/${slug}.html`);
  };

  return (
    <div className='relative overflow-hidden max-w-[300px] w-full mx-auto rounded-2xl hover:shadow-lg border border-black/10 hover:border-cc-light-green/50 shadow-md flex flex-col bg-[#faf9f9]'>
      <div className='flex aspect-video md:aspect-square items-center'>
        <img
          alt='Imagen de producto'
          className='w-full object-contain aspect-video md:aspect-square'
          src={Array.isArray(data.images) && data.images.length > 0 ? data.images[0].url : `/assets/images/placeholder.png`}
        />
      </div>
      <div className="flex flex-col p-2 px-3 pb-4 justify-between h-full">
        <span className="line-clamp-2 text-gray-600">{data.supplier?.name}</span>

        <button
          onClick={() => handleGoToProduct(data.slug)}
          className={`hover:text-cc-light-green ${catalogView ? 'text-center' : 'text-start'} line-clamp-2 expanded-link text-size-item text-[#3F5605] cursor-pointer`}
        >
          {catalogView ? data.label : data.name}
        </button>

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
          <div className="flex mt-auto pt-3">
            <ButtonComponent onClickFunction={handleAddToCart} text="Cotizar" />
          </div>
        )}
      </div>

    </div>
  )
}

export default CardComponent
