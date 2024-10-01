import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import Config from 'react-native-config';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL_API,
    prepareHeaders: async headers => {
      //   const user = await AsyncStorageService.getStoredData();
      //   const hasUser = !!user && !!user!.userToken;

      //   if (hasUser) {
      //     headers.set('Authorization', `Token ${user.userToken}`);
      //   }

      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['Post'],
});
