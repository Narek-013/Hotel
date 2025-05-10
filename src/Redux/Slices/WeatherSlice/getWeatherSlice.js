import { createSlice } from "@reduxjs/toolkit"
import { getWeatherThunk } from "./getWeatherSliceThunk"

const initialState = {
    weatherList : []
}
const getWeatherSlice = createSlice({
    name : "hotelsListSlice",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
        .addCase(getWeatherThunk.pending, (state,action) => {
            state.loadingStatus = "pending"
        })
        .addCase(getWeatherThunk.fulfilled, (state, {payload}) => {
            state.weatherList = payload
            state.loadingStatus = "fulfilled"
        })
        .addCase(getWeatherThunk.rejected, (state, action) => {
            state.loadingStatus = "rejected"
        })  
    }
})
export default getWeatherSlice.reducer