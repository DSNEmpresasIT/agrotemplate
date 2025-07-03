'use client'
import React, { useState } from "react";
import Link from "next/link";
import CardSkeletonLoader from "./CardSkeletonLoader";
import NotResultsComponent from "./NotResultsComponent";
import { Category, CategoryData, Product } from "@/util/types/types";
import { useGetCatalogSlugQuery } from "@/redux/service/catalog-api";
import Banner from "../common/Banner";
import { FiltersComponent } from "./FiltersComponent";
import { BreadcrumbsComponent } from "../common/BreadcrumbsComponent";
import CardComponent from "./CardComponent";
import { ProductCarousel } from "../common/ProductCarousel";
import ReactPaginate from "react-paginate";
import { useGetCategoryQuery } from "@/redux/service/category-api";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { buildCatalogUrlWithFilters } from "@/util/helpers/url";
import { capitalizeFirst } from "@/util/helpers/strings";
import FiltersListComponent from "../common/FilterListComponent";

interface CatalogViewProps {
  slug: string;
  filters?: Record<string, string[]>;
}

export const CatalogViewComponent: React.FC<CatalogViewProps> = ({ slug, filters }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 10;
  const state = useSelector((state: RootState) => state);
  let response: any = useGetCategoryQuery({ slug, page: currentPage + 1, limit: ITEMS_PER_PAGE, filters })
  response = response.data
  const parentsArray = Array.isArray(response?.data?.parent) ? response?.data?.parent : response?.data?.parent ? [response?.data?.parent] : [];
  const lastSlug = response?.data?.childrens?.length ? response?.data?.childrens[response?.data?.childrens?.length - 1]?.slug : undefined;
  const shouldFetch = Boolean(lastSlug);
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const catalogData = useGetCatalogSlugQuery(
    {
      slug: lastSlug!,
      filters,
      page: currentPage + 1,
      limit: ITEMS_PER_PAGE,
      includeImages: true,
      includeFeatures: true,
      includeFilters: true,
    },
    { skip: !shouldFetch }
  );

  if (!response) {
    return (
      <></>
    )
  }
  return (
    <div className="mb-[100px]">
      <Banner title={ response?.data?.label} description={ response?.data?.description} img={ response?.data?.images} />
      {/* { response?.data?.childrens &&  response?.data?.childrens.length > 0 && (
        <FiltersComponent categories={ response?.data?.childrens} />
      )
      } */}
      <div className=" flex flex-col mx-auto max-w-main-wrapper w-full px-4">
        {response?.data?.parent &&
          <div className="my-10 flex flex-col gap-2">
            <h1 className="text-cc-green text-size-subtle font-medium font-['Kumbh Sans']">{capitalizeFirst(response?.data?.label)}</h1>
            <BreadcrumbsComponent lastPath={response?.data?.label} categories={parentsArray} />
          </div>
        }
        <div className="flex flex-col md:flex-row gap-5">
          <div className="hidden md:flex flex-col max-w-[250px] w-full">
            <h6 className="text-cc-green text-size-item font-medium text-start mb-4">{response?.data?.childrens && response?.data?.childrens.length > 0 && 'Categorías'}</h6>
            {response?.data?.childrens && response?.data?.childrens.map((category: Category) => (
              <ul key={category.id} className="text-size-paragraph">
                <li className="flex gap-1">
                  <Link href={buildCatalogUrlWithFilters(category.slug ?? '', state)} className="text-gray-500 hover:underline">{capitalizeFirst(category.label ?? '')}</Link>
                </li>
              </ul>
            ))}
            {response?.filtersSummary?.length > 0 && (
              <FiltersListComponent filtersSummary={response.filtersSummary} slug={response.data.slug} />
            )}
          </div>
          {response?.data?.products === undefined ? (
            <div className="grid gap-x-4 gap-y-7 md:grid-cols-2 lg:grid-cols-3 min-[1210px]:grid-cols-4 min-[1629px]:grid-cols-5 grid-rows-1 mb-auto pb-10 w-full">
              <CardSkeletonLoader />
            </div>
          ) : response?.data?.products.length === 0 ? (
            <div className="w-full justify-center ">
              <NotResultsComponent slug={response?.data?.slug} />
            </div>
          ) : (
            <div className="grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 min-[1210px]:grid-cols-4 min-[1629px]:grid-cols-5 pb-10 w-full grid-rows-1 mb-auto">
              {
                response?.data?.products.map((product: Product, index: number) => (
                  <CardComponent key={index} data={product} filtro={''} />
                ))
              }
            </div>
          )}
        </div>
      </div>
      <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        pageCount={response?.totalPages || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        disabledClassName="hidden"
        activeClassName="active"
      />
      <div className="hidden mt-[80px] 2xl:flex px-4">
        <ProductCarousel data={catalogData?.data?.data?.products} title='También podría interesarte' path={response?.data?.childrens?.[response?.data?.childrens?.length - 1]?.slug || ''} />

      </div>
    </div>
  );
};