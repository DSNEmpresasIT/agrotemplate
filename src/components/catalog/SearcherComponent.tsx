'use client';
import { useDataContext } from '@/context/catalog-context/CatalogContext';
import { setProducts } from '@/context/catalog-context/actions';
import { Product } from '@/util/types/types';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';
import { getAllProducts, getProductByName } from '@/services/api/products-service';

export const SearcherComponent: FC = () => {
  const { dispatch } = useDataContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get("search") || '';
  const [input, setInput] = useState<string>(searchQuery);
  const [debouncedQuery, setDebouncedQuery] = useState<string>(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(input), 1000);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    fetchProducts(debouncedQuery);
  }, [debouncedQuery]);

  const handleSetProducts = (newProducts: Product[] | null) => {
    dispatch(setProducts(newProducts));
  };

  const fetchProducts = async (query: string) => {
    if (query) {
        await fetchProductByName(query);
    } else {
      await fetchAllProducts();
    }
  };


  const fetchProductByName = async (query: string) => {
    try {
      const products = await getProductByName(query);
      handleSetProducts(products || []);
    } catch (error) {
      console.error('Error fetching products by name:', error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      const products = await getAllProducts(null);
      handleSetProducts(products || []);
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };
  
  const updateSearchQuery = (newQuery: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('search', newQuery); 
    

    router.push(`?${currentParams.toString()}`);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInput(query);
    updateSearchQuery(query); 
  };
  
  const handleSearch = () => {
    updateSearchQuery(input); 
    setDebouncedQuery(input); 
  };
  

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  

  return (
    <div className="widget widget-search">
      <div className="mb-3 mt-[-5px]">
        <h5 className="font-semibold text-light text-xl">Buscar</h5>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        <input
          className="h-12 w-full border-none shadow-[0_0_3px_rgb(8,136,136 / 10%)] focus:ring-light pr-10"
          type="text"
          name="search"
          placeholder="¿Qué está buscando?"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleEnterKey}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          onClick={handleSearch}
        >
          <i className="icofont-search-2"></i>
        </button>
      </form>
    </div>
  );
};
