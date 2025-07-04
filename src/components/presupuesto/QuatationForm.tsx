'use client';
import React, { useState } from 'react'
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import Image from 'next/image';
import toast from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CartItem, decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from '@/redux/store/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { CONTACT_INFO } from '@/util/enums';
import { sendQuotationRequest } from '@/services/api/quatation-service';

type ClienteData = {
  nombre: string;
  email: string;
  telefono: string;
  localidad: string;
  cuit: string;
};

const schema = yup.object().shape({
  nombre: yup.string().required('El nombre completo es obligatorio.'),
  email: yup.string().email('Correo inválido.').required('El correo es obligatorio.'),
  telefono: yup
  .string()
  .required('El teléfono es obligatorio.')
  .matches(/^[0-9\s()+-]+$/, 'El teléfono debe contener solo números y símbolos válidos.')
  .min(5, 'El teléfono debe tener al menos 5 caracteres.'),
  localidad: yup.string().required('La localidad es obligatoria.'),
  cuit: yup
    .string()
    .matches(/^\d{11}$/, 'CUIT debe tener 11 dígitos.')
    .required('El CUIT es obligatorio.'),
});


export const QuatationForm = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [observaciones, setObservaciones] = useState<Record<string, string>>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ClienteData>({ resolver: yupResolver(schema) });


  const handleObservacionChange = (productId: string, value: string) => {
    setObservaciones((prev) => ({ ...prev, [productId]: value }));
  };

  const generarPDF = () => {
    const doc = new jsPDF();
    doc.text('Presupuesto solicitado', 14, 20);
    doc.text(`Nombre: ${watch('nombre')}`, 14, 30);
    doc.text(`Email: ${watch('email')}`, 14, 38);
    doc.text(`Teléfono: ${watch('telefono')}`, 14, 46);
    doc.text(`Localidad: ${watch('localidad')}`, 14, 54);
    doc.text(`CUIT: ${watch('cuit')}`, 14, 62);
    autoTable(doc, {
      startY: 65,
      head: [['Producto', 'Cantidad', 'Observaciones']],
      body: cart.map((item: CartItem) => [
        item.product.name ?? '-',
        item.quantity?.toString() ?? '-',
        observaciones[item.product.id]?.trim() || '-',
      ]),
      styles: { cellPadding: 2, fontSize: 10 },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 25, halign: 'center' },
        2: { cellWidth: 70 },
      },
    });

    doc.save('presupuesto.pdf');
  };

  const onSubmit = async (data: ClienteData) => {
    if (cart.length === 0) {
      toast.error('No hay productos en el presupuesto.');
      return;
    }

    if (!captchaToken) {
      toast.error('Por favor completa el reCAPTCHA.');
      return;
    }

    try {
      const payload = {
        ...data,
        items: cart.map((item: CartItem) => ({
          productId: item.product.id,
          productName: item.product.name,
          cantidad: item.quantity,
          observacion: observaciones[item.product.id] || '',
        })),
        captchaToken,
        sendTo: `${CONTACT_INFO.EMAIL}`,
      };

      await sendQuotationRequest(payload);
      toast.success('Presupuesto enviado correctamente a Félix Menéndez.');
    } catch (err) {
      console.error(err);
      toast.error('Hubo un error al enviar el presupuesto.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-2">
      <div className="w-full md:w-1/2 gap-3 flex flex-col">
        {cart.map((item: CartItem) => (
          <div key={item.product.id} className="border p-4 rounded shadow-sm">
            <div className="flex gap-4">
              <div className="w-24 h-24 relative">
                <Image
                  src={item.product.images?.[0]?.url || '/assets/images/placeholder.jpg'}
                  alt={item.product.name ?? 'Producto'}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold text-size-item">{item.product.name}</h2>
                <p className="text-size-aux">Cantidad: {item.quantity}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded"
                    onClick={() => dispatch(decreaseItemQuantity(item.product.id))}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-200 px-3 py-1 rounded"
                    onClick={() => dispatch(increaseItemQuantity(item.product.id))}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-size-paragraph"
                    onClick={() => dispatch(removeItemFromCart(item.product.id))}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>

            <textarea
              placeholder="Observaciones"
              className="w-full mt-2 p-2 border rounded"
              rows={2}
              value={observaciones[item.product.id] || ''}
              onChange={(e) =>
                handleObservacionChange(item.product.id.toString(), e.target.value)
              }
            />
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 relative"
      >
        <div className="sticky top-[100px] bg-gray-200 shadow rounded p-4">
          <div className="flex flex-col gap-1 pb-1">
            <h4 className='text-size-item'>Resumen del presupuesto</h4>
            <span className="text-size-paragraph text-gray-600">Ingresa tus datos</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Nombre completo"
                {...register('nombre')}
                className="p-2 border rounded w-full"
              />
              {errors.nombre && (
                <p className="text-red-600 text-size-aux">{errors.nombre.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                {...register('email')}
                className="p-2 border rounded w-full"
              />
              {errors.email && (
                <p className="text-red-600 text-size-aux">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="WhatsApp / Teléfono"
                {...register('telefono')}
                className="p-2 border rounded w-full"
              />
              {errors.telefono && (
                <p className="text-red-600 text-size-aux">{errors.telefono.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Localidad de entrega"
                {...register('localidad')}
                className="p-2 border rounded w-full"
              />
              {errors.localidad && (
                <p className="text-red-600 text-size-aux">{errors.localidad.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="CUIT"
                {...register('cuit')}
                className="p-2 border rounded w-full"
              />
              {errors.cuit && (
                <p className="text-red-600 text-size-aux">{errors.cuit.message}</p>
              )}
            </div>
          </div>

            <ReCAPTCHA
            sitekey={process.env.RECAPTCHA_KEY || ''}
            onChange={setCaptchaToken}
            className="mt-4 max-w-[100px]"
            />


          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={generarPDF}
              className="bg-green-500 text-white md:px-6 md:py-2 rounded hover:bg-green-500/80"
            >
              Generar y descargar PDF
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white md:px-6 md:py-2 rounded hover:bg-blue-500/80"
            >
              Enviar presupuesto a Félix Menéndez
            </button>
          </div>

          <p className="text-size-aux mt-2 text-gray-600">
            * Se le enviará un presupuesto con los precios por email y WhatsApp.
          </p>
        </div>
      </form>
    </div>
  )
}
