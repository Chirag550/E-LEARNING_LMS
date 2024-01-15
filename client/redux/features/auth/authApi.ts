import { apiSlice } from "../api/apiSlice";

import { userLoggedIn, userRegistration } from "./authSlice";

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
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation, useLoginMutation } =
  authApi;
