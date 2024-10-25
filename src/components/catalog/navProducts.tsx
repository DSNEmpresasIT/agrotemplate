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
import { useDataContext } from "@/context/catalog-context/CatalogContext";
import { SearcherComponent } from "./SearcherComponent";
import { FaAngleDoubleRight } from "react-icons/fa";
import { getAllCategories, getCategoryByName } from "@/services/api/categories-service";

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
    console.log('me llamaron ?')
    const categories = await getAllCategories();
    setSubCategory(null)
    setcategories(categories);
  };


  const getChillCategory = async (categoria: number) => {
    
    const categories = await getAllCategories(categoria.toString());
   
    setSubCategory(categories[0].childrens);
   

  };


  useEffect(() => {
    // if(categoryQuery && !subCategory){
    //   getFathersCategories()
    // }
    if(!categories){
    getFathersCategories();
    }
    console.log(filtro, 'filtro ')
    if (categoryQuery && !filtro ) {
      setFilter(categoryQuery);
      getCategoryByName(filtro)
      .then((res) => {
        if (res && res.length > 0) {
          return getChillCategory(res[0].id);
        }
        return null;
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
    }
    if (subCategoryQuery) {
      setFilter(subCategoryQuery);
    }
    

  }, [categoryQuery, subCategoryQuery]);

  return (
    <FiltrosContext.Provider value={filtro}>
    <div className="flex w-full mt-32  flex-col md:flex-row justify-center md:justify-start items-center md:items-start mx-auto max-w-[1200px] gap-10">
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
             <li className="border-b flex items-center border-grey py-3" key={index}>
                <Link
                  className="flex items-center hover:translate-x-2 hover:text-light duration-200"
                  onClick={() => getChillCategory(categoria.id)}
                  href={{
                    pathname: `${CUSTOMPATHS.CATALOG}`,
                    query: {
                      categoria: categoria.label || "",
                    },
                  }}
                >
                  <FaAngleDoubleRight className="text-xl font-normal pe-2" />
                  {categoria.label}
                </Link>
             </li>
            ))}
          </ul>
      ) : (
        subCategory &&
        subCategory.map((categoria, index) => (
          <li className="border-b flex border-grey py-3" key={index}>
            <Link
            className={`flex items-center hover:translate-x-2 ${
              categoria.label === filtro && subCategoryQuery ? 'text-light translate-x-2' : ''
            } hover:text-light duration-200`}
            onClick={() => setFilter(categoria.label || null)}
            href={{
              pathname: `${CUSTOMPATHS.CATALOG}`,
              query: {
                categoria: categoryQuery || "",
                subCategoria: categoria.label || "",
              },
            }}
          >
                <FaAngleDoubleRight className="text-xl font-normal pe-2" />
            {categoria.label}
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
