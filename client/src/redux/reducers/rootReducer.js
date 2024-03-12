import { combineReducers } from "redux";
import authSlice from "./userReducer";
import { reduce01 } from "./supplierReducer";
import { contactReducer } from "./contactReducer";
import { getintouchReducer } from "./getintouchReducer";
import { fetchReducer } from "./fetchcardReducer";
import { likeReducer } from "./likeReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  contactReducer,
  getintouchReducer,
  fetchReducer,
  likeReducer,
  searchReducer,

  reducer1: {
    user: authSlice,
  },
  reducer: reduce01,
});

export default rootReducer;
