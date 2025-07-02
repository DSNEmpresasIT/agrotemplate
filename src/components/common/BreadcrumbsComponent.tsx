'use client';
import { RootState } from "@/redux/store";
import { CUSTOMPATHS } from "@/util/enums";
import { buildCatalogUrlWithFilters } from "@/util/helpers/url";
import { CategoryData } from "@/util/types/types";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";


interface BreadcrumbsProps {
  categories: CategoryData[];
  lastPath: string;
}

export const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ categories, lastPath }) => {
  const state = useSelector((state: RootState) => state);

  return (
    <nav className="mb-4">
      <ul className="flex space-x-2 text-size-item text-gray-600 items-center">
        {categories.length === 0 ? (
          <li>
            <Link href={'catalogo-agropecuario'} className="text-[#185983] hover:underline">
              Catalogo Agropecuario
            </Link>
          </li>
        ) : (
          <>
                <Link href={`${CUSTOMPATHS.CATALOG}`} className="text-[#185983] hover:underline">
              Catalogo Agropecuario
            </Link>

            {categories
              .filter(category => category.slug !== "root")
              .map((category) => (
                <li key={category.id} className="flex items-center">
                  {category.slug !== "root" && <span className="mx-2">&gt;</span>}

                  <Link href={buildCatalogUrlWithFilters(category.slug, state)} className="text-[#185983] hover:underline">
                    {category.label}
                  </Link>
                </li>
              ))}


            {categories.length > 0 && (
              <>
                <span className="mx-2"><AiOutlineRight width={15} className='text-[#185983]' /></span>
                  <span className="text-[#185983]/60">{lastPath}</span>
              </>
            )}

          </>
        )}
      </ul>
    </nav>
  );
};


