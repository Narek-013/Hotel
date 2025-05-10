import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axiosConfig";
import { getAccessToken } from "../../../Utils/accountUtlis";

export const getUserData = createAsyncThunk("getUserData", async function () {
  try {
    const token = getAccessToken();
    const response = await instance.get("api/user/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch (error) {
    console.error(error);
  }
});

export const changeUserDatasThunk = createAsyncThunk(
  "changeUserDatasThunk",
  async function ({ userId, updatedUserData }) {
    try {
      const response = await instance.put(
        `api/user/change/${userId}`,
        updatedUserData
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const deleteUserThunk = createAsyncThunk(
  "deleteUserThunk",
  async function ({ user_id }) {
    try {
      const response = await instance.delete(`api/user/remove/${user_id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
