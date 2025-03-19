import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counterSlice";
import  {bgReducer } from "../features/bgSlice";


const store = configureStore({

    reducer : {
      counter : counterReducer,
      bg : bgReducer
    },

    devTools : true,  

});

export default store;