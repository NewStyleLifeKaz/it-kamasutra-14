import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getStatusThunk, getUserProfileThunk, savePhotoThunk, saveProfileThunk, updateStatusThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
//import { withAuthRedirect } from '../HOC/withAuthRedurect';


class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfileThunk(userId);
		this.props.getStatusThunk(userId);
	}

	componentDidMount() {
		this.refreshProfile();
		/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			}); */
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		//console.log('RENDER PROFILE');
		return (
			<Profile {...this.props}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				savePhoto={this.props.savePhotoThunk}
				saveProfile={this.props.saveProfileThunk}
				updateStatusThunk={this.props.updateStatusThunk} />
		)
	};
}

let mapStateToProps = (state) => {
	//console.log('mapStateToProps PROFILE')
	return ({
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
		isAuth: state.auth.isAuth
	})
};


export default compose(
	connect(mapStateToProps, {
		getUserProfileThunk, getStatusThunk,
		updateStatusThunk, savePhotoThunk, saveProfileThunk
	}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer);