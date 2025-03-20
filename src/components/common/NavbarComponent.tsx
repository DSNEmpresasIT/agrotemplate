"use client";
import { useCart } from "@/context/cart-context/cart-context";
import { CUSTOMPATHS } from "@/util/enums";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import CartComponent from "../cart/cartComponent";
import { IoMdMenu } from "react-icons/io";
import { TbShoppingCartQuestion } from "react-icons/tb";

const NavbarComponent = () => {
  const pathname = usePathname();
  const { toggleCartVisibility, cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [activeList, setActiveList] = useState<string | null>(null);

  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(
        `/productos-felix-menendez?search=${encodeURIComponent(query)}`
      );
    }
  };

  const toggleList = (listId: string) => {
    setActiveList(activeList === listId ? null : listId);
  };

  return (
    // <nav className={`w-full z-[999] px-10 py-3 headerScroll fixed ${isOpen && "bg-[#181818]"}`}>
    //   <div className={`mx-auto relative max-w-[1200px] w-full flex  justify-between ${isOpen ? "items-start" : 'items-center'}  `}>
    //     <div className=" w-40 flex justify-start">
    //       <img src="assets/images/logo/01.png"   alt="imagen del logo de la empresa" />
    //     </div>
    //     <div className="flex  justify-end">
    //       <div className={`md:flex flex-col flex-wrap  md:flex-row  ${isOpen ? "flex " : "hidden"} gap-5 items-center`}>
    //         <Link href={CUSTOMPATHS.HOME} rel="Canonical" className="pb-2 hover:text-light text-white">
    //           Inicio
    //         </Link>
    //         {(pathname != CUSTOMPATHS.CATALOG)&& (
    //         <div className="relative ">
    //         <Link
    //           rel="Canonical"
    //           href={CUSTOMPATHS.CATALOG}
    //           className="peer hover:text-light text-white pb-2 flex items-center"
    //           onClick={() => toggleList('list1')}
    //         >
    //           Productos
    //           <svg
    //             className="w-2.5 h-2.5 ms-3"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 10 6"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="m1 1 4 4 4-4"
    //             />
    //           </svg>
    //         </Link>
    //         <div className={`focus:flex hidden z-[9999] absolute animate-flip-down  animate-ease-linear animate-duration-200 animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col  min-w-[200px] bg-light`}>
    //           <Link
    //             className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //             href={`${CUSTOMPATHS.CATALOG}?categoria=Semillas`}
    //           >

    //             <span className=" hover:translate-x-3  "> Semillas </span>
    //           </Link>
    //           <Link
    //             className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //             href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de cultivo`}
    //           >

    //             <span className=" hover:translate-x-3  ">
    //               Proteccion de cultivo
    //             </span>
    //           </Link>
    //           <Link
    //             className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //             href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes`}
    //           >
    //             <span className=" hover:translate-x-3  ">
    //               Fertilizantes
    //             </span>
    //           </Link>
    //           <Link
    //             className="text-start   px-4 py-3 text-white  hover:bg-white hover:text-light"
    //             href={`${CUSTOMPATHS.CATALOG}?categoria=Mas insumos agrícolas"`}
    //           >
    //             <span className=" hover:translate-x-3  ">Varios </span>
    //           </Link>
    //         </div>
    //         </div>
    //         )}
    //         <Link href={CUSTOMPATHS.NEWS} rel="Canonical" className="pb-2 hover:text-light text-white">
    //           Noticias
    //         </Link>
    //         <Link href={CUSTOMPATHS.GALLERY} rel="Canonical" className="pb-2 hover:text-light text-white">
    //           Galeria
    //         </Link>
    //        <Link href={CUSTOMPATHS.CONTACT} className="pb-2 hover:text-light text-white">
    //           Contacto
    //         </Link>
    //         <div className="relative ">
    //           <Link
    //             href={""}
    //             className="peer pb-2  hover:text-light text-white flex items-center"
    //           >
    //             Seguinos
    //             <svg
    //               className="w-2.5 h-2.5 ms-3"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 10 6"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="m1 1 4 4 4-4"
    //               />
    //             </svg>
    //           </Link>
    //           <div className="absolute z-[9999] animate-duration-200 focus:flex animate-flip-down animate-ease-linear animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col hidden min-w-[200px] bg-light">
    //             <Link
    //               target="_blank"
    //               className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //               href={SOCIAL_NETWORKS_LINKS.FACEBOOK}
    //               rel="noopener noreferrer"
    //             >
    //               <span className=" hover:translate-x-3 flex items-center gap-2"><FaFacebook className="text-1xl"/> Facebook </span>
    //             </Link>
    //             <Link
    //               target="_blank"
    //               className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //               href={SOCIAL_NETWORKS_LINKS.INSTAGRAM}
    //               rel="noopener noreferrer"
    //             >
    //               <span className=" hover:translate-x-3  flex items-center gap-2"><FaInstagram className="text-1xl"/> instagram </span>
    //             </Link>
    //             <Link
    //               className="text-start   px-4 py-3 text-white border-b-1 border-white hover:bg-white hover:text-light"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               href={SOCIAL_NETWORKS_LINKS.YOUTUBE}
    //             >
    //               <span className=" hover:translate-x-3  flex items-center gap-2"><FaYoutube className="text-1xl"/> Youtube </span>
    //             </Link>
    //             <Link
    //               className="text-start   px-4 py-3 text-white  hover:bg-white hover:text-light"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               href={SOCIAL_NETWORKS_LINKS.LINKTREE}
    //             >
    //               <span className=" hover:translate-x-3  flex items-center gap-2"><FaLink className="text-1xl"/> Linktree </span>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className={`flex  flex-col justify-end mx-auto`}>
    //           <button onClick={()=> toggleCartVisibility()}  className="pb-2 px-2 flex items-center hover:text-light gap-2 text-white">Cotización
    //            {(cart.length > 0) && <span className="rounded-full bg-light text-white p-1 px-2 flex items-center  gap-2">{cart.length} <TbShoppingCartQuestion className="md:text-2xl"/></span>}</button>
    //            <CartComponent/>
    //      </div>

    //       </div>

    //           <div className={`${isOpen ? 'hidden' : 'flex '} md:hidden flex-col justify-end mx-auto`}>
    //           <button onClick={()=> toggleCartVisibility()}  className="pb-2 px-2 flex items-center hover:text-light gap-2 text-white">Cotización
    //            {(cart.length > 0) && <span className="rounded-full bg-light text-white p-1 px-2 flex items-center  gap-2">{cart.length} <TbShoppingCartQuestion className="md:text-2xl"/></span>}</button>
    //            <CartComponent/>
    //      </div>

    //       <button
    //         className="group text-white flex md:hidden"
    //         onClick={() => {
    //           setIsOpen(!isOpen);
    //         }}
    //       >
    //         <IoMdMenu className="text-2xl hover:text-light"/>
    //       </button>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className={`w-full z-[999] justify-between flex md:pt-3 pt-6 px-10 py-3 headerScroll fixed ${
        isOpen && "bg-[#181818]"
      }`}
      aria-label="Main Navigation"
    >
      <div
        className={`mx-auto relative max-w-[1200px] w-full flex justify-between ${
          isOpen ? "items-start" : "items-center"
        }`}
      >
        <div className="w-40 pe-2 hidden md:flex justify-start">
          <img
            src="/assets/images/logo/01.png"
            alt="Logo de la empresa"
            title="Logo de la empresa"
          />
        </div>

        {pathname == CUSTOMPATHS.HOME && (
          <form
            onSubmit={handleSubmit}
            className={`flex md:w-1/3 justify-center ms-auto  md:flex w-1/2 md:flex-row ${
              isOpen ? "flex" : "hidden"
            } rounded-lg bg-white/50`}
          >
            <button type="submit" className="w-[30px]">
              <svg
                className="fill-[#8E8E93] peer-focus:fill-[#ffb11f] ps-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            <input
              className="w-full bg-transparent appearance-none border-none focus:outline-none focus:ring-0"
              type="search"
              name="search"
              id="search"
              placeholder="¿Qué está buscando?"
              value={query}
              onChange={handleInputChange}
            />
          </form>
        )}

        <div className="flex ps-2 ms-auto justify-end">
          <ul
            className={`md:flex flex-col md:w-auto justify-end flex ms-auto w-1/2 md:flex-row ${
              isOpen ? "flex" : "hidden"
            } gap-5 items-center`}
          >
            <li>
              <Link
                href={CUSTOMPATHS.HOME}
                rel="canonical"
                className="pb-2 hover:text-light text-white"
                title="Inicio"
              >
                Inicio
              </Link>
            </li>

            {pathname !== CUSTOMPATHS.CATALOG && (
              <li className="relative">
                <Link
                  href={CUSTOMPATHS.CATALOG}
                  rel="canonical"
                  className="peer  hover:text-light text-white  flex items-center"
                  title="Catálogo de productos"
                  onClick={() => toggleList("list1")}
                >
                  Catálogo
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
                <ul className="focus:flex hidden z-[9999] absolute animate-flip-down animate-ease-linear animate-duration-200 animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col min-w-[200px] bg-light">
                  <li className="flex border-b-1 border-white hover:bg-white">
                    <Link
                      href={`${CUSTOMPATHS.CATALOG}?categoria=Semillas`}
                      className="text-start px-4 py-3 text-white  hover:bg-white hover:text-light"
                      title="Semillas"
                    >
                      <span className="hover:translate-x-3">Semillas</span>
                    </Link>
                  </li>
                  <li className="flex border-b-1 border-white hover:bg-white">
                    <Link
                      href={`${CUSTOMPATHS.CATALOG}?categoria=Protección de cultivo`}
                      className="text-start px-4 py-3 text-white   hover:bg-white hover:text-light"
                      title="Protección de cultivo"
                    >
                      <span className="hover:translate-x-3">
                        Protección de cultivo
                      </span>
                    </Link>
                  </li>
                  <li className="flex border-b-1 border-white hover:bg-white">
                    <Link
                      href={`${CUSTOMPATHS.CATALOG}?categoria=Fertilizantes`}
                      className="text-start px-4 py-3 text-white   hover:bg-white hover:text-light"
                      title="Fertilizantes"
                    >
                      <span className="hover:translate-x-3">Fertilizantes</span>
                    </Link>
                  </li>
                  <li className="flex hover:bg-white">
                    <Link
                      href={`${CUSTOMPATHS.CATALOG}?categoria=Mas insumos agrícolas`}
                      className="text-start px-4 py-3 text-white hover:bg-white hover:text-light"
                      title="Más insumos agrícolas"
                    >
                      <span className="hover:translate-x-3">Varios</span>
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {/* <li>
              <Link
                href={CUSTOMPATHS.NEWS}
                rel="canonical"
                className="pb-2 hover:text-light text-white"
                title="Noticias"
              >
                Noticias
              </Link>
            </li> */}
            <li>
              <Link
                href={CUSTOMPATHS.GALLERY}
                rel="canonical"
                className="pb-2 hover:text-light text-white"
                title="Galería"
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                href={CUSTOMPATHS.CONTACT}
                className="pb-2 hover:text-light text-white"
                title="Contacto"
              >
                Sobre nosotros
              </Link>
            </li>
            {/* <li className="relative">
          <Link href={""} className="peer pb-2 hover:text-light text-white flex items-center" title="Seguinos">
            Seguinos
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </Link>
          <ul className="absolute z-[9999] animate-duration-200 focus:flex animate-flip-down animate-ease-linear animate-alternate animate-fill-forwards peer-hover:flex hover:flex flex-col hidden min-w-[200px] bg-light">
            <li className="flex border-b-1 border-white hover:bg-white">
              <Link target="_blank" href={SOCIAL_NETWORKS_LINKS.FACEBOOK} className="text-start px-4 py-3 text-white  hover:text-light" rel="noopener noreferrer" title="Facebook">
                <span className="hover:translate-x-3 flex items-center gap-2"><FaFacebook className="text-1xl" />Facebook</span>
              </Link>
            </li>
            <li className="flex border-b-1 border-white hover:bg-white">
              <Link target="_blank" href={SOCIAL_NETWORKS_LINKS.INSTAGRAM} className="text-start px-4 py-3 text-white  hover:text-light" rel="noopener noreferrer" title="Instagram">
                <span className="hover:translate-x-3 flex items-center gap-2"><FaInstagram className="text-1xl" />Instagram</span>
              </Link>
            </li>
            <li className="flex border-b-1 border-white hover:bg-white">
              <Link target="_blank" href={SOCIAL_NETWORKS_LINKS.YOUTUBE} className="text-start px-4 py-3 text-white  hover:text-light" rel="noopener noreferrer" title="YouTube">
                <span className="hover:translate-x-3 flex items-center gap-2"><FaYoutube className="text-1xl" />YouTube</span>
              </Link>
            </li>
            <li className="flex hover:bg-white">
              <Link target="_blank" href={SOCIAL_NETWORKS_LINKS.LINKTREE} className="text-start px-4 py-3 text-white  hover:text-light" rel="noopener noreferrer" title="Linktree">
                <span className="hover:translate-x-3 flex items-center gap-2"><FaLink className="text-1xl" />Linktree</span>
              </Link>
            </li>
          </ul>
        </li> */}
            {pathname !== CUSTOMPATHS.HOME && (
              <li>
                <button
                  onClick={() => toggleCartVisibility()}
                  className=" px-2 flex items-center hover:text-light gap-2 text-white"
                  title="Cotización"
                >
                  Cotización
                  {cart.length > 0 && (
                    <span className="rounded-full bg-light text-white p-1 px-2 flex items-center gap-2">
                      {cart.length}{" "}
                      <TbShoppingCartQuestion className="md:text-2xl" />
                    </span>
                  )}
                </button>
                <CartComponent />
              </li>
            )}
          </ul>
          <button
            className="group text-white flex md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdMenu className="text-2xl hover:text-light" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
