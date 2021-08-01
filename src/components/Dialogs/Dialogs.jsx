import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

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

	let dialogsElements = props.appState.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = props.appState.messages.map(m => <Message message={m.message} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>

				{dialogsElements}

			</div>
			<div className={s.messages}>
				{messagesElements}

			</div>
		</div>
	);
}
export default Dialogs;