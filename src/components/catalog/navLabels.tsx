'use client'
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import { FiltrosContext } from './navProducts';
import { Product } from '@/util/types/types';

import { IoIosClose } from "react-icons/io";
import { useDataContext } from '@/context/catalog-context/CatalogContext';
import { setProducts } from '@/context/catalog-context/actions';
import { getAllProducts } from '@/services/api/products-service';
import { getCategoryByName } from '@/services/api/categories-service';

interface RenderProductsProps {
  categoryQuery: string | null;
  setCategoryQuery: React.Dispatch<React.SetStateAction<string | null>>;
  subCategoryQuery: string | null;
  setSubCategoryQuery: React.Dispatch<React.SetStateAction<string | null>>;
  getFathersCategories: () => Promise<void>;
  getChillCategory: (categoria: number) => Promise<void>;
}

const navLabels :React.FC<RenderProductsProps> = ({
  categoryQuery,setCategoryQuery, 
  subCategoryQuery, setSubCategoryQuery, 
  getFathersCategories, getChillCategory }) => {
  const searchParams = useSearchParams();

  const { dispatch } = useDataContext();

  const handleSetProducts = (newProducts: Product[]) => {
    dispatch(setProducts(newProducts));
  };

  const getProducts = async() => {
    const productos = await getAllProducts(null);
    if(productos){
      handleSetProducts(productos)
    }
   }

   const getProductByFilter = async (category: any) => {
    if (!category) return;
    if (!isNaN(Number(category))) {
      try {
        const products = await getAllProducts(category);
        if (products) {
          handleSetProducts(products);
        }
      } catch (error) {
        console.error('Error fetching products by ID:', error);
      }
    } else {
      try {
        const res = await getCategoryByName(category);
        if (res && res.length > 0) {
          const products = await getAllProducts(res[0].id);
          if (products) {
            handleSetProducts(products);
          }
        }
      } catch (error) {
        console.error('Error fetching products by category name:', error);
      }
    }
  };
  
  

  const labelComponent = (categoria: string, categoryName: string) => {
    return (
      <span onClick={() => removeLabels(categoria)} className='px-2 py-1 flex items-center text-sm  duration-100 cursor-pointer border text-light hover:text-white rounded-full bg-[#ffb11f41] hover:bg-light border-colorLight'>
        {categoryName} <IoIosClose className='text-2xl ps-2'/> 
      </span>
    )
  }

  const removeQueryParam = (param: string) => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);

      if (param === 'categoria') {
        getProducts()
        removeFilters(param, 'categoria');
        setCategoryQuery(null);
        setSubCategoryQuery(null);
      } else if (param === 'subCategoria') {
        removeFilters(param, 'subCategoria');
        getProductByFilter(categoryQuery as string)
        setSubCategoryQuery(null);
      }

      url.searchParams.delete(param);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const removeLabels = (label: string | null) => {
    if (label) {
      removeQueryParam(label)
    }
  }

  const removeFilters = (label: string, type: string) => {
    switch (type) {
      case 'subCategoria':
        getFathersCategories();
        break;
      case 'categoria':
        getFathersCategories();

        break;
    }
  }

  useEffect(() => {
    setCategoryQuery(searchParams.get("categoria"))
    setSubCategoryQuery(searchParams.get("subCategoria"))
  }, [searchParams])

  return (
    <div>
      <div className='flex gap-2 flex-wrap'>
        {categoryQuery && labelComponent('categoria', categoryQuery)}
        {categoryQuery && subCategoryQuery && labelComponent('subCategoria', subCategoryQuery)}
      </div>
      {
          (categoryQuery || subCategoryQuery)&&
        <div>
          <button className='text-blue-400 text-sm ' onClick={()=>{removeQueryParam('categoria')}} >Limpiar filtros</button>
        </div>
        }
    </div>
  )
}

export default navLabels
