import { createSelector } from "reselect";

const getUsersEasySelectors = (state) => {
	return state.usersPage.users;
}
const getUsersMiddleSelectors = (state) => {
	return getUsersEasySelectors(state).filter(u => true);
}
export const getUsersSuperSelectors = createSelector(getUsersEasySelectors,
	(users) => {

		return users.filter(u => true);
	})

export const getPageSizeSelectors = (state) => {
	return state.usersPage.pageSize;

}
export const getTotalUsersCountSelectors = (state) => {
	return state.usersPage.totalUsersCount;
}

export const getCurrentPagetSelectors = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetchingSelectors = (state) => {
	return state.usersPage.isFetching;
}

export const getFollowingInProgressSelectors = (state) => {
	return state.usersPage.followingInProgress;
}
