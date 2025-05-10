import { configureStore } from "@reduxjs/toolkit";
import hotelsList from "./Slices/HotelsListSlice/hotelsListSlice.js"
import weatherList from "./Slices/WeatherSlice/getWeatherSlice.js"
import user from "./Slices/UserSlice/userSlice.js"
import reserve from "./Slices/ReservRoomSlice/reserveRoomSlice.js"
import cart from "./Slices/CartSlice/cartSlice.js"
import auth from "./Slices/AuthSlice/authSlice.js"
import controlWidthSlice from "./Slices/ControlWidthSlice/controlWidthSlice.js"
const store = configureStore({
    reducer : {
        hotels : hotelsList,
        weather : weatherList,
        userData : user,
        authData : auth,
        reserveData : reserve, 
        cartData : cart,
        width : controlWidthSlice 
    }
})

export default store