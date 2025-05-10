import { createSlice } from "@reduxjs/toolkit";
import {
  clearCartSliceThunk,
  clearHistorySliceThunk,
  getCartHistorySliceThunk,
  getCartSliceThunk,
  removeHistoryItemSliceThunk,
  removeReserveSliceThunk,
} from "./cartSliceThunk";

const initialState = {
  cart: [],
  cartHistory: [],
};

const getCartSlice = createSlice({
  name: "getCartSlice",
  initialState,
  reducers: {
    removeReserveItem: (state, action) => {
      state.cart.reserved_hotels = state.cart.reserved_hotels.filter(
        (item) => item._id !== action.payload
      );
    },
    removeHistoryItem: (state, action) => {
      state.cartHistory.reserved_hotels =
        state.cartHistory.reserved_hotels.filter(
          (item) => item._id !== action.payload
        );
    },
    clearAllCart: (state, action) => {
      state.cart = [];
    },
    clearAllHistory: (state, action) => {
      state.cartHistory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartSliceThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(getCartSliceThunk.fulfilled, (state, { payload }) => {
        state.cart = payload;
        state.loadingStatus = "fulfilled";
      })
      .addCase(getCartSliceThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(getCartHistorySliceThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(getCartHistorySliceThunk.fulfilled, (state, { payload }) => {
        state.cartHistory = payload;
        state.loadingStatus = "fulfilled";
      })
      .addCase(getCartHistorySliceThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(removeReserveSliceThunk.pending, (state) => {
        state.removeReserveStatus = "pending";
      })
      .addCase(removeReserveSliceThunk.fulfilled, (state, action) => {
        state.removeReserveStatus = "fulfilled";
      })
      .addCase(removeReserveSliceThunk.rejected, (state, action) => {
        state.removeReserveStatus = "rejected";
      })

      .addCase(removeHistoryItemSliceThunk.pending, (state) => {
        state.removeHistoryItemStatus = "pending";
      })
      .addCase(removeHistoryItemSliceThunk.fulfilled, (state, action) => {
        state.removeHistoryItemStatus = "fulfilled";
      })
      .addCase(removeHistoryItemSliceThunk.rejected, (state, action) => {
        state.removeHistoryItemStatus = "rejected";
      })

      .addCase(clearCartSliceThunk.pending, (state) => {
        state.clearCartStatus = "pending";
      })
      .addCase(clearCartSliceThunk.fulfilled, (state, action) => {
        state.clearCartStatus = "fulfilled";
      })
      .addCase(clearCartSliceThunk.rejected, (state, action) => {
        state.clearCartStatus = "rejected";
      })

      .addCase(clearHistorySliceThunk.pending, (state) => {
        state.clearHistoryStatus = "pending";
      })
      .addCase(clearHistorySliceThunk.fulfilled, (state, action) => {
        state.clearHistoryStatus = "fulfilled";
      })
      .addCase(clearHistorySliceThunk.rejected, (state, action) => {
        state.clearHistoryStatus = "rejected";
      });
  },
});
export const {
  removeReserveItem,
  clearAllCart,
  clearAllHistory,
  removeHistoryItem,
} = getCartSlice.actions;
export default getCartSlice.reducer;
