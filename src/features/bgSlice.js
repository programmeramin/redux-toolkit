import { createSlice } from "@reduxjs/toolkit";



const bgSlice = createSlice({
    name : "bg",

    initialState : {
        bg : "bg-violet-500",
    },

    reducers : {
        bgGreen : (state) =>{
            state.bg = "green"
        },

        bgRed : (state) =>{
            state.bg = "red"
        },

        bgBlue : (state) =>{
            state.bg = "blue"
        },

    }

});

export const {bgGreen, bgBlue, bgRed} = bgSlice.actions;

export const bgReducer = bgSlice.reducer;