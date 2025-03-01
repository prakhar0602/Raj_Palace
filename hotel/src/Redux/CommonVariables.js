import { createSlice } from "@reduxjs/toolkit";

let initialState={loading:false};

let variables = createSlice({
    name:'Variables',
    initialState,
    reducers:{
        setLoading:(state,action)=>{state.loading=action.payload}
    }
})

export const {setLoading} = variables.actions;
export default variables.reducer;