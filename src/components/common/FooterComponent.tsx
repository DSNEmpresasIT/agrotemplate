import Link from "next/link";
import React from "react";
import { LastInstagramReel } from "./footer/LastInstagramReel";
import { BestProducts } from "./footer/BestProducts";
import { InstagramGallery } from "./footer/InstagramGallery";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CUSTOMPATHS } from "@/util/enums";

const FooterComponent = () => {
  const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
  const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(/css/bg-image/footer-top-bg.png)`,
  };

  return (
    <footer
    
      style={sectionStyle}
      className="w-full bg-footer pt-20 md:pt-28 px-3 md:px-7"
    >
      <div className="w-full max-w-[1200px] mx-auto">
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
      </div>
    </footer>
  );
};

export default FooterComponent;
