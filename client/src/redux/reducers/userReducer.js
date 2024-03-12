import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser, changePasswordUser, loggedUser } from '../actions/userAction';
import Cookies from "js-cookie";

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
      state.token = Cookies.getItem("token");
    },
    addUser: (state, action) => {
      state.user = Cookies.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      Cookies.clear();
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

        Cookies.setItem("msg", msg);
        Cookies.setItem("user", JSON.stringify(user));
        // localStorage.setItem("token", token);
        Cookies.set("jwt",token)
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg, token } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        Cookies.set("jwt",token)
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

