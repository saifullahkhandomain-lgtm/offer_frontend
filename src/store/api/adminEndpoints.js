import { apiSlice } from './apiSlice';

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Auth
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getMe: builder.query({
      query: () => '/auth/me',
      transformResponse: (response) => response.data,
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: '/auth/update-profile',
        method: 'PUT',
        body,
      }),
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: '/auth/update-password',
        method: 'PUT',
        body,
      }),
    }),

    // Dashboard
    getStats: builder.query({
      query: () => '/admin/stats',
      transformResponse: (response) => response.data,
      providesTags: ['AdminStats'],
    }),

    // Stores
    getAdminStores: builder.query({
      query: () => '/admin/stores',
      transformResponse: (response) => response.data,
      providesTags: ['AdminStores'],
    }),
    createStore: builder.mutation({
      query: (body) => ({
        url: '/admin/stores',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AdminStores', 'Stores'],
    }),
    updateStore: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/stores/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminStores', 'Stores'],
    }),
    deleteStore: builder.mutation({
      query: (id) => ({
        url: `/admin/stores/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminStores', 'Stores'],
    }),

    // Coupons
    getAdminCoupons: builder.query({
      query: () => '/admin/coupons',
      transformResponse: (response) => response.data,
      providesTags: ['AdminCoupons'],
    }),
    getAdminCouponById: builder.query({
      query: (id) => `/admin/coupons/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, id) => [{ type: 'AdminCoupons', id }],
    }),
    createCoupon: builder.mutation({
      query: (body) => ({
        url: '/admin/coupons',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AdminCoupons', 'Coupons'],
    }),
    updateCoupon: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/coupons/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminCoupons', 'Coupons'],
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/admin/coupons/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminCoupons', 'Coupons'],
    }),

    // Categories
    getAdminCategories: builder.query({
      query: () => '/admin/categories',
      providesTags: ['AdminCategories'],
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: '/admin/categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AdminCategories', 'Categories'],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/admin/categories/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminCategories', 'Categories'],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/admin/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminCategories', 'Categories'],
    }),

    // Blogs
    getAdminBlogs: builder.query({
      query: () => '/blogs/admin/all',
      providesTags: ['AdminBlogs'],
    }),
    getAdminBlogById: builder.query({
      query: (id) => `/blogs/admin/${id}`,
      providesTags: (result, error, id) => [{ type: 'AdminBlogs', id }],
    }),
    createBlog: builder.mutation({
      query: (body) => ({
        url: '/blogs',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AdminBlogs', 'Blogs'],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/blogs/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminBlogs', 'Blogs'],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminBlogs', 'Blogs'],
    }),

    // Pages
    getAdminPages: builder.query({
      query: () => '/pages/admin/all',
      providesTags: ['AdminPages'],
    }),
    updatePage: builder.mutation({
      query: ({ slug, ...body }) => ({
        url: `/pages/${slug}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['AdminPages', 'Pages'],
    }),

    // Messages
    getMessages: builder.query({
      query: () => '/messages',
      providesTags: ['AdminMessages'],
    }),
    markMessageRead: builder.mutation({
      query: (id) => ({
        url: `/messages/${id}/read`,
        method: 'PUT',
      }),
      invalidatesTags: ['AdminMessages'],
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: `/messages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AdminMessages'],
    }),

    // Settings
    updateSettings: builder.mutation({
      query: (body) => ({
        url: '/settings',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Settings'],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useGetStatsQuery,
  useGetAdminStoresQuery,
  useCreateStoreMutation,
  useUpdateStoreMutation,
  useDeleteStoreMutation,
  useGetAdminCouponsQuery,
  useGetAdminCouponByIdQuery,
  useCreateCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
  useGetAdminCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAdminBlogsQuery,
  useGetAdminBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetAdminPagesQuery,
  useUpdatePageMutation,
  useGetMessagesQuery,
  useMarkMessageReadMutation,
  useDeleteMessageMutation,
  useUpdateSettingsMutation,
} = adminApi;
