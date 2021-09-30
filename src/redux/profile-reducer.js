import { userAPI } from "../components/api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: "1 Privet", LikesCount: 12 },
		{ id: 2, message: "2 Poka", LikesCount: 11 },
		{ id: 3, message: "3", LikesCount: 1 },
		{ id: 4, message: "4", LikesCount: 344 },
		{ id: 5, message: "5", LikesCount: 555 },
		{ id: 6, message: "6", LikesCount: 667 },
	],
	newPostText: 'it-kamasutra',
	profile: null
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 7,
				message: state.newPostText,
				LikesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			};

		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

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

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfileThunk = (userId) => (dispatch) => {
	userAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data))
	})
}

export default profileReducer;