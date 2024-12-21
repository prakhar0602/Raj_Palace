import { createSlice } from "@reduxjs/toolkit";
import {room} from '../Data_Files/Rooms_and_Venues_Details'
// Initial State



const initialState = null;

// Slice
const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomDetails(state, action) {
      const query = action.payload;
      // console.log(room[query])
      return room[query];
    },
  },
});

// Actions
export const { setRoomDetails } = roomSlice.actions;

// Reducer
export default roomSlice.reducer;
