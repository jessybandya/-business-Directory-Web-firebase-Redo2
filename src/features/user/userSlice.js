import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
    },

    setSignOutState: (state) => {
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.displayName;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photoURL;

export default userSlice.reducer;