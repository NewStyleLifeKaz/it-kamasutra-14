import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "1 Privet", LikesCount: 12 },
				{ id: 2, message: "2 Poka", LikesCount: 11 },
				{ id: 3, message: "3", LikesCount: 1 },
				{ id: 4, message: "4", LikesCount: 344 },
				{ id: 5, message: "5", LikesCount: 555 },
				{ id: 6, message: "6", LikesCount: 667 },
			],
			newPostText: 'it-kamasutra',
		},

		dialogsPage: {
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How are u?" },
				{ id: 3, message: "How is your kamasutra?" },
				{ id: 4, message: "Sup ya'll" },
				{ id: 5, message: "Sup ya'll" },
			],
			dialogs: [
				{ id: 1, name: 'Dimich' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Viktor' },
				{ id: 6, name: 'Valera' },
			],
			newMessageBody: '',
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer; //наблюдатель,observer,pattern
	},


	dispatch(action) { //{TYPE: 'ADD-POST'}

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	},
};

export default store;

