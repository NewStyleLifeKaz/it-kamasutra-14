import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
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

					<Route /* exact */ path="/Dialogs"
						render={() => <DialogsContainer />} />
					<Route path="/Profile"
						render={() => <Profile />} />
					<Route path="/News" />
					<Route path="/Music" />
					<Route path="/Settings" />

				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
