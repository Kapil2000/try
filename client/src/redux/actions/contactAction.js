import axios from 'axios';
import { CONTACT_REQUEST, CONTACT_SUCCESS, CONTACT_FAILURE } from '../constant/constant'
// export const SET_CONTACT = 'SET_CONTACT';

export const setContact = (name, email, phone, service, msg) => {
    return async (dispatch) => {
        dispatch({ type: CONTACT_REQUEST });
        try {
            const response = await axios.post('http://localhost:8000/api/auth/contact-us', { name, email, phone, service, msg });
            // dispatch({
            // type: SET_CONTACT,
            // payload: response.data
            // });
            dispatch({
                type: CONTACT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: CONTACT_FAILURE,
                payload: error.message
            });
            // console.error('Error:', error);
        }
    };
};
