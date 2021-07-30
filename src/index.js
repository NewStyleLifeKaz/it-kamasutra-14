import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: "1 Privet", LikesCount: 12 },
	{ id: 2, message: "2 Poka", LikesCount: 11 },
	{ id: 3, message: "3", LikesCount: 1 },
	{ id: 4, message: "4", LikesCount: 344 },
	{ id: 5, message: "5", LikesCount: 555 },
	{ id: 6, message: "6", LikesCount: 667 },
]

let dialogs = [
	{ id: 1, name: 'Dimich' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Viktor' },
	{ id: 6, name: 'Valera' },
];

let messages = [
	{ id: 1, message: "Hi" },
	{ id: 2, message: "How are u?" },
	{ id: 3, message: "How is your kamasutra?" },
	{ id: 4, message: "Sup ya'll" },
	{ id: 5, message: "Sup ya'll" },
	{ id: 6, message: "Sup ya'll" },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
