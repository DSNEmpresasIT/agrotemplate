
import { ProductFeature } from "@/util/types/types";
import React from "react";


interface Props {
  principalInfo: ProductFeature | null
}

enum Types {
  WEEDTYPE = 'weedType',
  APPLICATIONTIMINGCROPS = 'applicationTimingCrops',
  APPLICATIONTIMINGWEEDS = 'applicationTimingWeeds',
  ACTIONFORM = 'actionForm',
  APPLICATIONLOCATION = 'applicationLocation'
}

interface Feature {
  name: string;
  type: Types;
}

const principalInfoData: Feature[] = [
  {
    name: 'Tipo de Maleza',
    type: Types.WEEDTYPE,
  },
  {
    name: 'Momento de aplicación Cultivo',
    type: Types.APPLICATIONTIMINGCROPS,
  },
  {
    name: 'Momento de Aplicación Malezas',
    type: Types.APPLICATIONTIMINGWEEDS,
  },
  {
    name: 'Forma de Acción.',
    type: Types.ACTIONFORM,
  },
  {
    name: 'Lugar de Aplicación.',
    type: Types.APPLICATIONLOCATION,
  }
];


const principalInfo = ({principalInfo}: Props) => {
  return (
        <ul className="flex flex-col  ">
          {principalInfoData.map((feature, index) => (
              <li key={index} className="p-4  border-b-2" >
                  <div className="flex flex-col ">
                      <h6 className='text-black font-semibold'>{feature.name}</h6 >
                    <p className='text-slate-600'>{principalInfo && principalInfo[feature.type]} asdsadadsds</p>
                </div>
              </li>
          ))}
        </ul>
  );
};

export default principalInfo;
