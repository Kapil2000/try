import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  SIGN_UP_USER,
  SIGN_IN_USER,
  CHANGE_PASSWORD_USER,
  LOGGED_USER,
} from "../constants/constant";

// signup user
export const signUpUser = createAsyncThunk(SIGN_UP_USER, async (body) => {
  const res = await fetch("http://localhost:8000/api/auth/user-register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer${token}`,
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

// signin user
export const signInUser = createAsyncThunk(SIGN_IN_USER, async (body) => {
  const res = await fetch("http://localhost:8000/api/auth/user-login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
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
