import { createSlice } from "@reduxjs/toolkit"
import { signInThunk, signOutThunk, signUpThunk } from "./authSliceThunk"

const initialState = {
}

const authSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(signUpThunk.pending, (state,action) => {
            state.signUpStatus = "pending"
        })
        .addCase(signUpThunk.fulfilled, (state, {payload}) => {
            state.signUpStatus = "fulfilled"
        })
        .addCase(signUpThunk.rejected, (state, action) => {
            state.signUpStatus = "rejected"
        })  
        .addCase(signInThunk.pending, (state,action) => {
            state.signInStatus = "pending"
        })
        .addCase(signInThunk.fulfilled, (state, {payload}) => {
            state.signInStatus = "fulfilled"
        })
        .addCase(signInThunk.rejected, (state, action) => {
            state.signInStatus = "rejected"
        })  
        .addCase(signOutThunk.pending, (state,action) => {
            state.signOutStatus = "pending"
        })
        .addCase(signOutThunk.fulfilled, (state, {payload}) => {
            state.signOutStatus = "fulfilled"
        })
        .addCase(signOutThunk.rejected, (state, action) => {
            state.signOutStatus = "rejected"
        })  
    }
})
export default authSlice.reducer