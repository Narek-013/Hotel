import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axiosConfig";

export const getHotelsListThunk = createAsyncThunk(
  "getHotelsListThunk",

  async function () {

    try {
      const response = await instance.get("api/hotels");

      return response.data.data;
      
    } catch (error) {
      console.error(error);
    }
  }
);

export const getSingleHotelThunk = createAsyncThunk(
  "getSingleHotelThunk",
  async function ({ id }) {
    try {

      const response = await instance.get(`api/hotels/${id}`);
      
      return response.data.hotel;

    } catch (error) {
      console.error(error);
    }
  }
);

export const getSingleRoomThunk = createAsyncThunk(
  "getSingleRoomThunk",
  async function ({ roomID }) {
    try {

      const response = await instance.get(`api/hotels/room/${roomID}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
