import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, withRouter } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React from 'react';
import { getAuthUserDataThunk } from './redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader />
		}

		return (

			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>

					{/* <Route path = "/dialogs" component={Dialogs} />
					<Route path="/profile" component={Profile} />
					<Route path="/News" />
					<Route path="/Music" />
					<Route path="/Settings" /> */}

					<Route /* exact */ path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <LoginPage />} />
					<Route path="/news" />
					<Route path="/music" />
					<Route path="/settings" />

				</div>
			</div>

		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);
