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
    <div className='pt-[74px]'>
      <div className="max-w-main-wrapper px-4 w-full mx-auto my-10">
        <h1 className="text-size-subtle mb-2 text-cc-green font-medium">
          Solicitud de presupuesto
        </h1>
        <Backlinks rutas={[`${CUSTOMPATHS.BUDGET}`]} />
      </div>
      <div className='max-w-main-wrapper w-full mx-auto sm:px-4'>
        <div className="w-full mx-auto text-light rounded-t-[30px] pt-10 pb-20 px-4 main-wrapper-gradient">
          <div className="text-black w-full mx-auto bg-[#5973140D] p-4 rounded-2xl max-w-[1300px]">
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
    </div>
  );
};
