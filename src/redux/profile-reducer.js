import { stopSubmit } from "redux-form";
import { profileAPI, userAPI } from "../components/api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
	posts: [
		{ id: 1, message: "1 Privet", LikesCount: 12 },
		{ id: 2, message: "2 Poka", LikesCount: 11 },
		{ id: 3, message: "3", LikesCount: 1 },
		{ id: 4, message: "4", LikesCount: 344 },
		{ id: 5, message: "5", LikesCount: 555 },
		{ id: 6, message: "6", LikesCount: 667 },
	],
	//newPostText: 'it-kamasutra',
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 7,
				message: action.newPostText,
				LikesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				//newPostText: ''
			};

		// case UPDATE_NEW_POST_TEXT:
		// 	return {
		// 		...state,
		// 		newPostText: action.newText
		// 	};

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		case SET_STATUS:
			return { ...state, status: action.status };

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.postID)
			};

		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			};
		case SAVE_PROFILE_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			};

		default:
			return state;
	}

	// if (action.type === ADD_POST) {
	// 	let newPost = {
	// 		id: 7,
	// 		message: state.newPostText,
	// 		LikesCount: 0
	// 	};
	// 	state.posts.push(newPost);
	// 	state.newPostText = '';
	// } else if (action.type === UPDATE_NEW_POST_TEXT) {
	// 	state.newPostText = action.newText;
	// }
	// return state;
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const saveProfileSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
// export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfileThunk = (userId) => async (dispatch) => {
	let response = await userAPI.getProfile(userId);

	dispatch(setUserProfile(response.data))

}

export const getStatusThunk = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);

	dispatch(setStatus(response.data))

}

export const updateStatusThunk = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);

	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhotoThunk = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}
export const saveProfileThunk = (profile) => async (dispatch, getState) => {
	const userId = getState().auth.id;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfileThunk(userId))
	} else {
		//dispatch(stopSubmit('edit-profile', { 'Contacts': { "facebook": response.data.messages[0] } }));
		dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
		return Promise.reject(response.data.messages[0]);
	}
}

export default profileReducer;