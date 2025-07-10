'use client'
import React, { FC, useState } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import ButtonComponent from '../ui/ButtonComponent';

interface FormContactProps {
  keys: Keys;
}

interface Keys { 
  RECAPTCHA_KEY: string;
   EMAILJS_PUBLIC_KEY: string; 
   EMAILJS_SERVICE: string;
   CONTACT_EMAILJS_TEMPLATE: string;
 }

const initialValues = {
  user_email: '',
  user_name: '',
  user_phone: '',
  message: ''
}

const FormContact:FC<FormContactProps> = ({ keys }) => {
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [data, setData] = useState(initialValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      data.user_email.length < 1 || 
      data.message.length < 1 || 
      data.user_name.length < 1 || 
      data.user_phone.length < 1
    ) {
      return alert('Todos los campos del formulario son obligatorios');
    }
    setShowCaptcha(true);
  }

  const handleChangeData = (input: any) => {
    setData({
      ...data,
      [input.target.name]: input.target.value
    });
  }

  const sendEmail = async(captchaValue: any) => {
    const params = {
      ...data,
      'g-recaptcha-response': captchaValue
    }
    
    await emailjs.send(
      keys.EMAILJS_SERVICE, 
      keys.CONTACT_EMAILJS_TEMPLATE, 
      params,
      keys.EMAILJS_PUBLIC_KEY, 
      // @ts-ignore: Unreachable code error
      'g-recaptcha-response'
    )
      .then(() => {
        alert('Mail enviado con éxito ✅')
        setData(initialValues);
        setShowCaptcha(false)
      })
      .catch(() => {
        alert('Ha ocurrido un error, intentelo mas tarde ⛔')
        setShowCaptcha(false)
      })

  }

  return (
    <div>
      <form className="flex  flex-col gap-3 max-w-[500px] w-full text-size-paragraph text-cc-very-dark-green" onSubmit={handleSubmit}>
        <div className='flex md:flex-row flex-col gap-2'>
          <input onChange={handleChangeData} className='border text-size-paragraph rounded-md border-none focus:ring-cc-light-green' type="text" name="user_name" value={data.user_name} placeholder="Nombre o empresa*" />
          <input onChange={handleChangeData} className='border text-size-paragraph rounded-md border-none focus:ring-cc-light-green' type="email" name="user_email" value={data.user_email} placeholder="Mail*" />
        </div>
        <input onChange={handleChangeData} className='border text-size-paragraph rounded-md border-none focus:ring-cc-light-green' type="text" name="user_phone" value={data.user_phone} placeholder="Telefono*" />
        <textarea onChange={handleChangeData} className='border text-size-paragraph rounded-md border-none focus:ring-cc-light-green' name="message" id="role" cols={30} rows={10} value={data.message} placeholder="Mensaje*"></textarea>
        {
          showCaptcha
          // @ts-ignore: Unreachable code error
          ? (<ReCAPTCHA sitekey={keys.RECAPTCHA_KEY}  onChange={sendEmail} />)
          : (
            <div className='max-w-[180px] w-full bg-red-200'>
              <ButtonComponent onClickFunction={() => handleSubmit} text='Enviar' />
            </div>            
          )
        }
      </form>
    </div>
  )
}

export default FormContact;
