import Header from '@/components/common/header';
import FormContact from '@/components/contact/FormContact'
import { CONTACT_INFO, CUSTOMPATHS } from '@/util/enums';
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import Banner from '@/components/common/Banner';
import Backlinks from '@/components/common/backLinks';

const page = () => {
  const {
    RECAPTCHA_KEY = '',
    EMAILJS_PUBLIC_KEY = '',
    EMAILJS_SERVICE = '',
    CONTACT_EMAILJS_TEMPLATE = '',
    GOOGLE_MAP_KEY = ''
  } = process.env;

  const rutas = [`${CUSTOMPATHS.CONTACT}`];

  return (
    <div className='pt-[73px]'>
      {/* <Banner title='Sección de contacto' /> */}
      <div className="flex flex-col max-w-main-wrapper mx-auto mb-20 w-full px-4">
        <div className='my-10'>
          <h3 className="w-full mx-auto text-size-subtle font-medium text-cc-green">Contacto</h3>
          <Backlinks rutas={rutas} />
        </div>
        <div className='max-w-[1300px] w-full mx-auto grid md:grid-cols-2 gap-10'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3 text-cc-very-dark-green'>
              <h3 className='text-cc-green text-size-item'>Encontranos en</h3>
              <ul className='flex flex-col gap-3'>
                <li className='flex gap-3 items-center text-size-paragraph'>
                  <FaLocationDot className='text-cc-green text-size-item'/>
                  <span>Gobernador Cresto 1475, Concordia E.R., Argentina.</span>
                </li>
                <li className='flex gap-3 items-center text-size-paragraph'>
                  <FaPhone className='text-cc-green text-size-item'/>
                  <Link className='hover:text-cc-light-green' rel="stylesheet" href={`tel:${CONTACT_INFO.PHONE}`}>{CONTACT_INFO.PHONE}</Link>
                  <div className='w-[1px] h-full bg-cc-dark-green'></div>
                  <Link className='hover:text-cc-light-green' rel="stylesheet" href={`tel:${CONTACT_INFO.PHONE_2}`}>{CONTACT_INFO.PHONE_2}</Link>
                </li>
                <li className='flex items-center gap-3'>
                  <MdEmail className='text-cc-green text-size-item'/>
                  <Link className='hover:text-cc-light-green' href={`mailto:${CONTACT_INFO.EMAIL}`}>{CONTACT_INFO.EMAIL}</Link>
                </li>
              </ul>
            </div>
            <div id={'map'} className="flex flex-col lg:flex-row gap-5 w-full max-w-[1200px] mx-auto">
              <div className="w-full">
                <iframe
                  src='https://maps.google.com/maps?q=Felix%20Menendez%20S.R.L%20Soluciones%20Agropecuarias%2C%20Concordia&t=&z=16&ie=UTF8&iwloc=&output=embed'
                  className='w-full border-0 h-[400px] lg:h-[500px]'
                  // allowFullScreen={}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <FormContact keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }} />
          </div>
        </div>
      </div>
      {/* <FormContactEmail keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }} />  */}
      <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`} type="text/javascript"></script>
    </div>
  )
}

export default page
