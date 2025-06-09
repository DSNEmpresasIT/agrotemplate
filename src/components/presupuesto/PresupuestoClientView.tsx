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
    <div className="bg-body min-h-screen">
      <div className="max-w-[1530px] px-5  w-full  mx-auto pt-[84px] md:pt-[150px] mb-2 text-light">
        <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl uppercase font-medium">
          Solicitud de presupuesto
        </h1>
        <Backlinks rutas={[`${CUSTOMPATHS.BUDGET}`]} />
      </div>
      <div className="max-w-[1334px] w-full mx-auto px-5 mt-[31px] text-light">
        <div className="text-black w-full p-6 bg-white shadow rounded">
          {cart.length === 0 ? (
            <div>
              <p className="text-gray-500">No hay productos en el carrito.</p>
              <Link
                href={`${CUSTOMPATHS.CATALOG || 'catalogo'}`}
                className="text-blue-600 underline"
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
