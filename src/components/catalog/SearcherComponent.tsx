
import { getProductByName, getProductsByNameInCategory } from '@/services/Supabase/product-services';
import { useDataContext } from '@/context/catalog-context/CatalogContext';
import { setProducts } from '@/context/catalog-context/actions';
import { Product } from '@/util/types/types';
import { useSearchParams } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';




export const SearcherComponent:FC = () => {
  const { dispatch } = useDataContext();
  const type = useSearchParams().get("categoria")

  const [ input, setInput ] = useState<string>('');

  const handleSetProducts = (newProducts: Product[] | null) => {
    dispatch(setProducts(newProducts));
  };

  const getData = async (query: any) => {
    const search = query;
    if(type){
      const products = await getProductsByNameInCategory(type, query)
      search.length && handleSetProducts(products) ;
    } else {
      const products = await getProductByName(input) 
      search.length && handleSetProducts(products) ;
    }

  }

  const hanldeInputChange= (e: any)=>{
    const search = e.target.value;
    getData(search)
    setInput(search)
  }

  return (
    <div className="widget widget-search">
        <div className="mb-3 mt-[-5px]">
            <h5 className='font-semibold text-light text-xl'>Buscar</h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input className='h-12 w-full border-none shadow-[0_0_3px_rgb(8,136,136 / 10%) focus:ring-light ' type="text" name="search" placeholder="Que está buscando?" value={input} onChange={hanldeInputChange}/>
            <button type="button"><i className="icofont-search-2"></i></button>
        </form>
    </div>
  )
}
