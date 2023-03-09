import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    userDetail: [],
    hostelBookings: null,
    // console.log(user)
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.userDetail = [];
      state.hostelBookings = null;
      state.isLoggedIn = false;
    },
    fetchDetail: (state, action) => {
      state.userDetail = action.payload
    },
    fetchBookings: (state, action) => {
      state.hostelBookings = action.payload
    },
  },

});
export const { login, logout, fetchDetail, fetchBookings } = userSlice.actions;
export default userSlice;
