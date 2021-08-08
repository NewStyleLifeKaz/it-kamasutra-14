let rerenderEntireTree = () => {
	console.log('State changed');
};

let state = {
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
}

window.state = state;

export const addPost = () => {
	let newPost = {
		id: 7,
		message: state.profilePage.newPostText,
		LikesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer; //наблюдатель,observer,pattern
};

export default state;