import { CUSTOMPATHS } from '@/util/enums';
import Link from 'next/link';
import React from 'react';

const CategorySection: React.FC = () => {
  return (
    <div className="bg-layout py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Lo mejor para tu producción
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div>
          <Link 
            href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes`} 
            title='Fertilizantes'  
            rel="noopener noreferrer"
            className="text-lg hover:text-light hover:underline">
            <h3 className="text-xl font-semibold hover:text-light hover:cursor-pointer">
              Fertilizantes
            </h3>
          </Link>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes&subCategoria=Granulados`}
                title="Granulados"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Granulados
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes&subCategoria=Liquidos`}
                title="Líquidos"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Líquidos
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes&subCategoria=Solubles`}
                title="Solubles"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Solubles
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link 
            href={`${CUSTOMPATHS.CATALOG}?categoria=Semillas`} 
            title="Semillas"  
            rel="noopener noreferrer"
            className="text-lg hover:text-light hover:underline">
            <h3 className="text-xl font-semibold hover:text-light hover:cursor-pointer">
              Semillas
            </h3>
          </Link>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Semillas&subCategoria=Maiz`}
                title="Maíz"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Maíz
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Semillas&subCategoria=Sorgo`}
                title="Sorgo"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Sorgo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link 
            href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo`} 
            title="Protección de Cultivo"  
            rel="noopener noreferrer"
            className="text-lg hover:text-light hover:underline">
            <h3 className="text-xl font-semibold hover:text-light hover:cursor-pointer">
              Protección de Cultivo
            </h3>
          </Link>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo&subCategoria=Fungicidas`}
                title="Fungicidas"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Fungicidas
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo&subCategoria=Insecticidas`}
                title="Insecticidas"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Insecticidas
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo&subCategoria=Herbicidas`}
                title="Herbicidas"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Herbicidas
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo&subCategoria=Coadyuvantes`}
                title="Coadyuvantes"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Coadyuvantes
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de Cultivo&subCategoria=Hormiguicidas`}
                title="Hormiguicidas"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Hormiguicidas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link 
            href={`${CUSTOMPATHS.CATALOG}?categoria=Más insumos agrícolas`} 
            title="Más insumos agrícolas"  
            rel="noopener noreferrer"
            className="text-lg hover:text-light hover:underline">
            <h3 className="text-xl font-semibold hover:text-light hover:cursor-pointer">
              Más insumos agrícolas
            </h3>
          </Link>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href={`${CUSTOMPATHS.CATALOG}?categoria=Más insumos agrícolas&subCategoria=Silo Bolsas`}
                title="Silo Bolsas"
                rel="noopener noreferrer"
                className="text-lg hover:text-light hover:underline">
                Silo Bolsas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

