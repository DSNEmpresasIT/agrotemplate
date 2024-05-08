
import { ProductFeature } from "@/util/types/types";
import React from "react";

interface Props {
  principalInfo: ProductFeature | null
}

const principalInfoData = [

  {
    name: 'Tipo de Maleza',
  }
  , {
    name: 'Momento de aplicación Cultivo',
  }
  , {
    name: 'Momento de Aplicación Malezas',
  }
  , {
    name: 'Forma de Acción.',
  }
  , {
    name: 'Lugar de Aplicación.',
  }

]

const technicalInfoData = [
  {
  name:'Modo de Acción',
  },
  {
    name: 'Sitio de acción',
  }
  , {
    name: 'Formulación',
  }
  , {
    name: 'Clasificación Toxicológica',
  }
  , {
    name: 'Presentación.',
  }
]

const principalInfo = ({principalInfo}: Props) => {
  return (
    <div className="review-showing">
        <ul className="flex flex-col  ">
            <li  className="p-4  border-b-2" >
                <div className="flex flex-col gap-2">
                    <h6 >Principio Activo</h6 >
                  <p>{principalInfo?.activeIngredient}</p>
              </div>
            </li>

          <li className="p-4 ">
        
            <div className="flex flex-col gap-2">
                    <h6 >Tipo de Maleza</h6 >
                  <p>{principalInfo?.weedType}</p>
              </div>
          </li>
          
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}}>Momento de aplicación Cultivo</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
               {principalInfo?.applicationTimingCrops}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Momento de Aplicación Malezas</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
              {principalInfo?.applicationTimingWeeds}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2">
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Forma de Acción.</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
                {principalInfo?.actionForm}
              </p>
            </div>
          </div>
        </li>
        <li className="p-4 border-2">
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Lugar de Aplicación.</h6>
              </div>
            </div>
            <div className="entry-content">
              <p>
                {principalInfo?.applicationLocation}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default principalInfo;
