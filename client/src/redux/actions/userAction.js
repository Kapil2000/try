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
  USER_FETCH_SUCCESS,
} from "../constants/constant";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

// user registeration
export const signUpUser = (email, userName, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const response = await axios.post(
        "http://localhost:8000/api/auth/user-register",
        { email, userName, password }
      );
      console.log(response);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// user login

export const signInUser = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await axios.post(
      "http://localhost:8000/api/auth/user-login",
      {
        userName,
        password,
      }
    );
    const token = response.data.token;
    console.log(token);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
      token: token,
    });
    console.log(response);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: USER_CLEAR_ERRORS });
};
// edit user

export const editRequest = () => ({
  type: USER_EDIT_REQUEST,
});

export const editSuccess = () => ({
  type: USER_EDIT_SUCCESS,
});

export const editFailure = (error) => ({
  type: USER_EDIT_FAILURE,
  error,
});
export const changePasswordUser =
  (email, userName, password, confirm_password) => async (dispatch) => {
    try {
      dispatch(editRequest());
      const response = await axios.put(
        "http://localhost:8000/api/auth/user-change-password",
        { email, userName, password, confirm_password },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      const token = response.data.token;
      console.log(token);
      if (!response.ok) {
        throw new Error("Failed to edit user");
      }
      dispatch({ type: USER_EDIT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: USER_EDIT_FAILURE, payload: error.message });
    }
  };

// user logout
export const logout = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/auth/user-logout",
      { data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: USER_LOGOUT,
      // payload: response.data,
    });
  } catch (error) {
    // Handle error here
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.response.message });
  }
};

// LOGGED USER
export const userFetchRequest = () => ({
  type: USER_FETCH_REQUEST,
});

export const userFetchSuccess = (users) => ({
  type: USER_FETCH_SUCCESS,
  payload: users,
});

export const userFetchFailure = (error) => ({
  type: USER_FETCH_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(userFetchRequest());
    axios
      .get("http://localhost:8000/api/auth/logged-user")
      .then((response) => {
        dispatch(userFetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userFetchFailure(error.message));
      });
  };
};
// ********************

// import { createAsyncThunk } from "@reduxjs/toolkit";
// // import Cookies from "js-cookie";
// // import axios from "axios";

// import {
//   SIGN_UP_USER,
//   SIGN_IN_USER,
//   CHANGE_PASSWORD_USER,
//   LOGGED_USER,
// } from "../constants/constant";
// import Cookies from "js-cookie";

// // signup user
// export const signUpUser = createAsyncThunk(SIGN_UP_USER, async (body) => {
//   try {
//     let res = await fetch("http://localhost:8000/api/auth/user-register", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer${token}`,
//       },
//       body: JSON.stringify(body),
//     });

//     res = await res.json();
//     Cookies.set("jwt", res.token);
//     // console.log(res)
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// });

// // signin user
// export const signInUser = createAsyncThunk(SIGN_IN_USER, async (body) => {
//   try {
//     let res = await fetch("http://localhost:8000/api/auth/user-login", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     res = await res.json();
//     Cookies.set("jwt", res.token);
//     // console.log(res)
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// });

// // change password user or edit user
// export const changePasswordUser = createAsyncThunk(
//   CHANGE_PASSWORD_USER,
//   async (body) => {
//     const res = await fetch(
//       "http://localhost:8000/api/auth/user-change-password",
//       {
//         method: "post",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer${Cookies}`,
//         },
//         body: JSON.stringify(body),
//       }
//     );
//     return await res.json();
//   }
// );

// // logged user
// // export const loggedUser = createAsyncThunk(LOGGED_USER, async () => {
// //   let data = await fetch("http://localhost:8000/api/auth/logged-user");
// //   data = await data.json();
// //   Show_data(data);
// // });
