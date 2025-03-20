import React, { useContext, useEffect, useState } from "react";
import { FiltrosContext } from "./navProducts";
import {} from "@/services/Supabase/product-services";
import { Product } from "@/util/types/types";
import CardComponent from "./CardComponent";
import { useDataContext } from "@/context/catalog-context/CatalogContext";
import { setLoading, setProducts } from "@/context/catalog-context/actions";
import CustomPagination from "../paginator/PaginatorComponent";
import { getAllProducts } from "@/services/api/products-service";
import { getCategoryByName } from "@/services/api/categories-service";
import NotResultsComponent from "./NotResultsComponent";
import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import { SkeletonLoaderComponent } from "../blog/SkeletonLoaderComponent";
import CardSkeletonLoader from "./CardSkeletonLoader";
import { SearcherComponent } from "./SearcherComponent";

interface prop {
  getFathersCategories: () => {};
}

export const renderProducts: React.FC = () => {
  const { state } = useDataContext();
  const { dispatch } = useDataContext();
  const products = state.products;
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginate, setDataPaginate] = useState<Product[]>();
  const postsPerPage = 12;
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  
  const filtro = useContext(FiltrosContext);

  const handleSetProducts = (newProducts: Product[]) => {
    dispatch(setProducts(newProducts));
  };

  const getProductByFilter = async (category: number) => {
    const products = await getAllProducts(category);
    if (products) {
      handleSetProducts(products);
    }
  };

  const getProducts = async () => {
    const productos = await getAllProducts(null);
    if (productos) {
      handleSetProducts(productos);
    }
  };

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setDataPaginate(products?.slice(startIndex, endIndex));
  }, [currentPage, products]);

  useEffect(() => {
    dispatch(setLoading(true));
    if (filtro != null && filtro !== "") {
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
          dispatch(setLoading(false));
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          dispatch(setLoading(false));
        })
        .finally(()=>{
          dispatch(setLoading(false));
        });
    } else if (!searchQuery) {
      getProducts()
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error fetching products:", error);
          dispatch(setLoading(false));
        });
    } 
  }, [filtro]);

  return (
    <div className="w-full mx-auto">
      {/* <div className="mb-1">
        <h5 className="font-semibold text-light text-xl">Buscar</h5>
      </div> */}
      <div className="w-full px-5 flex shadow-md rounded-md justify-between py-4 mb-6 text-gray-600 border shadow-[0_0_3px_rgb(8,136,136 / 10%)">
      {/* <SearcherComponent/> */}

        <h5>
          {" "}
          {dataPaginate && dataPaginate.length}{" "}
          {products && products.length > 1
            ? `Resultados de ${products.length}`
            : "resultado"}
        </h5>
      </div>
      {state.loading ? (
        <div className="grid justify-center  items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
          <CardSkeletonLoader />
        </div>
      ) : Array.isArray(dataPaginate) && dataPaginate.length > 0 ? (
        <div className="grid justify-center items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
          {dataPaginate.map((item, i) => (
            <CardComponent key={i} data={item} filtro={filtro} />
          ))}
        </div>
      ) : (
         <NotResultsComponent slug=''/>
      )}
      <div className="h-36 w-full flex justify-center items-center">
        {products && products.length > 5 && (
          <CustomPagination
            pageCount={Math.round(
              Math.ceil((products?.length || 0) / postsPerPage)
            )}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default renderProducts;
