import React, { useState } from 'react';
import { Product_feature, ProductFeature } from '@/util/types/types';
import CustomPagination from '@/components/paginator/PaginatorComponent';

interface Props {
  technicalDetails: Product_feature | null;
}

const TechnicalDetails = ({ technicalDetails }: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const technicalDetailsPerPage = 4;
  const getCurrentPageTechnicalDetails = () => {
    const startIndex = currentPage * technicalDetailsPerPage;
    const endIndex = startIndex + technicalDetailsPerPage;
    return technicalDetails?.specs.slice(startIndex, endIndex);
  };
  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  return (
    <>
      <ul className="flex flex-col mt-7">
        {getCurrentPageTechnicalDetails()?.length ?? 0 > 0? (
          getCurrentPageTechnicalDetails()?.map((spec, index) => (
            <li key={index} className="p-4 border-b-2">
              <div className="flex flex-col">
                <h6 className='text-black font-semibold'>{spec}</h6>
              </div>
            </li>
          ))
        ) : (
          <li className="p-4">No hay detalles técnicos disponibles.</li>
        )}
      </ul>
      <CustomPagination 
        pageCount={Math.round(Math.ceil((technicalDetails?.specs?.length || 0) / technicalDetailsPerPage))} 
        onPageChange={handlePageChange}>
      </CustomPagination>
    </>
  );
};

export default TechnicalDetails;

