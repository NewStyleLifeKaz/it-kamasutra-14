import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../HOC/withAuthRedurect';


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
		return (
			<Profile profile={this.props.profile} />
		)
	};
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfileThunk })(WithUrlDataContainerComponent);