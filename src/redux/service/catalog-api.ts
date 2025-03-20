import { API_ENDPOINTS } from "@/util/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT }),
    endpoints: (builder) => ({
        getCatalogSlug: builder.query<any, any>({
            query: (slug: string) => `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}${process.env.API_CATALOG_ID ? `?catalogId=${process.env.API_CATALOG_ID}` : ''}`,
        }),
    }),
})

export const { useGetCatalogSlugQuery } = catalogApi;