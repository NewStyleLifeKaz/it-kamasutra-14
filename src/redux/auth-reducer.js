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
				...action.data,
				isAuth: true
			}

		default:
			return state;
	}
};

export const setAuthUserData = (email, id, login) => ({ type: SET_USER_DATA, data: { email, id, login } });

export const getAuthUserDataThunk = () => (dispatch) => {
	authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { email, id, login } = response.data.data;
			dispatch(setAuthUserData(email, id, login));
		}
	});
};

export default authReducer;