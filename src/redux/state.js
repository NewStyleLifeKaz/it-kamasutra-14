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
				{ id: 6, message: "Sup ya'll" },
			],
			dialogs: [
				{ id: 1, name: 'Dimich' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Viktor' },
				{ id: 6, name: 'Valera' },
			],
		},
		sidebar: {}
	},
	getState() {

		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	addPost() {

		let newPost = {
			id: 7,
			message: this._state.profilePage.newPostText,
			LikesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer; //наблюдатель,observer,pattern
	},
};

export default store;

window.store = store;

