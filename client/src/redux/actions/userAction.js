import { createAsyncThunk } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";
// import axios from "axios";

import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  CHANGE_PASSWORD_USER,
  LOGGED_USER,
} from "../constants/constant";
import Cookies from "js-cookie";

// signup user
export const signUpUser = createAsyncThunk(SIGN_UP_USER, async (body) => {
  try {
    let res = await fetch("http://localhost:8000/api/auth/user-register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer${token}`,
      },
      body: JSON.stringify(body),
    });

    res = await res.json();
    Cookies.set("jwt", res.token);
    // console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
});

// signin user
export const signInUser = createAsyncThunk(SIGN_IN_USER, async (body) => {
  try {
    let res = await fetch("http://localhost:8000/api/auth/user-login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    res = await res.json();
    Cookies.set("jwt", res.token);
    // console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
});

// change password user or edit user
export const changePasswordUser = createAsyncThunk(
  CHANGE_PASSWORD_USER,
  async (body) => {
    const res = await fetch(
      "http://localhost:8000/api/auth/user-change-password",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer${Cookies}`,
        },
        body: JSON.stringify(body),
      }
    );
    return await res.json();
  }
);

// logged user
// export const loggedUser = createAsyncThunk(LOGGED_USER, async () => {
//   let data = await fetch("http://localhost:8000/api/auth/logged-user");
//   data = await data.json();
//   Show_data(data);
// });
