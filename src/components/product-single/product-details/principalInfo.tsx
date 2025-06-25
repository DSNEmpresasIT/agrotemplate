import React from 'react';
import { Product_feature, ProductFeature } from '@/util/types/types';

interface Props {
  principalInfo: Product_feature | null;
}

const PrincipalInfo = ({ principalInfo }: Props) => {
  return (
    <ul className="flex flex-col max-w-[900px] w-full mt-7">
      {principalInfo?.items && principalInfo.items.length > 0 ? (
        principalInfo.items.map((item, index) => (
          <li key={index} className="border-b-2 border-gray-300 group w-full last:border-none">
            <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-center w-full text-size-paragraph">
              <h6 className='text-black font-medium min-w-[200px] p-3 sm:p-0'>{item.title}</h6>
              <p className='text-slate-600 bg-[#d9d9d9]/40 sm:group-first:rounded-t-[20px] sm:group-last:rounded-b-[20px] p-3 w-full'>{item.text}</p>
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

