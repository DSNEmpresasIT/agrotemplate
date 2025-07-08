"use client";

import { useGetCategoriesWithChildrenQuery } from "@/redux/service/category-api";
import { FiMenu } from "react-icons/fi";
import React from "react";
import Cart from "./Cart";
import SearchBarComponent from "./SearchBarComponent";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarDesktopManu from "./NavbarDesktopMenu";

const NavbarComponent = () => {
  
  const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);

  return (
    <nav className="h-[73px] bg-black/50 backdrop-blur w-full fixed top-0 z-[9999]">
      <div className="max-w-main-wrapper w-full mx-auto px-4 h-full flex items-center relative">
        <Cart />
        <div className="lg:hidden">
          {/* @ts-ignore */}
          <div popover="auto" id="navbar-mobile-menu" className="w-full mt-[73px] overflow-y-auto p-4 shadow">
            <NavbarMobileMenu categories={categories}></NavbarMobileMenu>
          </div>
          {/* @ts-ignore */}
          <button popovertarget="navbar-mobile-menu" aria-label="Abrir menú de navegación" className="text-[25px] me-4 text-white">
            <FiMenu />
          </button>
        </div>
        <SearchBarComponent className="max-w-[400px] w-full me-auto"/>
        <div className="hidden lg:block">
          <NavbarDesktopManu categories={categories} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;