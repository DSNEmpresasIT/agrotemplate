import React from 'react';
import { Product_feature, ProductFeature } from '@/util/types/types';

interface Props {
  technicalDetails: Product_feature | null;
}

const TechnicalDetails = ({ technicalDetails }: Props) => {
  return (
    <ul className="flex flex-col">
      {technicalDetails?.specs && technicalDetails.specs.length > 0 ? (
        technicalDetails.specs.map((spec, index) => (
          <li key={index} className="py-4 border-b-2">
            <div className="flex flex-col">
              <h6 className='text-black font-semibold'>{spec}</h6>
            </div>
          </li>
        ))
      ) : (
        <li className="p-4">No hay detalles técnicos disponibles.</li>
      )}
    </ul>
  );
};

export default TechnicalDetails;

