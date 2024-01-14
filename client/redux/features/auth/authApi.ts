import { apiSlice } from "../api/apiSlice";

import { userRegistration } from "./authSlice";

interface RegisterationResponse {
  message: string;
  activationToken: string;
}

interface RegisterationData {}
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterationResponse, RegisterationData>({
      query: (data) => ({
        url: "registeration",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ activation_Token, activation_code }) => ({
        url: "activate-user",
        method: "POST",
        body: {
          activation_Token,
          activation_code,
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;
