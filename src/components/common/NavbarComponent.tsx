"use client";
import { useCart } from "@/context/cart-context/cart-context";
import { CONTACT_INFO, CUSTOMPATHS, SOCIAL_NETWORKS_LINKS } from "@/util/enums";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartComponent from "../cart/cartComponent";
import { IoMdMenu } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const NavbarComponent = () => {
  const pathname = usePathname();
  const { toggleCartVisibility } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const [activeList, setActiveList] = useState<string | null>(null);

  const toggleList = (listId: string) => {
    setActiveList(activeList === listId ? null : listId);
  };


  return (
    <nav className=" w-full z-[999] px-10 py-5 headerScroll fixed">
      <div className="mx-auto relative max-w-[1200px] w-full flex justify-between items-center">
        <div className="h-10 w-30 flex justify-start">
          <img src="assets/images/logo.png" className="" alt="imagen del logo de la empresa" />
        </div>
        <div className="flex  justify-end">
          <div className={`md:flex  ${isOpen ? "flex" : "hidden"} gap-5 items-center`}>
            <Link href={CUSTOMPATHS.HOME} rel="Canonical" className="pb-2 hover:text-light text-white">
              Home
            </Link>
            <Link href={CUSTOMPATHS.NEWS} className="pb-2 hover:text-light text-white">
              Noticias
            </Link>
            {(pathname != CUSTOMPATHS.CATALOG)&& (
            <div className="relative "> 
            <Link
              href={CUSTOMPATHS.CATALOG}
              className="peer hover:text-light text-white pb-2 flex items-center"
              onClick={() => toggleList('list1')}
            >
              Productos
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Link>
            <div className={`focus:flex hidden z-[9999] absolute animate-flip-down  animate-ease-linear animate-duration-200 animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col  min-w-[200px] bg-light`}>
              <Link
                className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                href={''}
              >
                
                <span className=" hover:translate-x-3  "> Semillas </span>
              </Link>
              <Link
                className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                href={""}
              >
              
                <span className=" hover:translate-x-3  ">
              
                  Proteccion de cultivo{" "}
                </span>
              </Link>
              <Link
                className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                href={""}
              >
              
                <span className=" hover:translate-x-3  ">
                  
                  Fertilizantes{" "}
                </span>
              </Link>
              <Link
                className="text-start   px-4 py-3 text-white  hover:bg-white hover:text-light"
                href={""}
              >
                
                <span className=" hover:translate-x-3  ">Varios </span>
              </Link>
            </div>
            </div>
            )}
           <Link href={CUSTOMPATHS.CONTACT} className="pb-2 hover:text-light text-white">
              Contacto
            </Link>
            <div className="relative ">
              <Link
                href={""}
                className="peer pb-2  hover:text-light text-white flex items-center"
              >
                Seguinos
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              <div className="absolute z-[9999] animate-duration-200 focus:flex animate-flip-down animate-ease-linear animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col hidden min-w-[200px] bg-light">
                <Link
                  target="_blank"
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  href={SOCIAL_NETWORKS_LINKS.FACEBOOK}
                  rel="noopener noreferrer"
                >
                  <span className=" hover:translate-x-3 flex items-center gap-2"><FaFacebook className="text-1xl"/> Facebook </span>
                </Link>
                <Link
                  target="_blank"
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  href={SOCIAL_NETWORKS_LINKS.INSTAGRAM}
                  rel="noopener noreferrer"
                >
                  <span className=" hover:translate-x-3  flex items-center gap-2"><FaInstagram className="text-1xl"/> instagram </span>
                </Link>
                <Link
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={SOCIAL_NETWORKS_LINKS.YOUTUBE}
                >
                  <span className=" hover:translate-x-3  flex items-center gap-2"><FaYoutube className="text-1xl"/> Youtube </span>
                </Link>
                <Link
                  className="text-start   px-4 py-3 text-white  hover:bg-white hover:text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={SOCIAL_NETWORKS_LINKS.LINKTREE}
                >
                  <span className=" hover:translate-x-3  flex items-center gap-2"><FaLink className="text-1xl"/> Linktree </span>
                </Link>
              </div>
            </div>
            
          
          </div>

           <div className=" flex flex-col justify-end mx-auto ">
                 <button onClick={()=> toggleCartVisibility()}  className="pb-2 px-2  hover:text-light text-white">Cotización</button>
                  <CartComponent/>
            </div>
            
          <button
            className="group text-white flex md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IoMdMenu className="text-2xl hover:text-light"/> 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
