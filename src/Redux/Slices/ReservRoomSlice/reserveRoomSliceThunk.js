import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axiosConfig";
import { getAccessToken } from "../../../Utils/accountUtlis";

export const reserveRoomSliceThunk = createAsyncThunk(
  "reserveRoomSliceThunk",
  async function (reservationData) {
    try {
      const token = getAccessToken();

      const response = await instance.post(
        "api/cart/reserve",
        reservationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const changeReservedRoomThunk = createAsyncThunk(
  "changeReservedRoomThunk",
  async function ({ reserveID, updatedReservedData }) {
    try {
      const response = await instance.put(
        `api/cart/reserve/change/${reserveID}`,
        updatedReservedData
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
