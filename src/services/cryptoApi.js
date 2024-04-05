import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
//     'X-RapidAPI-Host':  process.env.REACT_APP_CRYPTO_API_HOST
// };

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '8c0242ca71msh5bfe5752287ce21p1a260bjsne4b1bf3900bf',
    'X-RapidAPI-Host':  'coinranking1.p.rapidapi.com'
};

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (id) => createRequest(`/coin/${id}`)
        })
    })
});

export const { 
    useGetCryptosQuery,
    useGetCryptoDetailsQuery
 } = cryptoApi