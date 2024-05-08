
import { ProductFeature } from '@/util/types/types'
import Link from 'next/link'
import React from 'react'

interface Props {
    technicalDetails: ProductFeature | null
}

const technicalDetails = ({technicalDetails}: Props) => {
  return (
    <div className="review-showing">
    <ul className="agri-ul content">
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on p-0 m-0">
                <h6 style={{lineHeight: '3px'}}>Modo de Acción</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>{technicalDetails?.modeOfAction}</p>
            </div>
          </div>
        </li>
        <li className="p-4 border-2">
          <div className="post-content ">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}}>Sitio de acción.</h6  >
              </div>
            </div>
            <div className="entry-content">
              <p>{technicalDetails?.actionSite}</p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}}>Formulación</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
                {technicalDetails?.formulation}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2" >
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Clasificación Toxicológica</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
                {technicalDetails?.toxicologicalClassification}
              </p>
            </div>
          </div>
        </li>
        <li  className="p-4 border-2">
          <div className="post-content">
            <div >
              <div className="posted-on">
                <h6 style={{lineHeight: '3px'}} >Presentación.</h6 >
              </div>
            </div>
            <div className="entry-content">
              <p>
                {technicalDetails?.presentation}
              </p>
            </div>
          </div>
        </li>
    </ul>
</div>
  )
}

export default technicalDetails
