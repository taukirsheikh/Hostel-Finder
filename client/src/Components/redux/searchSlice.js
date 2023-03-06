import { createSlice } from "@reduxjs/toolkit";
const searchSlice = createSlice({
  name: "search",
  initialState: {
    hostelList: [],
   
    // console.log(user)
  },
  reducers: {
    
    searchHostel: (state, action) => {
      state.hostelList = action.payload
    },
  },

});
export const { searchHostel } = searchSlice.actions;
export default searchSlice.reducer;
