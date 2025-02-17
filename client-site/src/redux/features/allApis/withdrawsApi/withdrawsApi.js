import baseApi from "../../baseApi";

const withdrawsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add a deposit
    addWithdraw: builder.mutation({
      query: (data) => ({
        url: "/deposits",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["deposits"],
    }),

    // get all deposits
    getWithdraws: builder.query({
      query: () => "/deposits",
      providesTags: ["deposits"],
    }),
  }),
});

export const { useAddWithdrawMutation, useGetWithdrawsQuery } = withdrawsApi;
