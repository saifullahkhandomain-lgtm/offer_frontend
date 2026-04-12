import { apiSlice } from './apiSlice';

export const publicApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),
    getStores: builder.query({
      query: () => '/stores',
      providesTags: ['Stores'],
    }),
    getStoreBySlug: builder.query({
      query: (slug) => `/stores/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Stores', id: slug }],
    }),
    getCoupons: builder.query({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            searchParams.append(key, String(value));
          }
        });
        const qs = searchParams.toString();
        return `/coupons${qs ? `?${qs}` : ''}`;
      },
      transformResponse: (response, meta, arg) => {
        if (Array.isArray(response)) {
          const limit = arg?.limit || 12;
          const page = arg?.page || 1;
          const total = response.length;
          const totalPages = Math.ceil(total / limit);
          const start = (page - 1) * limit;
          return {
            coupons: response.slice(start, start + limit),
            pagination: { total, totalPages },
          };
        }
        return {
          coupons: response.coupons || [],
          pagination: response.pagination || { total: 0, totalPages: 1 },
        };
      },
      providesTags: ['Coupons'],
    }),
    getCouponsByStore: builder.query({
      query: (slug) => `/coupons/store/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Coupons', id: slug }],
    }),
    getBlogs: builder.query({
      query: () => '/blogs',
      transformResponse: (response) => response.blogs || [],
      providesTags: ['Blogs'],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => `/blogs/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Blogs', id: slug }],
    }),
    getPageBySlug: builder.query({
      query: (slug) => `/pages/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Pages', id: slug }],
    }),
    getSettings: builder.query({
      query: () => '/settings',
      providesTags: ['Settings'],
    }),
    sendMessage: builder.mutation({
      query: (body) => ({
        url: '/messages',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetStoresQuery,
  useGetStoreBySlugQuery,
  useGetCouponsQuery,
  useGetCouponsByStoreQuery,
  useGetBlogsQuery,
  useGetBlogBySlugQuery,
  useGetPageBySlugQuery,
  useGetSettingsQuery,
  useSendMessageMutation,
} = publicApi;
