import { baseAPI } from "./baseApi";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLottery: builder.query({
      query: (type: any) =>
        `/api/luckito/lottery/get-lottery?lotteryType=${type}`,
    }),
  }),
});

export const { useGetLotteryQuery } = authAPI;
