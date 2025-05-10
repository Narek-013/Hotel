import axios from "axios";
import { getAccessToken } from "../../Utils/accountUtlis";

const token = getAccessToken();
const lang = localStorage.getItem("lang") || "am";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    authorization: `Bearer ${token}`,
   "Accept-Language": lang,
  },
  
});


