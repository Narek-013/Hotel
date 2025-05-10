import { createSlice } from "@reduxjs/toolkit";
import { changeReservedRoomThunk, reserveRoomSliceThunk } from "./reserveRoomSliceThunk";

const initialState = {
  reserve: [],
};
const reserveRoomSlice = createSlice({
  name: "reserveRoomSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reserveRoomSliceThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(reserveRoomSliceThunk.fulfilled, (state, { payload }) => {
        state.reserve = payload;
        state.loadingStatus = "fulfilled";
      })
      .addCase(reserveRoomSliceThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(changeReservedRoomThunk.pending, (state, action) => {
        state.changeReserveStatus = "pending";
      })
      .addCase(changeReservedRoomThunk.fulfilled, (state, { payload }) => {
        state.changeReserveStatus = "fulfilled";
      })
      .addCase(changeReservedRoomThunk.rejected, (state, action) => {
        state.changeReserveStatus = "rejected";
      });
  },
});

export default reserveRoomSlice.reducer;
