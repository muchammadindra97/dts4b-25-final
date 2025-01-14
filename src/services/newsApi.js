import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQueryWithToken = (args, api, extraOptions) => {
  args = appendQueryStringParam(args, 'api_token', process.env.REACT_APP_API_TOKEN);

  return fetchBaseQuery({baseUrl: process.env.REACT_APP_API_BASE_URL})(args, api, extraOptions);
};

function appendQueryStringParam(args, key, value) {
  let urlEnd = typeof args === 'string' ? args : args.url;

  if (urlEnd.indexOf('?') < 0) urlEnd += '?';
  else urlEnd += '&';

  urlEnd += `${key}=${value}`;

  return typeof args === 'string' ? urlEnd : { ...args, url: urlEnd };
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: baseQueryWithToken,
  endpoints: (builder) => ({
    getTopStories: builder.query({
      query: ({limit = 2}) => `/top?sort=published_on&locale=us&limit=${limit}`
    }),
    getAllNews: builder.query({
      query: ({limit = 5, search = ''}) => `/all?sort=published_on&language=en&limit=${limit}&search=${search}`
    }),
    getNewsByUUID: builder.query({
      query: ({uuid}) => `/uuid/${uuid}`
    }),
    getSimilarNewsByUUID: builder.query({
      query: ({uuid, limit = 3}) => `/similar/${uuid}?limit=${limit}&language=en`
    }),
  })
});

export const {
  useGetTopStoriesQuery,
  useGetAllNewsQuery,
  useGetNewsByUUIDQuery,
  useGetSimilarNewsByUUIDQuery
} = newsApi;