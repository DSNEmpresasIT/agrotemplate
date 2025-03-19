import React from 'react';
import { Product_feature, ProductFeature } from '@/util/types/types';

interface Props {
  principalInfo: Product_feature | null;
}

const PrincipalInfo = ({ principalInfo }: Props) => {
  return (
    <ul className="flex flex-col">
      {principalInfo?.items && principalInfo.items.length > 0 ? (
        principalInfo.items.map((item, index) => (
          <li key={index} className="p-4 border-b-2">
            <div className="flex flex-col">
              <h6 className='text-black font-semibold'>{item.title}</h6>
              <p className='text-slate-600'>{item.text}</p>
            </div>
          </li>
        ))
      ) : (
        <li className="p-4">No hay información principal disponible.</li>
      )}
    </ul>
  );
};

export default PrincipalInfo;

