import React, { useEffect, useState } from 'react';
import PrincipalInfo from './principalInfo';
import TechnicalDetails from './technicalDetails';
import Link from 'next/link';
import { Product, Product_feature, ProductFeature } from '@/util/types/types';
import { MdOutlineFileDownload } from "react-icons/md";
import CustomPagination from '@/components/paginator/PaginatorComponent';

interface Props {
  data?: Product_feature,
  categorie: string | null,
}

const NavDetails = ({data, categorie}: Props) => {
  const [activeTab, setActiveTab] = useState<string>('principal');

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  useEffect(() => {
    if (data) {
      renderContent();
    }
  }, [data]);
  
 
  const renderContent = () => {
    if(data){
    switch (activeTab) {
      case 'principal':
        return <PrincipalInfo principalInfo={data}/>;
      case 'technical':
        return <TechnicalDetails technicalDetails={data} />;
      default:
        return null;
    }
  }
  };

  return (
    <>
    <div className='flex flex-col'>
        <nav className='flex gap-3'>
          <button  
            onClick={() => handleTabClick('principal')}
            className={`border-b-3  border-b-light font-semibold  py-4 px-2 md:px-7 text-black hover:bg-light hover:text-white ${activeTab === 'principal' ? 'text-white bg-light' : ''}` }>
              <span className="text-center">Características</span>
          </button>
          <button  
            onClick={() => handleTabClick('technical')}
            className={` border-b-3 border-b-gray-500 font-semibold  py-2 px-2 md:px-7 ${activeTab === 'technical' ? 'text-white bg-gray-500' : 'text-black border-b hover:bg-gray-500 hover:text-white'}`}>
              <span className="text-center">Especificaciones</span>
          </button>

        </nav>
      
      <div className="flex flex-col gap-10 ">{renderContent()}
      {/* TODO: make a component for the downloads and call it here */}
              {/* <div className="flex flex-col gap-2">
                  <div className="review-title">
                      <h5>Descargas</h5>
                  </div>
                  <div className='flex gap-4 items-center'>
                  {data?.safetyDataSheet && (
                          <Link href={data?.safetyDataSheet} target='_blank' className=" flex  gap-1 hover:text-light"  type="submit"> <MdOutlineFileDownload className='group-hover:text-light text-2xl'/> Hoja de Seguridad.</Link >
                  )}
                  {data?.pdffiles && ( 
                          <Link href={data?.pdffiles}  target='_blank' className=" flex gap-1 items-center group hover:text-light" type="submit"><MdOutlineFileDownload className='group-hover:text-light text-2xl'/>  PDF </Link >
                  )}
                  {data?.downloadCommercialFlyer && ( 
                          <Link href={data?.downloadCommercialFlyer} target='_blank' className=" flex gap-1  hover:text-light" type="submit"><MdOutlineFileDownload className='group-hover:text-light text-2xl'/>  Descargar Flyer Comercial  </Link >
                  )}
                  {data?.downloadMarbete && ( 
                          <Link href={data?.downloadMarbete} target='_blank' className=" flex gap-1 hover:text-light" type="submit"><MdOutlineFileDownload className='group-hover:text-light text-2xl'/>  Descargar Marbete  </Link >
                  )}
                  </div>
              </div> */}
      </div>


  </div>


  </>
  );
};

export default NavDetails;

