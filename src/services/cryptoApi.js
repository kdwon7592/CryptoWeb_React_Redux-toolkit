import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0e31c80b69msh05a6d29d6229d32p1283cajsn866bb5be6a37',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: ({ coinUuid, timePeriod }) => createRequest(`/coin/${coinUuid}?timePeriod=${timePeriod}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinUuid, timePeriod }) => createRequest(`/coin/${coinUuid}/history?timePeriod=${timePeriod}`)
        }),
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptoExchangesQuery } = cryptoApi;