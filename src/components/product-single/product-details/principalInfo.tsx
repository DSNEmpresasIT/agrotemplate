import React, { useState } from 'react';
import { Product_feature, ProductFeature } from '@/util/types/types';
import CustomPagination from '@/components/paginator/PaginatorComponent';

interface Props {
  principalInfo: Product_feature | null;
}

const PrincipalInfo = ({ principalInfo }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const principalInfoPerPage = 4;
  const getCurrentPagePrincipalInfo = () => {
    const startIndex = currentPage * principalInfoPerPage;
    const endIndex = startIndex + principalInfoPerPage;
    return principalInfo?.items.slice(startIndex, endIndex);
  };
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  return (
    <>
      <ul className="flex flex-col mt-7">
        {getCurrentPagePrincipalInfo()?.length ?? 0 > 0 ? (
          getCurrentPagePrincipalInfo()?.map((item, index) => (
            <li key={index} className="border-b border-b-[#B8B8B8]">
              <div className="grid grid-cols-2 md:grid-cols-[20%_1fr] md:gap-5 items-center">
                <h6 className="text-black font-semibold">{item.title}</h6>
                <p id={`${index}`} className={`text-slate-600 p-4 w-full bg-gray-200 
                  ${index === 0 ? 'rounded-t-[20px] rounded-tr-[20px]' : ''} 
                  ${index === (getCurrentPagePrincipalInfo()?.length ?? 0) - 1 ? 'rounded-b-[20px]' : ''}`}>
                    {item.text}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4">No hay características disponibles.</li>
        )}

      </ul>
      <CustomPagination 
        pageCount={Math.round(Math.ceil((principalInfo?.items?.length || 0) / principalInfoPerPage))} 
        onPageChange={handlePageChange}>
      </CustomPagination>
    </>
  );
};

export default PrincipalInfo;

