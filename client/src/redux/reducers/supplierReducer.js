import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  EDIT_REQUEST,
  EDIT_FAILURE,
  EDIT_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGIN_REQUEST,
  CLEAR_ERRORS,
} from "../constants/constant";
const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
  isAuthenticated: false,
  // user: null,
  token: null,
};

export const reduce01 = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case EDIT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
      };

    case REGISTER_SUCCESS:
    case EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
        error: null,
      };
    case REGISTER_FAILURE:
    case EDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,

        error: null,

        //   console.log(action.payload)
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
        // token:action.payload,
        token:action.token,
        error: null,
       
        

        //   console.log(action.payload)
      };
     
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.error,
      };
    //   case LOGOUT:
    // return {
    //   ...state,
    //   token: null,
    // };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case LOGOUT:
      return { ...state, loading: false,isAuthenticated:false, user:null };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated:true,
        error: action.error,
      };

    default:
      return state;
  }
};
