import { CONTACT_INFO } from '@/util/enums'
import Link from 'next/link'
import React from 'react'

const whatsappComponent = () => {
  return (
    <div className='fixed bottom-0 left-0 z-[9999] px-10 pb-10  '>
      <Link  className='bg-[#25d366] rounded-lg p-2 w-14  h-14 flex justify-center items-center  relative' href={`https://api.whatsapp.com/send?phone=${
        CONTACT_INFO.PHONE_2
      }&text=`} target="_blank">
        <img src="/assets/images/icons/wpp-icon.png" alt="Whatsapp img" />
      </Link>
    </div>
  )
}

export default whatsappComponent
