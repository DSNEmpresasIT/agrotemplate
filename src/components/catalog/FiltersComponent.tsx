"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdTune } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { CUSTOMPATHS } from "@/util/enums";

interface FiltersProps {
  categories?: { id: number; label: string; slug: string }[];
  hide?: boolean;
}

export const FiltersComponent: React.FC<FiltersProps> = ({ categories, hide = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={`flex md:hidden items-center w-full ${!hide ? 'justify-center' : 'justify-start sm:justify-center pl-6'} gap-4 text-black py-3 shadow-md text-xs sm:text-base`}>
        <button className={`flex items-center gap-1 ${!hide ? 'pr-3 border-r-2' : ''}`}>
          <AiOutlineHeart size={24} />
          <span>Favoritos</span>
        </button>
        {!hide && (
          <>
            <button className="flex items-center gap-1 pr-3 border-r-2">
              <BiSortAlt2 size={24} />
              <span>Ordenar</span>
            </button>
            <button className="flex items-center gap-1 sm:hidden" onClick={() => setIsOpen(true)}>
              <MdTune size={24} />
              <span>Filtrar</span>
            </button>
          </>
        )}
      </div>
      {/* MODAL */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center z-[20000] justify-center bg-black text-[#195984] bg-opacity-50"
      >
        <DialogPanel className="bg-white text-center rounded-lg w-screen h-screen sm:h-auto sm:mt-0 sm:w-auto sm:px-4">
          <div className="flex justify-between flex-row items-center my-6 ml-6 mr-5">
            <DialogTitle className="text-lg font-semibold text-start ">
              Filtrar por
            </DialogTitle>
            <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          <div className="flex flex-col">
            {/* CATEGORÍAS DESPLEGABLE */}
            <div
              className="flex cursor-pointer items-center gap-4 px-6 justify-between font-medium text-[15px] md:text-lg py-2 w-full"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              <span>Categorías</span>
              <IoIosArrowDown
                className={`text-[20px] font-extrabold transition-all ${categoriesOpen ? "rotate-180" : ""}`}
              />
            </div>

            {/* LISTADO DE CATEGORÍAS */}
            {categoriesOpen && (
              <>
                {categories?.map((cat) => (
                  <div className="bg-[#e9e9e950] px-4 py-2 text-center" key={cat.id}>
                    <span
                      className="py-1 text-center text-[#195984] text-[15px] capitalize font-medium cursor-pointer hover:underline"
                      onClick={() => {
                        setIsOpen(false);
                        router.push(`/${CUSTOMPATHS.CATALOG}/${cat.slug}`);
                      }}
                    >
                      {cat.label}
                    </span>
                    <div className="w-full flex mt-2 justify-center items-center">
                      <div className="filter-gradient"></div>
                    </div>

                  </div>
                ))}
              </>
            )}
          </div>

          {/* <button
            className=" bg-red-500 text-white p-2 rounded my-4 w-[189px]"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button> */}
        </DialogPanel>
      </Dialog>
    </>
  );
};
