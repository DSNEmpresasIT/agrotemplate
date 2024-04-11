"use client";
import { CUSTOMPATHS } from "@/util/enums";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarComponent = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [activeList, setActiveList] = useState<string | null>(null);

  const toggleList = (listId: string) => {
    setActiveList(activeList === listId ? null : listId);
  };



  return (
    <nav className="w-full z-[999] px-10 py-5 headerScroll fixed">
      <div className="mx-auto max-w-[1200px] w-full flex justify-between items-center">
        <div className="h-10 w-30 flex justify-start">
          <img src="assets/images/logo.png" className="" alt="sexoo" />
        </div>
        <div className="flex justify-end">
          <div className={`md:flex  ${isOpen ? "flex" : "hidden"} gap-5`}>
            <Link href={CUSTOMPATHS.HOME} rel="Canonical" className=" hover:text-light text-white">
              Home
            </Link>
            <Link href={CUSTOMPATHS.NEWS} className=" hover:text-light text-white">
              Noticias
            </Link>
            {(pathname != CUSTOMPATHS.PRODUCTS)&& (
 <div className="relative "> 
 <Link
   href={CUSTOMPATHS.PRODUCTS}
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
 <div className={`focus:flex hidden  absolute animate-flip-down  animate-ease-linear animate-duration-200 animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col  min-w-[200px] bg-light`}>
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
              <div className="absolute   animate-duration-200 focus:flex animate-flip-down animate-ease-linear animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col hidden min-w-[200px] bg-light">
                <Link
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  href={""}
                >
                  {" "}
                  <span className=" hover:translate-x-3  ">xx instagram </span>
                </Link>
                <Link
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  href={""}
                >
                  {" "}
                  <span className=" hover:translate-x-3  ">xx instagram </span>
                </Link>
                <Link
                  className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
                  href={""}
                >
                  {" "}
                  <span className=" hover:translate-x-3  ">xx instagram </span>
                </Link>
                <Link
                  className="text-start   px-4 py-3 text-white  hover:bg-white hover:text-light"
                  href={""}
                >
                  {" "}
                  <span className=" hover:translate-x-3  ">xx instagram </span>
                </Link>
              </div>
            </div>
          </div>

          <button
            className="group text-white flex md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            _°|°_
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
