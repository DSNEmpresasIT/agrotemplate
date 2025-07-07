import { API_ENDPOINTS } from "@/util/endpoints";
import { Product } from "@/util/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userHeader = JSON.stringify({
  company: { id: 2 },
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
    getCategory: builder.query<any, { slug: string, page?: number, limit?: number }>({
      query: ({ slug, page, limit }) => {
        const catalogId = process.env.API_CATALOG_ID;
        const params = new URLSearchParams();
        if (catalogId) params.append('catalogId', catalogId);
        if (page !== undefined) params.append('page', page.toString());
        if (limit !== undefined) params.append('limit', limit.toString());

        const url = `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}${params.toString() ? `?${params.toString()}` : ''}`;
        return url;
      },
    }),
  })
})

export const { useGetCategoriesWithChildrenQuery, useGetCategoryQuery } = categoryApi;