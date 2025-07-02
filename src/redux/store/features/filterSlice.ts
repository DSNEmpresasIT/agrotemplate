import { CUSTOMPATHS } from '@/util/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  slug: string;
  filters: Record<string, string>;
}

const initialState: FiltersState = {
  slug: '',
  filters: {},
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSlug: (state, action: PayloadAction<string>) => {
      state.slug = action.payload;
    },
    setFilter: (state, action: PayloadAction<{ name: string; value: string }>) => {
      state.filters[action.payload.name] = action.payload.value;
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      delete state.filters[action.payload];
    },
    clearFilters: (state) => {
      state.filters = {};
    },
    setAllFilters: (state, action: PayloadAction<Record<string, string>>) => {
      state.filters = action.payload;
    },
  },
});

export const {
  setSlug,
  setFilter,
  removeFilter,
  clearFilters,
  setAllFilters,
} = filterSlice.actions;

export const buildFilterPath = (slug: string, filters: Record<string, string>) => {
  const path = Object.entries(filters)
    .map(([k, v]) => `${encodeURIComponent(k)}/${encodeURIComponent(v)}`)
    .join('/');
  return `${CUSTOMPATHS.CATALOG}/${slug}${path ? `/${path}` : ''}`;
};

export default filterSlice.reducer;
