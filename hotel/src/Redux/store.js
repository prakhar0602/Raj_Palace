import { configureStore } from "@reduxjs/toolkit";
import roomReducer from './Room'
import listReducer from './List'
import variablesReducer from './CommonVariables'
export const store = configureStore({
    reducer:{
        room:roomReducer,
        list:listReducer,
        variables:variablesReducer
    }
})