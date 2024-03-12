import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser, changePasswordUser, loggedUser } from '../actions/userAction';

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
    [changePasswordUser.pending]:(state, action)=>{
      state.loading = true;
    },
    [changePasswordUser.fulfilled]:(state, { payload: { error, msg}})=>{
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [changePasswordUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // [loggedUser.pending]:(state, action)=>{
    //   state.loading = true;
    // },
    // [loggedUser.fulfilled]:(state, { payload: { error, msg}})=>{
    //   state.loading = false;
    //   if (error) {
    //     state.error = error;
    //   } else {
    //     state.msg = msg;
    //   }
    // },
    // [loggedUser.rejected]: (state, action) => {
    //   state.loading = true;
    // }
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
