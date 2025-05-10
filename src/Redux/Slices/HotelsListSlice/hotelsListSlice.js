import { createSlice } from "@reduxjs/toolkit"
import { getHotelsListThunk, getSingleRoomThunk } from "./hotelsListSliceThunk"

const initialState = {
    hotelsList : [],
    room : []
}

const hotelsListSlice = createSlice({
    name : "hotelsListSlice",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getHotelsListThunk.pending, (state,action) => {
            state.loadingStatus = "pending"
        })
        .addCase(getHotelsListThunk.fulfilled, (state, {payload}) => {
            state.hotelsList = payload
            state.loadingStatus = "fulfilled"
        })
        .addCase(getHotelsListThunk.rejected, (state, action) => {
            state.loadingStatus = "rejected"
        })  
        .addCase(getSingleRoomThunk.pending, (state,action) => {
            state.loadingStatus = "pending"
        })
        .addCase(getSingleRoomThunk.fulfilled, (state, {payload}) => {
            state.room = payload.room
            
            state.loadingStatus = "fulfilled"
        })
        .addCase(getSingleRoomThunk.rejected, (state, action) => {
            state.loadingStatus = "rejected"
        })  
    }
})
export default hotelsListSlice.reducer