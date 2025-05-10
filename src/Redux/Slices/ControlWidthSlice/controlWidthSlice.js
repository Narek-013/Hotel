import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    maxWidth: "",
    menu: false,
}

const controlWidthSlice = createSlice({
    name : "controlWidthSlice",
    initialState,
    reducers : {
       changeWidth: (state, {payload}) => {
        state.maxWidth = payload
        
       },
       openMenu: (state, {payload}) => {
        state.menu = payload
       }
    },
})
export const {changeWidth, openMenu} = controlWidthSlice.actions
export default controlWidthSlice.reducer
    