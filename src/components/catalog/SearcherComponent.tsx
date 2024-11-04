'use client';
import { useDataContext } from '@/context/catalog-context/CatalogContext';
import { setLoading, setProducts } from '@/context/catalog-context/actions';
import { Product } from '@/util/types/types';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { FC, useState, useEffect } from 'react';
import { getAllProducts, getProductByName } from '@/services/api/products-service';

export const SearcherComponent: FC = () => {
  const { dispatch } = useDataContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearchQuery = searchParams.get("search") || '';
  const [input, setInput] = useState<string>(initialSearchQuery);
  const [debouncedQuery, setDebouncedQuery] = useState<string>(initialSearchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(input), 1000);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    dispatch(setLoading(true));
    fetchProducts(debouncedQuery);
  }, [debouncedQuery]);

  const handleSetProducts = (newProducts: Product[] | null) => {
    dispatch(setProducts(newProducts));
    dispatch(setLoading(false));
  };

  const fetchProducts = async (query: string) => {
    if (query) {
      await fetchProductByName(query);
    } else {
      await fetchAllProducts();
    }
    dispatch(setLoading(false));
  };

  const fetchProductByName = async (query: string) => {
    try {
      dispatch(setLoading(true));
      const products = await getProductByName(query);
      handleSetProducts(products || []);
    } catch (error) {
      console.error('Error fetching products by name:', error);
    }
  };

  const fetchAllProducts = async () => {
    try {
      dispatch(setLoading(true));
      const products = await getAllProducts(null);
      handleSetProducts(products || []);
    } catch (error) {
      console.error('Error fetching all products:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setDebouncedQuery(input);
    updateSearchQuery(input);
  };

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const updateSearchQuery = (newQuery: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('search', newQuery);
    router.replace(`?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="widget widget-search">
      
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        <input
          className="h-12 w-full border border-black/10 focus:border-none focus:ring-light pr-10"
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
