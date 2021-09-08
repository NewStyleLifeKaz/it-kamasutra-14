const FOLLOW = 'Follow';
const UNFOLLOW = 'Unfollow';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 28,
	currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
	debugger;
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				//!users: [...state.users],
				//!users: state.users.map(u => u),  - Две записи в коменнтах идентичны
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.count }

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

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default usersReducer;