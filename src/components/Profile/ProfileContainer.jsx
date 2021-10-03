import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunk } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';


class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfileThunk(userId)
		/* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then(response => {
				this.props.setUserProfile(response.data);
			}); */
	}
	render() {
		if (!this.props.isAuth) return <Redirect to='/login' />

		return (
			<Profile profile={this.props.profile} />
		)
	};
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfileThunk })(WithUrlDataContainerComponent);