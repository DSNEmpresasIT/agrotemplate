'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCatalogSlug } from '@/services/api/catalog-service';
import ImageComponent from './ImageComponent';
import { CUSTOMPATHS } from '@/util/enums';

interface SearchBarProps {
  className?: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  images: { url: string }[];
}

const DEFAULT_SUGGESTIONS = [
  { name: 'Semillas', slug: 'semillas' },
  { name: 'Fertilizantes', slug: 'fertilizantes' },
  { name: 'Varios', slug: 'varios' },
];

const formatSearchQuery = (text: string) => 
  text.trim().toLowerCase().replace(/\s+/g, '-');

const SearchBarComponent: React.FC<SearchBarProps> = ({ className }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchSuggestions = async (input: string) => {
    if (input.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      setNoResults(false);
      return;
    }

    try {
      const response = await getCatalogSlug(formatSearchQuery(input));
      const products = response.data.products;
      if (products.length > 0) {
        setSuggestions(products);
        setNoResults(false);
      } else {
        setSuggestions([]);
        setNoResults(true);
      }
      setIsOpen(true);
    } catch (error) {
      console.error('Error al obtener sugerencias', error);
      setSuggestions([]);
      setNoResults(true);
      setIsOpen(true);
    }
  };

  const handleSearch = (slug?: string) => {
    const searchSlug = slug || formatSearchQuery(query);
    if (!searchSlug.trim()) return;
    router.push(`${CUSTOMPATHS.CATALOG}/${searchSlug}`);
    setIsOpen(false);
  };
  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <input
        type="search"
        placeholder="Busca tu producto ideal..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          fetchSuggestions(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="px-2 md:px-4 py-1 z-[70] opacity-80 text-black outline-none bg-[#d9d9d9] rounded-[5px] w-full"
      />

      {isOpen && (
        <ul className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto shadow-lg z-50">
          {noResults && (
            <li className="p-3  text-red-400  border-b border-gray-300">
              <div className='border-b border-gray-300 pb-2'>
                <span >No encontramos lo que buscas. <br /> Categorias sugeridas:</span>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {DEFAULT_SUGGESTIONS.map((cat) => (
                  <a
                    key={cat.slug}
                    href={`${CUSTOMPATHS.CATALOG}/${cat.slug}`}
                    className="px-3 py-1 text-black rounded-md hover:bg-gray-200 transition"
                    tabIndex={0}
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </li>
          )}
          {suggestions.map((product, index) => (
            <li
              key={index}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSearch(product.slug)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(product.slug)}
              tabIndex={0}
              className="flex items-center gap-3 p-2 text-black hover:bg-gray-200 cursor-pointer"
            >
              <ImageComponent image={product} />
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarComponent;
