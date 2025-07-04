import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CUSTOMPATHS } from "@/util/enums";

interface NotResultsComponentProps {
  slug: string;
}

const NotResultsComponent: React.FC<NotResultsComponentProps> = ({ slug }) => {
  return (
    <div className="">
      <div className="flex flex-col px-3 pb-20 pt-3">
        <h2 className="text-size-subtle text-gray-700 font-semibold mb-4">
          No encontramos resultados para tu búsqueda:{" "}
          <span className="text-cc-light-green">"{slug}"</span>
        </h2>
        <p className="text-gray-600 mb-6 text-size-paragraph">Algunas sugerencias:</p>
        <ul className="text-gray-500 text-start list-disc ps-4 mb-8 text-size-paragraph">
          <li>Revisa que las palabras estén bien escritas</li>
          <li>Intenta con menos palabras</li>
          <li>Usa palabras más generales</li>
          <li>Prueba con sinónimos</li>
        </ul>
        <div className="w-full max-w-4xl">
          <h3 className="text-size-item text-gray-700 font-semibold mb-4">
            Te sugerimos visitar algunas de las categorías más populares
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              href={`${CUSTOMPATHS.CATALOG}/proteccion-de-cultivo`}
              className="flex flex-col text-gray-700 group items-center"
            >
              <img
                src="/assets/images/categories/proteccionDeCultivo.png"
                alt="Protección de cultivo"
                className="w-full h-32 group-hover:border group-hover:border-cc-light-green/30  object-cover rounded"
              />

              <p className="mt-2 group-hover:text-cc-light-green font-medium text-size-paragraph">
                Protección de cultivo
              </p>
            </Link>
            <Link
              href={`${CUSTOMPATHS.CATALOG}/fertilizantes`}
              className="flex flex-col text-gray-700 group items-center"
            >
              <img
                src="/assets/images/categories/fertilizantes.png"
                alt="Fertilizantes"
                className="w-full group-hover:border group-hover:border-cc-light-green/30 h-32 object-cover rounded"
              />
              <p className="mt-2 group-hover:text-cc-light-green font-medium text-size-paragraph">
                Fertilizantes
              </p>
            </Link>
            <Link
              href={`${CUSTOMPATHS.CATALOG}/semillas`}
              className="flex flex-col text-gray-700 group items-center"
            >
              <img
                src="/assets/images/categories/semillas.png"
                alt="Semilllas"
                className="w-full h-32 group-hover:border group-hover:border-cc-light-green/30 object-cover rounded"
              />

              <p className="mt-2 group-hover:text-cc-light-green font-medium text-size-paragraph">
                Semilllas
              </p>
            </Link>
            <Link
              href={`${CUSTOMPATHS.CATALOG}/mas-insumos-agricolas`}
              className="flex flex-col text-gray-700 group items-center"
            >
              <img
                src="/assets/images/categories/masInSumosAgricolas.png"
                alt="Mas insumos agrícolas"
                className="w-full h-32 group-hover:border group-hover:border-cc-light-green/30 object-cover rounded"
              />

              <p className="mt-2 group-hover:text-cc-light-green font-medium text-size-paragraph">
                Mas insumos agrícolas
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotResultsComponent;
