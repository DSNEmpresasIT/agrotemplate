import React, { useContext, useEffect, useState } from 'react'
import { FiltrosContext } from './navProducts';
import {  } from '@/services/Supabase/product-services';
import { Product } from '@/util/types/types';
import CardComponent from './CardComponent';
import { useDataContext } from '@/context/catalog-context/CatalogContext';
import { setProducts } from '@/context/catalog-context/actions';
import CustomPagination from '../paginator/PaginatorComponent';
import { getAllProducts } from '@/services/api/products-service';
import { getCategoryByName } from '@/services/api/categories-service';

interface prop {
  getFathersCategories: ()=> {}
}


export const renderProducts: React.FC = () => {
  const { state } = useDataContext();
  const { dispatch } = useDataContext();
  const products = state.products;
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginate, setDataPaginate ] = useState<Product[]>();
  const postsPerPage = 6;

  const filtro = useContext(FiltrosContext);

  const handleSetProducts = (newProducts: Product[]) => {
    dispatch(setProducts(newProducts));
  };

  const getProductByFilter = async(category: number) =>{
    const products = await  getAllProducts(category)
    if(products){
      handleSetProducts(products)
    } 
   }

   const getProducts = async() => {
    const productos = await getAllProducts(null);
    if(productos){
      handleSetProducts(productos)
    }
   }


   const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDataPaginate(products?.slice(startIndex, endIndex));
  }, [currentPage, products]);

  useEffect(()=>{
    console.log(filtro)
    if(filtro != null && filtro !== '') {
      getCategoryByName(filtro)
      .then((res) => {
        if (res && res.length > 0) {
          return getProductByFilter(res[0].id);
        }
        return null;
      })
      .then((products) => {
        if (products) {
          handleSetProducts(products);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
    } else {
      getProducts()
    }
  },[filtro])

  return (
    <div className='w-full mx-auto'>
      <div  className='w-full px-5 py-4 mb-6 border shadow-[0_0_3px_rgb(8,136,136 / 10%)'>
        <h5> {dataPaginate && dataPaginate.length}{' '}
                        {products&& products.length > 1
                         ? `Resultados de ${products.length}`
                         : 'resultado'}</h5>
      </div>
      <div className='grid justify-center items-center gap-3 md:grid-cols-2 lg:grid-cols-3 '>
        {
          (dataPaginate)&&
          dataPaginate.map((item, i)=>(
             <CardComponent key={i} data={item} filtro={filtro}/>
          ))
        } 
      </div>
      <div  className='h-36 w-full flex justify-center items-center'>
                {products && products.length > 5 && (
                      <CustomPagination
                            pageCount={Math.round(Math.ceil((products?.length || 0) / postsPerPage))}
                            onPageChange={handlePageChange}
                      />
                )}
      </div>
    </div>
  )
}

export default renderProducts
