import { sendMessageActionCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";


const DialogsContainer = () => {

	// let state = props.store.getState().dialogsPage;

	// let onSendMessageClick = () => {
	// 	props.store.dispatch(sendMessageActionCreator());
	// };

	// let onNewMessageChange = (body) => {
	// 	props.store.dispatch(updateNewMessageBodyCreator(body));
	// };



	return <StoreContext.Consumer>{
		store => {
			let state = store.getState().dialogsPage;
			let onSendMessageClick = () => {
				store.dispatch(sendMessageActionCreator());
			};
			let onNewMessageChange = (body) => {
				store.dispatch(updateNewMessageBodyCreator(body));
			};

			return <Dialogs sendMessage={onSendMessageClick}
				newMessageBody={onNewMessageChange}
				dialogsPage={state} />;
		}
	}
	</StoreContext.Consumer>
}
export default DialogsContainer;