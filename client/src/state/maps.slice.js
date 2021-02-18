import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickup: null,
  destination: null,
};

const mapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    locationUpdated(state, action) {
      const { inputType, details } = action.payload;
      state[inputType] = details;
    },
  },
});

export const { locationUpdated } = mapsSlice.actions;

export const selectDestination = (state) => state.maps.destination;
export const selectPickUp = (state) => state.maps.pickup;

export default mapsSlice.reducer;
