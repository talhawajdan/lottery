import { baseAPI } from "./baseApi";

export const authAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getLottery: builder.query({
      query: ({payload}) =>
        `/api/luckito/lottery/get-lottery?lotteryType=${payload.param.type}`,
    }),
  }),
});

export const { useGetLotteryQuery } = authAPI;
