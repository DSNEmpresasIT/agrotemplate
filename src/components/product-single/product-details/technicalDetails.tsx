
import { ProductFeature } from '@/util/types/types'
import Link from 'next/link'
import React from 'react'

interface Props {
    technicalDetails: ProductFeature | null
}

enum TechnicalTypes {
  MODEOFACTION = 'modeOfAction',
  ACTIONSITE = 'actionSite',
  FORMULATION = 'formulation',
  TOXICOLOGICALCLASSIFICATION = 'toxicologicalClassification',
  PRESENTATION = 'presentation'
}

interface TechnicalDetail {
  name: string;
  type: TechnicalTypes;
}

const technicalDetailsData: TechnicalDetail[] = [
  {
    name: 'Modo de Acción',
    type: TechnicalTypes.MODEOFACTION,
  },
  {
    name: 'Sitio de acción',
    type: TechnicalTypes.ACTIONSITE,
  },
  {
    name: 'Formulación',
    type: TechnicalTypes.FORMULATION,
  },
  {
    name: 'Clasificación Toxicológica',
    type: TechnicalTypes.TOXICOLOGICALCLASSIFICATION,
  },
  {
    name: 'Presentación',
    type: TechnicalTypes.PRESENTATION,
  }
];

const technicalDetails = ({technicalDetails}: Props) => {
  return (
        <ul className="flex flex-col  ">
          {technicalDetailsData.map((feature, index) => (
              <li key={index}  className="p-4  border-b-2" >
                  <div className="flex flex-col ">
                      <h6 className='text-black font-semibold'>{feature.name}</h6 >
                    <p className='text-slate-600'>{technicalDetails && technicalDetails[feature.type]}</p>
                </div>
              </li>
          ))}
        </ul>
  )
}

export default technicalDetails
