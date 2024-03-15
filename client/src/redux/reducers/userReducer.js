import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_EDIT_REQUEST,
  USER_EDIT_FAILURE,
  USER_EDIT_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAIL,
  USER_CLEAR_ERRORS,
  USER_FETCH_REQUEST,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS
} from "../constants/constant";
const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
  isAuthenticated: false,
  token: null,
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_EDIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case USER_REGISTER_SUCCESS:
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
        error: null,
      };
    case USER_REGISTER_FAILURE:
    case USER_EDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false,
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        token:action.token,
        error: null,
      };     
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.error,
      };
    case USER_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case USER_LOGOUT:
      return { ...state, loading: false,isAuthenticated:false, user:null };
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated:true,
        error: action.error,
      };

      case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      };
    case USER_FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    default:
      return state;
  }
};

// import { createSlice } from "@reduxjs/toolkit";
// import { signUpUser, signInUser, changePasswordUser, loggedUser } from '../actions/userAction';
// import Cookies from "js-cookie";

// const initialState = {
//   msg: "",
//   user: "",
//   token: "",
//   loading: false,
//   error: "",
// };

// const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addToken: (state, action) => {
//       state.token = Cookies.getItem("token");
//     },
//     addUser: (state, action) => {
//       state.user = Cookies.getItem("user");
//     },
//     logout: (state, action) => {
//       state.token = null;
//       Cookies.clear();
//     },
//   },
//   extraReducers: {
//     [signInUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signInUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//         state.token = token;
//         state.user = user;

//         Cookies.setItem("msg", msg);
//         Cookies.setItem("user", JSON.stringify(user));
//         // localStorage.setItem("token", token);
//         Cookies.set("jwt",token)
//       }
//     },
//     [signInUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//     [signUpUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signUpUser.fulfilled]: (state, { payload: { error, msg, token } }) => {
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//         Cookies.set("jwt",token)
//       }

//     },
//     [signUpUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//     [changePasswordUser.pending]:(state, action)=>{
//       state.loading = true;
//     },
//     [changePasswordUser.fulfilled]:(state, { payload: { error, msg}})=>{
//       state.loading = false;
//       if (error) {
//         state.error = error;
//       } else {
//         state.msg = msg;
//       }
//     },
//     [changePasswordUser.rejected]: (state, action) => {
//       state.loading = true;
//     },
//     // [loggedUser.pending]:(state, action)=>{
//     //   state.loading = true;
//     // },
//     // [loggedUser.fulfilled]:(state, { payload: { error, msg}})=>{
//     //   state.loading = false;
//     //   if (error) {
//     //     state.error = error;
//     //   } else {
//     //     state.msg = msg;
//     //   }
//     // },
//     // [loggedUser.rejected]: (state, action) => {
//     //   state.loading = true;
//     // }
//   },
// });

// export const { addToken, addUser, logout } = authSlice.actions;
// export default authSlice.reducer;
