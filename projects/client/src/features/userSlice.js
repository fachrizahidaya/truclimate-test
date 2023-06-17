import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    userName: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.value.id = action.payload.id;
      state.value.userName = action.payload.userName;
    },
    logoutUser: (state, action) => {
      state.value.userName = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
