"use client";
import { useCart } from "@/context/cart-context/cart-context";
import { CUSTOMPATHS } from "@/util/enums";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchBarComponent from "./SearchBarComponent";
import Image from "next/image";
import { useGetCategoriesWithChildrenQuery } from "@/redux/service/category-api";
import { Category } from "@/util/types/types";

const NavbarComponent = () => {

  const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);

  const pathname = usePathname();
  const { toggleCartVisibility, cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [activeList, setActiveList] = useState<string | null>(null);
  const [isDeptOpen, setIsDeptOpen] = useState(false);

  const router = useRouter();
  const [query, setQuery] = useState("");
  const isActive = (href: string) => pathname === href;
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
    <nav className={`w-full h-[60px] md:h-[103px] fixed  top-0 z-[9999]  ${isOpen ? 'bg-[#181818] border-b border-gray-100/60': ''} sm:bg-none font-normal headerScroll text-white font-['Kumbh Sans']  text-base`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto pt-3 md:p-4">
      <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="relative inline-flex me-auto md:hidden ms-4 items-center justify-center w-8 h-8 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-6 flex justify-center items-center">
          <span
            className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute w-full h-[2px] bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            }`}
          ></span>
        </div>
        </button>
            <SearchBarComponent className="ms-2 flex md:hidden me-auto w-3/4" />
        <div className="flex justify-between items-center w-full">
        <Link className="md:flex hidden me-auto   items-center" href={'/'}>
            <Image  width={111} height={38} src="/assets/images/logo/01.png" className="object-cover md:w-[152px] md:h-[70px]" alt="Logo" />
          </Link>
            <SearchBarComponent className="hidden md:flex me-auto w-1/3" />

        <div className={`${isOpen ? 'block' : 'hidden'}  w-full md:block md:w-auto items-center`} id="navbar-default">

          <ul className="font-medium flex flex-col bg-black/80 md:bg-transparent p-4 md:p-0 mt-4 border-b border-gray-100 rounded-b-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">  
            <li>
              <Link
                href={`/`}
                className={`block py-2 px-3  md:p-0 ${
                  isActive('/') ? 'border-b border-solid border-white/50 text-white' : 'hover:bg-gray-100 hover:text-light  hover:border-b hover:border-white/50  md:hover:bg-transparent md:hover:text-light'
                }`}
              >
                Inicio
              </Link>
            </li>
            <li className="relative group">
              <button
                onClick={() => setIsDeptOpen(!isDeptOpen)}
                className={`w-full text-start md:hidden gap-2 py-2 px-3 peer   group-hover:text-light group-hover:border-b group-hover:border-white/50  items-center  md:hover:bg-transparent md:bg-transparent md:p-0 ${pathname.startsWith(CUSTOMPATHS.CATALOG) ? 'border-b-2 border-white/50 text-white' :'hover:bg-gray-100 hover:text-light'} `}
              >
                Catálogo
              </button>
              <Link
                href={`${CUSTOMPATHS.CATALOG}`}
                onClick={() => setIsDeptOpen(!isDeptOpen)}
                className={`w-full text-start hidden md:flex gap-2 py-2 px-3 peer   group-hover:text-light group-hover:border-b group-hover:border-white/50  items-center  md:hover:bg-transparent md:bg-transparent md:p-0 ${pathname.startsWith(CUSTOMPATHS.CATALOG) ? 'border-b-2 border-white/50 text-white' :'hover:bg-gray-100 hover:text-light'} `}
              >
                Catálogo
              </Link>
              <div
                className={`${
                  !isDeptOpen || 'peer-hover:flex '
                } absolute left-0  justify-center md:w-[200px] w-full md:pt-4 peer-hover:flex hover:flex text-gray-800 text-lg font-normal rounded-lg shadow-md hidden`}
              >
                <ul className="flex flex-col w-full border-t-2  text-start bg-light rounded-b-md">
                  { categories && categories.map((category: Category) => (
                    <li>
                      <Link
                        href={`${CUSTOMPATHS.CATALOG}/${category.slug}`}
                        className={`block py-2 px-3 rounded border-b  text-white border-white ${isActive(CUSTOMPATHS.CATALOG) ? 'border-b-2 border-white/50 text-white' : 'hover:bg-gray-100 hover:text-light'
                          }`}
                      >
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.GALLERY}`}
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive(CUSTOMPATHS.GALLERY) ? 'border-b-2 border-white/50 text-white' : 'hover:border-b hover:border-white/50 hover:bg-gray-100 hover:text-light md:hover:bg-transparent md:hover:text-light'
                }`}
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                href={`${CUSTOMPATHS.CONTACT}`}
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive(`${CUSTOMPATHS.CONTACT}`) ? 'border-b-2 border-white/50 text-white' : 'hover:border-b hover:border-white/50 hover:bg-gray-100 hover:text-light md:hover:bg-transparent md:hover:text-light'
                }`}
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    </nav>
  );
};

export default NavbarComponent;