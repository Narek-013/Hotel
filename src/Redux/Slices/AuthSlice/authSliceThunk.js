import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../Config/axiosConfig";
import { getAccessToken, removeAuthToken } from "../../../Utils/accountUtlis";

export const signUpThunk = createAsyncThunk(
  "signUpThunk",
  async function ({ firstName, lastName, email, password, confirmPassword }) {
    try {
      
      const response = await instance.post("api/auth/signUp", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      return response.data;

    } catch (error) {
      console.error(error);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "signInThunk",
  async function ({ email, password }) {
    try {
      
      const response = await instance.post("api/auth/signIn", {
        email: email,
        password: password,
      });
      
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);


export const  signOutThunk = createAsyncThunk(
    "signOutThunk",
    async function(user_id){
        try {
            const response = await instance.post("api/auth/signOut",{
               user_id: user_id
            })

            removeAuthToken()
            return response.data
        } catch (error) {
            console.error(error)
        }
    }
)
