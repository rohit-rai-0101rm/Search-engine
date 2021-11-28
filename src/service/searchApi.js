import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const googleSearchApiHeaders = {
    'x-user-agent':process.env.GOOGLE_SEARCH_RAPID_X_USER_AGENT,
    'x-proxy-location':process.env.GOOGLE_SEARCH_RAPID_API_PROXY_LOCATION,
    
    'x-rapidapi-host':process.env.GOOGLE_SEARCH_RAPID_API_HOST
    ,
    'x-rapidapi-key': process.env.GOOGLE_SEARCH_RAPID_API_KEY
  };
const baseUrl=process.env.GOOGLE_SEARCH_API_URL
const createRequest = (url) => ({ url, headers: googleSearchApiHeaders });
export const searchApi = createApi({
    reducerPath: 'searchApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
    })
})
export const{
    useGetCryptosQuery,useGetExchangesQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
}=searchApi;