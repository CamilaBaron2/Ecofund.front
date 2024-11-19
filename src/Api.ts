import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const campanasApi = createApi({
  reducerPath: 'campanasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://tu-backend.local/api' }), // Ajusta la URL según tu configuración
  endpoints: (builder) => ({
    agregarCampana: builder.mutation({
      query: (nuevaCampana) => ({
        url: '/campanas',
        method: 'POST',
        body: nuevaCampana,
      }),
    }),
    obtenerCampana: builder.query({
      query: () => '/campanas/top',
    }),
    sacarCampana: builder.mutation({
      query: () => ({
        url: '/campanas',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useAgregarCampanaMutation, useObtenerCampanaQuery, useSacarCampanaMutation } = campanasApi;
