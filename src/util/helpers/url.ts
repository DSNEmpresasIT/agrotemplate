import type { RootState } from '@/redux/store';
import { CUSTOMPATHS } from '../enums';

export function buildCatalogUrlWithFilters(slug: string, state: RootState): string {
  const filters = state.filterSlice.filters ?? {};

  const filterSegments = Object.entries(filters)
    .map(([k, v]) => `${encodeURIComponent(k)}/${encodeURIComponent(v)}`)
    .join("/");

  return `${CUSTOMPATHS.CATALOG}/${slug}${filterSegments ? `/${filterSegments}` : ""}`;
}
