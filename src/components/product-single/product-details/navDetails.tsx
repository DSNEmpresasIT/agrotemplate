import React, { useEffect, useState } from 'react';
import PrincipalInfo from './principalInfo';
import TechnicalDetails from './technicalDetails';
import Link from 'next/link';
import { ProductFeature } from '@/util/types/types';
import ButtonComponent from '@/components/ui/ButtonComponent';

interface Props {
  data : ProductFeature | null,
  categorie: string | null,
  type: string | null
}

const NavDetails = ({data, categorie, type}: Props) => {
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
   
    switch (activeTab) {
      case 'principal':
        return <PrincipalInfo principalInfo={data}/>;
      case 'technical':
        return <TechnicalDetails technicalDetails={data} />;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="review">
        <nav className='flex gap-3'>
          <button onClick={() => handleTabClick('principal')}
          className={`bg-light lab-btn font-semibold  px-4 py-4 ${activeTab === 'principal' ? 'text-white bg-black' : ''}`}>
            <span className="text-center">Informacion Principal.</span>
          </button>
          <button  
            onClick={() => handleTabClick('technical')}
            className={`bg-light lab-btn font-semibold  px-4 py-4 ${activeTab === 'technical' ? 'text-white bg-black' : ''}`}>
              <span className="text-center">Detalles Tecnicos.</span>
          </button>

        </nav>
      
      <div className="">{renderContent()}
      {/* TODO: make a component for the downloads and call it here */}
      <div className="review-showing">
          <div className="client-review">
          <div className="review-form">
              <div className="review-title">
                  <h5>Descargas</h5>
              </div>
              <div className=' d-flex gap-2 '>
              {data?.safetyDataSheet && (
                      <Link href={data?.safetyDataSheet} className="btn btn-outline-warning  "  type="submit"><span><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="gray800" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="#495057"></path><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="white"></path></mask></svg></span> Hoja de Seguridad.</Link >
              )}
              {data?.pdffiles && ( 
                      <Link href={data?.pdffiles} className="btn btn-outline-warning " type="submit"> <span><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="gray800" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="#495057"></path><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="white"></path></mask></svg></span> PDF </Link >
              )}
              {data?.downloadCommercialFlyer && ( 
                      <Link href={data?.pdffiles} className="btn btn-outline-warning " type="submit"> <span><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="gray800" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="#495057"></path><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="white"></path></mask></svg></span> Descargar Flyer Comercial  </Link >
              )}
              {data?.downloadMarbete && ( 
                      <Link href={data?.pdffiles} className="btn btn-outline-warning " type="submit"> <span><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="gray800" ><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="#495057"></path><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z" fill="white"></path></mask></svg></span> Descargar Marbete  </Link >
              )}
              </div>
          </div>
      </div>
    </div>
      </div>

    </div>


  </>
  );
};

export default NavDetails;

