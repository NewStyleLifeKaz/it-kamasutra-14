import { stopSubmit } from "redux-form";
import { authAPI, securityCaptchaUrl } from "../components/api/api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCES = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCES';

let initialState = {
	email: null,
	id: null,
	login: null,
	isFetching: false,
	isAuth: false,
	captchaUrl: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCES:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
};

export const setAuthUserData = (email, id, login, isAuth) => ({ type: SET_USER_DATA, payload: { email, id, login, isAuth } });
export const getCaptchaUrlSucces = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCES, payload: { captchaUrl } });

export const getAuthUserDataThunk = () => async (dispatch) => {
	// return authAPI.me()
	// .then(response => {}
	let response = await authAPI.me();

	if (response.data.resultCode === 0) {
		let { email, id, login } = response.data.data;
		dispatch(setAuthUserData(email, id, login, true));
	}
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

	let response = await authAPI.login(email, password, rememberMe, captcha);

	if (response.data.resultCode === 0) {
		dispatch(getAuthUserDataThunk());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrlThunk())
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: message }));
	}
};

export const getCaptchaUrlThunk = () => async (dispatch) => {

	let response = await securityCaptchaUrl.getCaptchaUrl();
	let captchaUrl = response.data.url;

	dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logout = () => async (dispatch) => {

	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;