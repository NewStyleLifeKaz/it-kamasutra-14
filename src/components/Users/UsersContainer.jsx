import React from 'react';
import { connect } from 'react-redux';
import { follow, getUsersThunk, setCurrentPage, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
	getCurrentPagetSelectors,
	getFollowingInProgressSelectors,
	getIsFetchingSelectors,
	getPageSizeSelectors,
	getTotalUsersCountSelectors,
	getUsersSuperSelectors
} from '../../redux/users-selectors';


class UsersContainer extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	// props.setUsers([
	// 	{
	// 		id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: true, fullName: 'Dmitry', status: 'I am so pretty', location: { city: 'Minsk', country: 'Belarus' }
	// 	},
	// 	{
	// 		id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: false, fullName: 'Andrey', status: 'Yo bro', location: { city: 'Moscow', country: 'Russia' }
	// 	},
	// 	{
	// 		id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: true, fullName: 'Sveta', status: 'So cool', location: { city: 'Kiev', country: 'Ukraine' }
	// 	},
	// ])
	componentDidMount() {
		const { currentPage, pageSize } = this.props;
		this.props.getUsersThunk(currentPage, pageSize);
		/* this.props.toggleIsFetching(true);
		userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		}); */
	}
	onCurrentPage = (pageNumber) => {
		const { pageSize } = this.props;
		//lesson 90
		this.props.setCurrentPage(pageNumber);
		this.props.getUsersThunk(pageNumber, pageSize);
		/* this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		}); */
	}

	render() {
		console.log('RENDER USERS');
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onCurrentPage={this.onCurrentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				followingInProgress={this.props.followingInProgress} />
		</>
	}
};

let mapStateToProps = (state) => {
	console.log('mapStateToProps USERS')
	return ({
		//users: getUsersEasySelectors(state),
		users: getUsersSuperSelectors(state),
		pageSize: getPageSizeSelectors(state),
		totalUsersCount: getTotalUsersCountSelectors(state),
		currentPage: getCurrentPagetSelectors(state),
		isFetching: getIsFetchingSelectors(state),
		followingInProgress: getFollowingInProgressSelectors(state)

		// users: state.usersPage.users,
		// pageSize: state.usersPage.pageSize,
		// totalUsersCount: state.usersPage.totalUsersCount,
		// currentPage: state.usersPage.currentPage,
		// isFetching: state.usersPage.isFetching,
		// followingInProgress: state.usersPage.followingInProgress,
	})
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unfollow: (userId) => {
// 			dispatch(unfollowAC(userId));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (number) => {
// 			dispatch(setCurrentPageAC(number));
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount));
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching));
// 		}
// 	}
// }

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsersThunk })(UsersContainer);