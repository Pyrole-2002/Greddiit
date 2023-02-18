import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { STATES } from 'mongoose'
import authService from "redux/auth/authService"

// Get user from local storage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ""
        },
    },
    // extraReducers: () = {},
})

export const { reset } = authSlice.actions
export default authSlice.reducer