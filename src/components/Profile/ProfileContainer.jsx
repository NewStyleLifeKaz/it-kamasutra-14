import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusThunk, getUserProfileThunk, updateStatusThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
//import { withAuthRedirect } from '../HOC/withAuthRedurect';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 19693;
		}
		this.props.getUserProfileThunk(userId);
		this.props.getStatusThunk(userId);
		/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			}); */
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
		)
	};
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

export default compose(
	connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk }),
	withRouter
	//withAuthRedirect
)(ProfileContainer);