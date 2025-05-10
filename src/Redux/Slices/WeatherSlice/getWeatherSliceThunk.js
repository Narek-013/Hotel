import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getWeatherThunk = createAsyncThunk(
  "getWeatherThunk",
  async function (city) {
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
