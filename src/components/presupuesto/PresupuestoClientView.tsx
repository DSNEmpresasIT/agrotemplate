'use client';

import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { setCartVisibility } from '@/redux/store/features/cartSlice';
import { QuatationForm } from './QuatationForm';
import Backlinks from '../common/backLinks';
import { CUSTOMPATHS } from '@/util/enums';

export const PresupuestoClientView = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className='mb-20'>
      <div className="max-w-main-wrapper px-4 w-full mx-auto pt-[84px] md:pt-[113px] mb-2">
        <h1 className="text-size-subtle mb-2 text-cc-green font-medium">
          Solicitud de presupuesto
        </h1>
        <Backlinks rutas={[`${CUSTOMPATHS.BUDGET}`]} />
      </div>
      <div className="max-w-[1334px] w-full mx-auto px-4 mt-10 text-light">
        <div className="text-black w-full p-6 bg-white shadow rounded">
          {cart.length === 0 ? (
            <div className='text-size-paragraph'>
              <p className="text-gray-500">No hay productos en el carrito.</p>
              <Link
                href={`${CUSTOMPATHS.CATALOG || 'catalogo'}`}
                className="text-cc-light-green underline"
                onClick={() => dispatch(setCartVisibility(false))}
              >
                Ir al catálogo
              </Link>
            </div>
          ) : (
            <QuatationForm />
          )}
        </div>
      </div>
    </div>
  );
};
