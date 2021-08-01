import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>

					{/* <Route path = "/dialogs" component={Dialogs} />
					<Route path="/profile" component={Profile} />
					<Route path="/News" />
					<Route path="/Music" />
					<Route path="/Settings" /> */}

					<Route /* exact */ path="/dialogs"
						render={() => <Dialogs appState={props.state.dialogsPage} />} />
					<Route path="/profile"
						render={() => <Profile state={props.state.profilePage} />} />
					<Route path="/News" />
					<Route path="/Music" />
					<Route path="/Settings" />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
