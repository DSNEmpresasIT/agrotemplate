'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { buildFilterPath, setAllFilters, setFilter, setSlug } from '@/redux/store/features/filterSlice';
import { capitalizeFirst } from '@/util/helpers/strings';

interface FiltersListProps {
  filtersSummary: {
    filterId: number;
    filterName: string;
    filterSlug: string;
    values: { value: string; filterValueSlug: string; count: number }[];
  }[];
  slug: string;
}

export const FiltersListComponent: React.FC<FiltersListProps> = ({ filtersSummary, slug }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterSlice.filters);

  useEffect(() => {
    const parts = pathname.split('/').filter(Boolean);
    const slugIndex = parts.indexOf(slug);
    const urlFilters: Record<string, string> = {};

    if (slugIndex !== -1) {
      for (let i = slugIndex + 1; i < parts.length; i += 2) {
        const key = decodeURIComponent(parts[i]);
        const value = decodeURIComponent(parts[i + 1] || '');
        if (key && value) {
          urlFilters[key] = value;
        }
      }
    }

    dispatch(setSlug(slug));
    dispatch(setAllFilters(urlFilters));
  }, [pathname, slug, dispatch]);

  const handleClick = (filterName: string, value: string) => {
    dispatch(setFilter({ name: filterName, value }));
    const newPath = buildFilterPath(slug, {
      ...filters,
      [filterName]: value,
    });
    router.push(newPath);
  };

  return (
    <>
      {filtersSummary.map((filter) => (
        <div key={filter.filterId} className="mb-3">
          <h5 className="text-[#185983] text-xl font-medium text-start mb-4 mt-4">{capitalizeFirst(filter.filterName)}</h5>
          <ul className="">
            {filter.values.map((v, i) => {
              const isActive = filters[filter.filterName] === v.value;

              return (
                <li className="text-[#185983] text-xl" key={i}>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(filter.filterSlug, v.filterValueSlug);
                    }}
                    className={isActive ? 'font-bold underline text-blue-500' : ''}
                  >
                    {v.value} <span className='text-lg text-neutral-500 '>({v.count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FiltersListComponent;

