import { API_ENDPOINTS } from "@/util/endpoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userHeader = JSON.stringify({
  company: { id: 2 },
  role: { key: "DSN_CUSTOMER_ACCESS" },
});

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT, prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('User', userHeader);
      return headers;
    }
}),
  endpoints: (builder) => ({
    getCategoriesWithChildren: builder.query<any, any>({
      query: () => API_ENDPOINTS.GET_CATEGORIES,
    })
  })
})

export const { useGetCategoriesWithChildrenQuery } = categoryApi;