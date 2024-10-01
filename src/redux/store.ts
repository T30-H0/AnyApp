import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appRedux';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// export interface Post {
//   id: string;
//   name: string;
// }

// type PostsResponse = Post[];

// export const api = createApi({
//   baseQuery: fetchBaseQuery({baseUrl: '/'}),
//   tagTypes: ['Post'],
//   endpoints: build => ({
//     //get single post
//     getPost: build.query<Post, string>({
//       query: id => `posts/${id}`,
//       providesTags: (result, error, id) => [{type: 'Post', id}],
//     }),

//     //get list post
//     getPosts: build.query<PostsResponse, void>({
//       query: () => 'posts',
//       providesTags: result =>
//         result
//           ? [
//               ...result.map(({id}) => ({type: 'Post' as const, id})),
//               {type: 'Post', id: 'LIST'},
//             ]
//           : [{type: 'Post', id: 'LIST'}],
//     }),
//     // add a new post
//     addPost: build.mutation<Post, Partial<Post>>({
//       query: body => ({
//         url: 'posts',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: [{type: 'Post', id: 'LIST'}],
//     }),

//     // update a new post
//     updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
//       query: ({id, ...patch}) => ({
//         url: `posts/${id}`,
//         method: 'PUT',
//         body: patch,
//       }),
//       async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
//         const patchResult = dispatch(
//           api.util.updateQueryData('getPost', id, draft => {
//             Object.assign(draft, patch);
//           }),
//         );
//         try {
//           await queryFulfilled;
//         } catch {
//           patchResult.undo();
//         }
//       },
//       invalidatesTags: (result, error, {id}) => [{type: 'Post', id}],
//     }),

//     // delete a post
//     deletePost: build.mutation<{success: boolean; id: number}, number>({
//       query(id) {
//         return {
//           url: `posts/${id}`,
//           method: 'DELETE',
//         };
//       },
//       invalidatesTags: (result, error, id) => [{type: 'Post', id}],
//     }),
//   }),
// });

// export const {
//   useGetPostQuery,
//   useGetPostsQuery,
//   useAddPostMutation,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = api;
