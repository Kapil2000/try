import { combineReducers } from "redux";
// import { reducer } from "./reducer";
import authSlice from "../authSlice";
import authSlice from "./userReducer";
import { reducer01 } from "./supplierReducer";
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
  reducer: {
    user: authSlice,
  },
  reducer: reducer01,
});

export default rootReducer;
