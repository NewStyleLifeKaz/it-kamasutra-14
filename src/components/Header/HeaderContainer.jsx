import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
	// componentDidMount() {
	// 	this.props.getAuthUserDataThunk()
	// 	/* authAPI.me()
	// 		.then(response => {
	// 			if (response.data.resultCode === 0) {
	// 				let { email, id, login } = response.data.data;
	// 				this.props.setAuthUserData(email, id, login);
	// 			}
	// 		}); */
	// }
	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, { logout })(HeaderContainer);