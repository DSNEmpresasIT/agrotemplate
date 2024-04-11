"use client";
import {
  getCategoriesChildren,
  getCategoriesFathers,
} from "@/services/Supabase/category-services";
import { Category } from "@/util/types/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { createContext, useEffect, useRef, useState } from "react";
import RenderProducts from "./renderProducts";
import NavLabels from "./navLabels";
import { CUSTOMPATHS } from "@/util/enums";
import { useDataContext } from "@/services/context/catalog-context/CatalogContext";
import { SearcherComponent } from "./SearcherComponent";


export const FiltrosContext = createContext<string | null>("");


const NavProducts = () => {
  const searchParams = useSearchParams();
  const { state } = useDataContext();
  const product = state.products;
  const [categoryQuery, setCategoryQuery] = useState(searchParams.get("categoria"));
  const [subCategoryQuery, setSubCategoryQuery] = useState(searchParams.get("subCategoria"));

  const [filtro, setFilter] = useState<string | null>(null);
  const [categories, setcategories] = useState<Category[] | null>(null);
  const [subCategory, setSubCategory] = useState<Category[] | null>(null);

  const getFathersCategories = async () => {
    const categories = await getCategoriesFathers();
    setcategories(categories);
  };


  const getChillCategory = async (categoria: string) => {
    const categories = await getCategoriesChildren(categoria);
    setSubCategory(categories);
    console.log(subCategory, ' subcategorias')

  };


  useEffect(() => {
    if(categoryQuery && !subCategory){
      getFathersCategories()
    }
    if(!categories){
    getFathersCategories();
    }
    console.log(filtro, 'filtro ')
    if (categoryQuery && !filtro ) {
      setFilter(categoryQuery);
      getChillCategory(categoryQuery)
    }
    if (subCategoryQuery) {
      setFilter(subCategoryQuery);
    }
    

  }, [categoryQuery, subCategoryQuery]);

  return (
    <FiltrosContext.Provider value={filtro}>
    <div className="flex w-full flex-col md:flex-row justify-center md:justify-start items-center md:items-start mx-auto max-w-[1200px] gap-10">
        <div className="flex w-full max-w-[240px] flex-col gap-2 ps-4">
          <SearcherComponent/>
    <h2 className=" font-semibold text-light text-xl">{categories && !subCategory ? 'Tipos de productos' : `${categoryQuery ? categoryQuery : ''} ${subCategoryQuery ? subCategoryQuery : ''}`}</h2>
          {
            categoryQuery&& (
              <span className="text-black/50">{ product?.length} resultados</span>
            )
          }
          <NavLabels 
            categoryQuery={categoryQuery}
            setCategoryQuery={setCategoryQuery}
            subCategoryQuery={subCategoryQuery}
            setSubCategoryQuery={setSubCategoryQuery}
            getFathersCategories={getFathersCategories} 
            getChillCategory={getChillCategory} 
          />
      {categories && !subCategory ? (
          <ul className="flex flex-col">
            {categories.map((categoria, index) => (
             <li className="border-b flex border-grey py-3" key={index}>
                <Link
                  className="flex hover:translate-x-2 hover:text-light duration-200"
                  onClick={() => getChillCategory(categoria.category || "")}
                  href={{
                    pathname: `${CUSTOMPATHS.PRODUCTS}`,
                    query: {
                      categoria: categoria.category || "",
                    },
                  }}
                >
                <span className="text-sm pe-2">&#62;&#62;</span>

                  {categoria.category}
                </Link>
             </li>
            ))}
          </ul>
      ) : (
        subCategory &&
        subCategory.map((categoria, index) => (
          <li className="border-b flex border-grey py-3" key={index}>
            <Link
            className={`flex hover:translate-x-2 ${
              categoria.category === filtro && subCategoryQuery ? 'text-light translate-x-2' : ''
            } hover:text-light duration-200`}
            onClick={() => setFilter(categoria.category || null)}
            href={{
              pathname: `${CUSTOMPATHS.PRODUCTS}`,
              query: {
                categoria: categoryQuery || "",
                subCategoria: categoria.category || "",
              },
            }}
          >
                <span className="text-sm pe-2">&#62;&#62;</span>
            {categoria.category}
          </Link>
          </li>
        ))
      )}
       </div>
      <RenderProducts  />
    </div>
    </FiltrosContext.Provider>
  );
};

export default NavProducts;
