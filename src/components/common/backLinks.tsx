import Link from 'next/link';
import React from 'react';

interface BacklinksProps {
  rutas: string[];
}

const Backlinks: React.FC<BacklinksProps> = ({ rutas }) => {
 
  const generarBacklinks = (rutas: string[]) => {
    const backlinks = [{ nombre: 'Home', ruta: '/' }];
  
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
    <div>
      {backlinks.map((enlace, index) => (
        <span key={index} className='text-white '>
          <Link className={`text-2xl hover:text-light ${  index === (backlinks.length - 1) ? 'text-yellow-400' : 'text-white'}`} href={enlace.ruta}>{enlace.nombre}</Link>
          <span className='px-2'>{index < backlinks.length - 1 && '  /'}</span>
        </span>
      ))}
    </div>
  );
}

export default Backlinks;

