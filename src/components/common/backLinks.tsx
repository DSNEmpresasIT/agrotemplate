import { CUSTOMPATHS } from '@/util/enums';
import Link from 'next/link';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

interface BacklinksProps {
  rutas: string[];
}

const Backlinks: React.FC<BacklinksProps> = ({ rutas }) => {
 
  const generarBacklinks = (rutas: string[]) => {
    const backlinks = [{ nombre: 'Inicio', ruta: '/' }];
  
    for (let i = 0; i < rutas.length; i++) {
      const rutaActual = rutas[i];
      const nombrePagina = rutaActual.split('/').pop();
  
      if (nombrePagina !== undefined) { 
        const enlace = {
          nombre: nombrePagina.charAt(0).toUpperCase() + nombrePagina.slice(1),
          ruta: rutaActual
        };
        backlinks.push(enlace);
      }
    }
  
    return backlinks;
  };
  
  const backlinks = generarBacklinks(rutas);

  return (
    <div className='flex flex-wrap'>
      {backlinks.map((enlace, index) => (
        <span key={index} className='text-[#185983] flex items-center justify-center '>
            <Link className={`text-size-item hover:text-light ${  index === (backlinks.length - 1) ? 'text-[#185983]/60' : 'text-[#185983]'}`} href={`${enlace.ruta === CUSTOMPATHS.CATALOG ? '' : ''}${enlace.ruta}`}>{enlace.nombre}</Link>
          <span className='px-2 flex items-center'>{index < backlinks.length - 1 && <AiOutlineRight width={15} className='text-[#185983]' />}</span>
        </span>
      ))}
    </div>
  );
}

export default Backlinks;

