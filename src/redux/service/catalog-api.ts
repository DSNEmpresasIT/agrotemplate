import { API_ENDPOINTS } from "@/util/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import qs from "qs";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GLOBAL_API,
    paramsSerializer: (params: any) =>
      qs.stringify(params, { arrayFormat: "brackets" }),
  }),
  endpoints: (builder) => ({
    getCatalogSlug: builder.query<any, {
      slug: string,
      catalogId?: number,
      search?: string,
      filters?: Record<string, string[]>,
      includeImages?: boolean,
      includeFeatures?: boolean,
      includeFilters?: boolean,
      page?: number,
      limit?: number,
    }>({
      query: ({
        slug,
        catalogId = Number(process.env.API_CATALOG_ID),
        search,
        filters,
        includeImages = true,
        includeFeatures = true,
        includeFilters = true,
        page = 1,
        limit = 10,
      }) => {
        const params: Record<string, any> = {
          catalogId,
          search,
          includeImages,
          includeFeatures,
          includeFilters,
          page,
          limit,
        };

        if (filters) {
          params.filters = filters;
        }

        return {
          url: `${API_ENDPOINTS.GET_CATALOG_SLUG}${slug}`,
          params,
        };
      },
    }),
  }),
});

export const { useGetCatalogSlugQuery } = catalogApi;