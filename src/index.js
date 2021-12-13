import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from './App';


// setInterval(() => {
// 	store.dispatch({ type: 'FAKE' })
// }, 1000);

//addPost('SamuraiJs.com');

ReactDOM.render(
	<SamuraiJSApp />, document.getElementById('root')
);

//! пофиксил ошибку обернув BrowserRouter в index.js урок 80
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// ReactDOM.render(
// 	<React.StrictMode>
// 		<Provider store={store} ><App /></Provider >
// 	</React.StrictMode>,
// 	document.getElementById('root')