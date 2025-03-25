'use client'
import React from "react";
import Link from "next/link";
import CardSkeletonLoader from "./CardSkeletonLoader";
import NotResultsComponent from "./NotResultsComponent";
import { CategoryData } from "@/util/types/types";
import { useGetCatalogSlugQuery } from "@/redux/service/catalog-api";
import Banner from "../common/Banner";
import { FiltersComponent } from "./FiltersComponent";
import { BreadcrumbsComponent } from "../common/BreadcrumbsComponent";
import CardComponent from "./CardComponent";
import { ProductCarousel } from "../common/ProductCarousel";

interface CatalogViewProps {
  data: CategoryData;
}

export const CatalogViewComponent: React.FC<CatalogViewProps> = ({ data }) => {
  const parentsArray = Array.isArray(data.parent) ? data.parent : data.parent ? [data.parent] : [];
  const lastSlug = data?.childrens?.length ? data.childrens[data.childrens.length - 1]?.slug : undefined;
  const shouldFetch = Boolean(lastSlug);
  const catalogData =  useGetCatalogSlugQuery(lastSlug!, {
    skip: !shouldFetch
  });
  return (
    <div className="mb-[100px]">
      <Banner title={data.label} description={data.description} img={data.images} />
      <div className=" flex flex-col mx-auto mt-3 max-w-[1480px]">
        {data.childrens && data.childrens.length > 0 && (
          <FiltersComponent categories={data.childrens} />
        )
        }
        {data.parent &&
          <div className="mt-[18px] my-[15px] ">
            <h1 className="text-black text-[15px] font-medium md:text-[35px] font-['Kumbh Sans'] tracking-wide">{data.label}</h1>
            <BreadcrumbsComponent lastPath={data.label} categories={parentsArray} />
          </div>
        }
        <div className="flex flex-col mt-[18px] md:flex-row">
          <div className="hidden p-2 pe-9 md:mx-12 2xl:m-0 md:flex flex-col gap-1">
            <h6 className="text-[#185983] text-xl font-medium text-start mb-4">{data.childrens && data.childrens.length > 0 && 'Categorías'}</h6>
            {data.childrens && data.childrens.map((category) => (
              <ul key={category.id} className="text-[#185983] text-xl">
                <li className="flex gap-1">
                  <Link href={category.slug}>{category.label}</Link>
                </li>
              </ul>
            ))}
          </div>
          {data?.products === undefined ? (
            <div className="grid gap-[11px] md:grid-cols-2 pb-10 min-[1210px]:grid-cols-3 w-full min-[1629px]:grid-cols-5 grid-rows-1 mb-auto">
              <CardSkeletonLoader />
            </div>
          ) : data.products.length === 0 ? (
            <div className="w-full justify-center ">
              <NotResultsComponent slug={data.slug} />
            </div>
          ) : (
            <div className="grid gap-[11px] md:grid-cols-2 pb-10 min-[1210px]:grid-cols-3 w-full min-[1629px]:grid-cols-5 grid-rows-1 mb-auto">
                {
                    data.products.map((product)=>(
                        <CardComponent data={product} filtro={''} />

                    ))
                }
            </div>
          )}
        </div>
      </div>
      <div className="hidden mt-[80px] 2xl:flex mx-[138px]">
        <ProductCarousel data={catalogData?.data?.data?.products} title='También podría interesarte' path={data?.childrens?.[data?.childrens?.length - 1]?.slug || ''} />

      </div>
    </div>
  );
};