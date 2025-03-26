'use client';
import { useGetCategoriesWithChildrenQuery } from '@/redux/service/category-api';
import { CUSTOMPATHS } from '@/util/enums';
import { Category } from '@/util/types/types';
import Link from 'next/link';
import React from 'react';

const CategorySection: React.FC = () => {

  const { data: categories, error, isLoading } = useGetCategoriesWithChildrenQuery(null);

  return (
    <div className="bg-layout py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Lo mejor para tu producción
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {categories && categories.map((category: Category, index: number) => (
          <div key={index}>
            <Link
              href={`${CUSTOMPATHS.CATALOG}/${category.slug}`}
              title={category.label? category.label : ''}
              rel="noopener noreferrer"
              className="text-lg hover:text-light hover:underline">
              <h3 className="text-xl font-semibold hover:text-light hover:cursor-pointer">
                {category.label}
              </h3>
            </Link>
            <ul className="mt-4 space-y-2">
              { category.childrens && category.childrens.map((children: Category, index: number) => (
                <li key={index}>
                  <Link
                    href={`${CUSTOMPATHS.CATALOG}/${children.slug}`}
                    title={children.label? children.label : ''}
                    rel="noopener noreferrer"
                    className="text-lg hover:text-light hover:underline">
                    {children.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

