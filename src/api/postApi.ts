import {api} from '.';

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    listPosts: build.query<any, void>({
      providesTags: ['Post'],
      query: () => '/games/',
    }),
    addPost: build.mutation<string, {payload: Partial<any>; userId: string}>({
      invalidatesTags: ['Post'],
      query: ({userId, payload}) => ({
        body: {
          user: userId,
          ...payload,
        },
        method: 'POST',
        url: '/games/',
      }),
    }),
    updatePost: build.mutation<string, {payload: Partial<any>; userId: string}>(
      {
        invalidatesTags: ['Post'],
        query: ({userId, payload}) => ({
          body: {
            user: userId,
            ...payload,
          },
          method: 'PUT',
          url: `/games/${payload.id}/`,
        }),
      },
    ),
  }),
  overrideExisting: false,
});

export const {useListPostsQuery, useAddPostMutation, useUpdatePostMutation} =
  postApi;
