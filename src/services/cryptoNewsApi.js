import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '7497fe9093fc4b15826d7dd7cbe0cb1f';

const createRequest = (url) => ({ url: `${url}&apiKey=${API_KEY}` });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://newsapi.org/v2'}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsName) => createRequest(`/everything?q=${newsName}`),
        }),
    })
});

export const { 
    useGetCryptoNewsQuery
 } = cryptoNewsApi