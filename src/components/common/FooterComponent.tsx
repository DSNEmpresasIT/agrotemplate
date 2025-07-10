'use client';

import Link from "next/link";
import React from "react";
import { LastInstagramReel } from "./footer/LastInstagramReel";
import { BestProducts } from "./footer/BestProducts";
import { InstagramGallery } from "./footer/InstagramGallery";
import { CUSTOMPATHS } from "@/util/enums";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaFacebookMessenger, FaDiscord, FaSnapchatSquare, FaFacebook } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { useGetCategoriesWithChildrenQuery } from "@/redux/service/category-api";
import { Category } from "@/util/types/types";

const FooterComponent = () => {

  const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);
  const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/css/bg-image/footer-top-bg.png)`,
  };

  return (
    <footer className="w-full">

      <div className="footer-grid w-full">
        <div className="footer-col-1 bg-cc-very-dark-green rounded-t-[30px] md:rounded-tl-none lg:rounded-tr-[50px] py-12 text-white">
          <div className="md:px-4 w-full">
            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row flex-wrap">
              <div className="xl:w-1/2 flex flex-col">
                <h3 className="text-size-item font-bold text-cc-light-green">Contactanos</h3>
                <span className="text-size-paragraph font-medium">Con sólo un click</span>
                <div className="flex flex-col gap-3 mt-5">

                  <Link href={CUSTOMPATHS.CONTACT} className="flex items-center hover:underline duration-200 transition-colors">
                    <div className="min-w-[40px]">
                      <ImLocation className="text-[20px]"/>
                    </div>
                    <div className="text-size-aux text-pretty">Gobernador Cresto 1475, Concordia E.R., Argentina.</div>
                  </Link>

                  <Link href={CUSTOMPATHS.CONTACT} className="flex items-center hover:underline duration-200 transition-colors">
                    <div className="min-w-[40px]">
                      <FaWhatsapp className="text-[20px]"/>
                    </div>
                    <div className="text-size-aux text-pretty">+54 9 3454 03-7365</div>
                  </Link>

                  <Link href={"mailto:fmmenendez@felixmenendez.com.ar"} className="flex items-center hover:underline duration-200 transition-colors">
                    <div className="min-w-[40px]">
                      <CiMail  className="text-[20px]"/>
                    </div>
                    <span className="text-size-aux text-pretty">fmmenendez@felixmenendez.com.ar</span>
                  </Link>

                </div>
              </div>
              <div className="xl:w-1/2 flex sm:mx-auto md:ms-0 mt-7 sm:mt-0 md:mt-7 xl:mt-0">
                <div className="flex flex-col gap-3 xl:mx-auto">
                  <h3 className="text-size-item font-bold text-cc-light-green">Encontrá tu insumo ideal</h3>
                  <ul className="flex flex-col gap-2">
                    {categories && categories.map((category: Category, index: number) => (
                      <li key={index} className="flex">
                        <Link href={`${CUSTOMPATHS.CATALOG}/${category.slug}`} className={`text-size-paragraph w-full text-white hover:underline`}>
                          {category.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:flex w-full text-white mt-10 text-size-paragraph">
                <span className="text-pretty">
                  © 2023 Felix Menéndez, Soluciones Agropecuarias by
                  <a href={"http://dsnempresas.com.ar"} target="_blank" className="ms-1 text-nowrap text-cc-light-green font-medium hover:underline">
                    DSN Empresas
                  </a>
                </span>
              </div>
            </div>
            
          </div>
        </div>
        <div className="footer-col-2 md:py-12 px-4 md:px-10 text-white md:text-[#3F5605] flex flex-col bg-cc-very-dark-green md:bg-transparent bg-red-500">
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col xl:w-1/2">
              <h3 className="text-size-item font-bold text-cc-light-green md:text-cc-green">Chequeá todas las novedades</h3>
              <div className="flex gap-4 text-[40px] mt-5">
                <div className="flex">
                  <a target="_blank" rel="noopener" className="hover:text-cc-light-green transition-colors duration-200" href={'https://www.facebook.com/solucionesagropecuariasintegrales'}>
                    <FaFacebook />
                  </a>
                </div>
                <div className="flex">
                  <a target="_blank" rel="noopener" className="hover:text-cc-light-green transition-colors duration-200" href={'https://www.instagram.com/felixmenendezsrl/'}>
                    <FaInstagram />
                  </a>
                </div>
                <div className="flex">
                  <a target="_blank" rel="noopener" className="hover:text-cc-light-green transition-colors duration-200" href={'https://www.youtube.com/@lafarmaciadelcampo'}>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-7 xl:mt-0 xl:w-1/2">
              <h3 className="text-size-item font-bold text-cc-light-green md:text-cc-green">Suscribite a nuestro newsletter</h3>
              <span className="text-size-paragraph font-medium">¡No te pierdas ninguna novedad!</span>
              <form className="flex flex-col gap-3 mt-3 max-w-[400px]">
                <input type="email" className="bg-[#D9D9D9] rounded-lg text-size-aux border-none focus:ring-cc-light-green" placeholder="Tu correo electrónico..."/>
                <input type="text" className="bg-[#D9D9D9] rounded-lg text-size-aux border-none focus:ring-cc-light-green" placeholder="Nombre y apellido..."/>
                <button type="submit" className="text-size-paragraph rounded-lg bg-cc-green hover:bg-cc-light-green transition-colors duration-200 text-white py-2">Suscribirme</button>
              </form>
            </div>
          </div>
          <div className="md:hidden flex justify-center w-full text-white my-10 text-size-paragraph">
            <span className="text-center text-pretty">
              © 2023 Felix Menéndez, Soluciones Agropecuarias by 
              <a href={"http://dsnempresas.com.ar"} target="_blank" className="ms-1 text-nowrap text-cc-light-green font-medium hover:underline">
                DSN Empresas
              </a>
            </span>
          </div>
        </div>
      </div>



      

      {/* <div className="w-full max-w-[1200px] mx-auto">
        <div className=" gap-6 grid md:grid-cols-2 lg:grid-cols-4 ">
          <div className=" ">
            {INSTAGRAM_TOKEN && (
              <LastInstagramReel INSTAGRAM_TOKEN={INSTAGRAM_TOKEN} />
            )}
          </div>
          <div className="">
            <h5 className="text-white text-lg  pb-4 font-semibold">
              Felix Menendez Soluciones Agropecuarias
            </h5>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <FaLocationDot className="text-2xl text-light"/>
                <Link className="text-white  hover:text-light" href={CUSTOMPATHS.CONTACT}>
                  Gobernador Cresto 1475, Concordia E.R., Argentina.
                </Link>
              </li>
              <li className="flex items-center  gap-3">
                <FaPhoneAlt className="text-lg text-light"/>
                <Link className="text-white   hover:text-light" href={""}>
                  +54 0345 421 1515, +54 9 3454 03-7365
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <IoIosMail className="text-2xl text-light"/>
                <Link className="text-white text-sm flex-wrap hover:text-light" href={"mailto:fmmenendez@felixmenendez.com.ar"}>
                  fmmenendez@felixmenendez.com.ar
                </Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <BestProducts />
          </div>
          <div className=" ">
            {INSTAGRAM_TOKEN && (
              <InstagramGallery INSTAGRAM_TOKEN={INSTAGRAM_TOKEN} />
            )}
          </div>
        </div>

        <div className="w-full flex justify-center border-t-1 border-white/50 mt-10 py-8 ">
          <Link href={"http://dsnempresas.com.ar"} target="_blank" className="text-white gap-2 items-center hover:text-light flex">
            © 2023 Felix Menéndez, Soluciones Agropecuarias by <img className="w-8 h-8 object-contain" src="/assets/images/logo/dsn.png" alt="Logo de la empresa" />
          </Link>
        </div>
      </div> */}
    </footer>
  );
};

export default FooterComponent;
