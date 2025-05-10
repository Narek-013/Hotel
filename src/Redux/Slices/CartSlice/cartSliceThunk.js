import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axiosConfig";

export const getCartSliceThunk = createAsyncThunk(
  "getCartSliceThunk",
  async function (userID) {
    try {
      const response = await instance.get(`/api/cart/${userID}`);

      return response.data.cart;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getCartHistorySliceThunk = createAsyncThunk(
  "getCartHistorySliceThunk",

  async function (userID) {
    try {
      const response = await instance.get(`/api/cart/history/${userID}`);

      return response.data.reserveHistory;
    } catch (error) {
      console.error(error);
    }
  }
);
export const removeReserveSliceThunk = createAsyncThunk(
  "removeReserveSliceThunk",
  async function (reserve_id) {
    try {
      const response = await instance.delete(
        `/api/cart/reserve/remove/${reserve_id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const removeHistoryItemSliceThunk = createAsyncThunk(
  "removeHistoryItemSliceThunk",
  async function (reserve_id) {
    try {
      const response = await instance.delete(
        `/api/cart/reserve/remove/${reserve_id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const clearCartSliceThunk = createAsyncThunk(
  "clearCartSliceThunk",
  async function (cart_id) {
    try {
      const response = await instance.delete(`/api/cart/clear/${cart_id}`);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const clearHistorySliceThunk = createAsyncThunk(
  "clearHistorySliceThunk",
  async function (history_id) {
    (history_id);

    try {
      const response = await instance.delete(
        `/api/cart/history/clear/${history_id}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
