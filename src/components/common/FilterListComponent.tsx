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
        <div key={filter.filterId} className="flex flex-col gap-3">
          <h5 className="text-cc-green text-size-item font-medium text-start">{capitalizeFirst(filter.filterName)}</h5>
          <ul className="flex flex-col gap-1">
            {filter.values.map((v, i) => {
              const isActive = filters[filter.filterName] === v.value;

              return (
                <li key={i}>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(filter.filterSlug, v.filterValueSlug);
                    }}
                    className={isActive ? 'font-bold underline text-blue-500' : 'text-gray-500' + ' text-size-paragraph hover:underline'}
                  >
                    {v.value} <span>({v.count})</span>
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

