import { createSlice } from "@reduxjs/toolkit";
import {list} from '../Data_Files/Rooms_Suits_Venues_Short_List'



let initialState = null;


function setlist(state, action) {
  const query = action.payload;
  let object = {
    heading: query,
    list: list[query],
  };
  return object;
}

const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    setList: (state, action) => setlist(state, action),
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
