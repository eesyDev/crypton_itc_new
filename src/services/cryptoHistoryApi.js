import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY,
//     'X-RapidAPI-Host':  process.env.REACT_APP_CRYPTO_API_HOST
// };

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '8c0242ca71msh5bfe5752287ce21p1a260bjsne4b1bf3900bf',
    'X-RapidAPI-Host':  'coinranking1.p.rapidapi.com'
};

const createRequest = ({url, params}) => ({
    url, params, headers: cryptoApiHeaders
});

export const cryptoHistoryApi = createApi({
    reducerPath: 'cryptoHistoryApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest({
                url: `coin/${coinId}/history`,
                params: {timePeriod}
            }),
        }),
    })
});

export const { 
    useGetCryptoHistoryQuery
 } = cryptoHistoryApi