import { stopSubmit } from "redux-form";
import { authAPI } from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	email: null,
	id: null,
	login: null,
	isFetching: false,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
};

export const setAuthUserData = (email, id, login, isAuth) => ({ type: SET_USER_DATA, payload: { email, id, login, isAuth } });

export const getAuthUserDataThunk = () => (dispatch) => {
	return authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				let { email, id, login } = response.data.data;
				dispatch(setAuthUserData(email, id, login, true));
			}
		});
};

export const login = (email, password, rememberMe) => (dispatch) => {

	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserDataThunk());
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
				dispatch(stopSubmit('login', { _error: message }));
			}
		});
};
export const logout = () => (dispatch) => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	});
};

export default authReducer;