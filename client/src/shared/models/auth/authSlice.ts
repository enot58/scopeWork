import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api";
import { IAuthSlice, IDataError } from "../../interfaces";

const initialState: IAuthSlice = {
    roles: [],
    isAuth: false,
    isLoading: false,
    isError: false,
    token: null,
    dataError: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.isAuth = false;
            state.token = null;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(
            authApi.endpoints.register.matchPending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            authApi.endpoints.register.matchFulfilled,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload.token;
            }
        );
        builder.addMatcher(
            authApi.endpoints.register.matchRejected,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.isError = true;
                const { data, status } = action.payload as IDataError;
                state.dataError = {
                    status: Number(status),
                    data,
                };
            }
        );
        builder.addMatcher(
            authApi.endpoints.login.matchPending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload.token;
            }
        );
        builder.addMatcher(
            authApi.endpoints.login.matchRejected,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.isError = true;
                state.token = null;
                localStorage.removeItem("token");
                const { data, status } = action.payload as IDataError;
                state.dataError = {
                    status: Number(status),
                    data,
                };
            }
        );
        builder.addMatcher(
            authApi.endpoints.check.matchPending,
            (state, action) => {
                state.isLoading = true;
            }
        );
        builder.addMatcher(
            authApi.endpoints.check.matchFulfilled,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = true;
                state.token = action.payload.token;
            }
        );
        builder.addMatcher(
            authApi.endpoints.check.matchRejected,
            (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.isError = true;
                state.token = null;
                localStorage.removeItem("token");
                const { data, status } = action.payload as IDataError;
                state.dataError = {
                    status: Number(status),
                    data,
                };
            }
        );
    },
});

export const authReducer = authSlice.reducer;
