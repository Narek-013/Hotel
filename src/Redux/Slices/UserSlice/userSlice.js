import { createSlice } from "@reduxjs/toolkit"
import { changeUserDatasThunk, deleteUserThunk, getUserData } from "./userSliceThunk"

const initialState = {
   user : []
}
const authSlice = createSlice({
    name : "authSlice",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getUserData.pending, (state,action) => {
            state.loadingStatus = "pending"
        })
        .addCase(getUserData.fulfilled, (state, {payload}) => {
            state.user = payload
            state.loadingStatus = "fulfilled"
        })
        .addCase(getUserData.rejected, (state, action) => {
            state.loadingStatus = "rejected"
        })  
        .addCase(deleteUserThunk.pending, (state,action) => {
            state.deleteUserStatus = "pending"
        })
        .addCase(deleteUserThunk.fulfilled, (state, {payload}) => {
            state.deleteUserStatus = "fulfilled"
        })
        .addCase(deleteUserThunk.rejected, (state, action) => {
            state.deleteUserStatus = "rejected"
        })  
        .addCase(changeUserDatasThunk.pending, (state,action) => {
            state.changeUserStatus = "pending"
        })
        .addCase(changeUserDatasThunk.fulfilled, (state, {payload}) => {
            state.changeUserStatus = "fulfilled"
        })
        .addCase(changeUserDatasThunk.rejected, (state, action) => {
            state.changeUserStatus = "rejected"
        })  
    }
})
export default authSlice.reducer