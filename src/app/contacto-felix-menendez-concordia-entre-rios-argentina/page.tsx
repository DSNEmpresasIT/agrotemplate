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

    <div className=' min-h-screen  w-full ' >
      <Banner title='Sección de contacto' />
      <div className="flex flex-col px-5 max-w-[1568px] mx-auto mb-16 w-full">
        <div className='my-4 md:my-16'>
          <Backlinks rutas={rutas} />
        </div>

        <div className="flex flex-wrap justify-center gap-5 lg:flex-row mb-10">

            <Link href={"#map"} className="flex gap-2 group shadow-lg hover:shadow-xl py-5 max-w-[400px] w-full px-2 md:px-8 bg-white items-center">
              <div className="rounded-full w-14 h-14 items-center flex justify-center bg-[#1685ef] ">
                <FaLocationDot className='text-2xl text-white' />
              </div>
              <div className="flex  text-sm md:text-md text-gray-600 group-hover:text-light ">
                <p>Gobernador Cresto 1475,<br /> Concordia E.R., Argentina.</p>
              </div>
            </Link>

            <div className="flex gap-2 bg-white shadow-lg hover:shadow-xl py-5 max-w-[400px] w-full px-2 md:px-8 items-center">
              <div className="rounded-full w-14 h-14 items-center flex justify-center bg-light ">
                <FaPhone className='text-2xl text-white' />
              </div>
              <div className='flex flex-col'>
                <Link href={`tel:${CONTACT_INFO.PHONE}`} className='text-gray-600 text-sm md:text-md hover:text-light'>+54 0345 421 1515 </Link>
                <Link href={`tel:${CONTACT_INFO.PHONE}`} className='text-gray-600 text-sm md:text-md hover:text-light'>+54 9 3454 03-7365</Link>
              </div>
            </div>

          <Link href={`mailto:${CONTACT_INFO.EMAIL}`} className="bg-white flex flex-wrap max-w-[400px] w-full shadow-lg hover:shadow-xl group gap-2 py-5  px-2 md:px-8  items-center">
            <div className="rounded-full w-14 h-14 items-center flex justify-center bg-[#5ce1b9] ">
              <MdEmail className='text-2xl text-white' />

            </div>
            <div className="flex text-sm md:text-md  text-gray-600 group-hover:text-light ">
              <p className='overflow-hidden  '>{CONTACT_INFO.EMAIL}</p>
            </div>
          </Link>
        </div>


        <div id={'map'} className="flex flex-col lg:flex-row gap-5 w-full max-w-[1200px] mx-auto">

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9450.775398475274!2d-58.017337562175975!3d-31.382230819378755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade819af3cc247%3A0xfa3445b9df5c0fa!2sFelix%20Menendez%20S.R.L%20-%20Soluciones%20Agropecuarias!5e0!3m2!1ses!2sar!4v1690245314128!5m2!1ses!2sar"
              className='w-full border-0 h-[400px] lg:h-[500px]'
              // allowFullScreen={}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <FormContact keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }} />
        </div>

      </div>
      {/* <FormContactEmail keys={{ RECAPTCHA_KEY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, CONTACT_EMAILJS_TEMPLATE }} />  */}

      <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`}
        type="text/javascript"></script>
    </div>


  )
}

export default page
