import baseApi from "../../baseApi";

const customerSupportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add new support info
    addSupport: builder.mutation({
      query: (data) => ({
        url: "/customer-support",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["customerSupport"],
    }),

    // Get all support info
    getAllSupport: builder.query({
      query: () => "/customer-support",
      providesTags: ["customerSupport"],
    }),

    // Get single support info by ID
    getSupportById: builder.query({
      query: (id) => `/customer-support/${id}`,
      providesTags: ["customerSupport"],
    }),

    // Update support info
    updateSupport: builder.mutation({
      query: ({ id, data }) => ({
        url: `/customer-support/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["customerSupport"],
    }),

    // Delete support info
    deleteSupport: builder.mutation({
      query: (id) => ({
        url: `/customer-support/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["customerSupport"],
    }),
  }),
});

export const {
  useAddSupportMutation,
  useGetAllSupportQuery,
  useGetSupportByIdQuery,
  useUpdateSupportMutation,
  useDeleteSupportMutation,
} = customerSupportApi;
