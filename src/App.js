import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/store-redux';
import React, { Component, Suspense } from 'react';

//Lesson 94
//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

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
					<Suspense fallback={<Preloader />}>
						<Route /* exact */ path="/dialogs" render={() => <DialogsContainer />} />
						<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/login" render={() => <LoginPage />} />
						<Route path="/news" />
						<Route path="/music" />
						<Route path="/settings" />
					</Suspense>

				</div>
			</div>

		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

//Lesson 92
let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);
//basename={`${process.env.PUBLIC_URL}`}
const SamuraiJSApp = (props) => {
	return <HashRouter>
		<Provider store={store} ><AppContainer /></Provider >,
	</HashRouter>
}

export default SamuraiJSApp;
