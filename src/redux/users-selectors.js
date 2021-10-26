export const getUsersSelectors = (state) => {
	return state.usersPage.users;
}

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
