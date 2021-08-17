const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({ id: 6, message: body });
			return state;
		default:
			return state;
	}

	// if (action.type === UPDATE_NEW_MESSAGE_BODY) {
	// 	state.newMessageBody = action.body;
	// } else if (action.type === SEND_MESSAGE) {
	// 	let body = state.newMessageBody;
	// 	state.newMessageBody = '';
	// 	state.messages.push({ id: 6, message: body });
	// }
	// return state;
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;