import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let state = props.dialogsPage;
	// let dialogs = [
	// 	{ id: 1, name: 'Dimich' },
	// 	{ id: 2, name: 'Andrey' },
	// 	{ id: 3, name: 'Sveta' },
	// 	{ id: 4, name: 'Sasha' },
	// 	{ id: 5, name: 'Viktor' },
	// 	{ id: 6, name: 'Valera' },
	// ];

	// let messages = [
	// 	{ id: 1, message: "Hi" },
	// 	{ id: 2, message: "How are u?" },
	// 	{ id: 3, message: "How is your kamasutra?" },
	// 	{ id: 4, message: "Sup ya'll" },
	// 	{ id: 5, message: "Sup ya'll" },
	// 	{ id: 6, message: "Sup ya'll" },
	// ];

	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = state.messages.map(m => <Message message={m.message} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
		// 	props.store.dispatch(sendMessageActionCreator());
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
		// 	props.store.dispatch(updateNewMessageBodyCreator(body));
	}



	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>

				{dialogsElements}

			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea value={newMessageBody}
						onChange={onNewMessageChange}
						placeholder='Enter your message'></textarea></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>

			</div>
		</div>
	);
}
export default Dialogs;