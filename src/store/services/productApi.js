import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    // Fetch products with filtering options
    getProducts: builder.query({
      query: ({
        limit = 0,
        skip = 0,
        select = "title,price,images",
        sortBy = "",
        order = "",
      }) =>
        `products?limit=${limit}&skip=${skip}&select=${select}&sortBy=${sortBy}&order=${order}`,
    }),

    // Fetch a single product by ID
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
