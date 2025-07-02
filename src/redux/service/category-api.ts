import { API_ENDPOINTS } from "@/util/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userHeader = JSON.stringify({
  company: { id: 1 },
  role: { key: "DSN_CUSTOMER_ACCESS" },
});

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GLOBAL_API, prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('User', userHeader);
      return headers;
    }
}),
  endpoints: (builder) => ({
    getCategoriesWithChildren: builder.query<any, any>({
      query: () => API_ENDPOINTS.GET_CATEGORIES,
    }),
    getCategory: builder.query<any, {
      slug: string,
      page?: number,
      limit?: number,
      filters?: Record<string, string[]>
    }>({
      query: ({ slug, page, limit, filters }) => {
        const catalogId = process.env.API_CATALOG_ID;
        const params = new URLSearchParams();

        if (catalogId) params.append('catalogId', catalogId);
        if (page !== undefined) params.append('page', page.toString());
        if (limit !== undefined) params.append('limit', limit.toString());
        params.append('includeImages', 'true');
        params.append('includeFeatures', 'true');
        params.append('includeFilters', 'true');

        if (filters) {
          Object.entries(filters).forEach(([key, values]) => {
            values.forEach((value) => {
              params.append(`filters[${key}][]`, value);
            });
          });
        }

        const url = `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}?${params.toString()}`;
        return url;
      },
    }),
  })
})

export const { useGetCategoriesWithChildrenQuery, useGetCategoryQuery } = categoryApi;