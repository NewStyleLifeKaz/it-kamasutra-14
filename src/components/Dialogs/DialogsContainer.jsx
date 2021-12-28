import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
//import { withAuthRedirect } from "../HOC/withAuthRedurect";
import Dialogs from "./Dialogs";


// const DialogsContainer = () => {

// 	// let state = props.store.getState().dialogsPage;

// 	// let onSendMessageClick = () => {
// 	// 	props.store.dispatch(sendMessageActionCreator());
// 	// };

// 	// let onNewMessageChange = (body) => {
// 	// 	props.store.dispatch(updateNewMessageBodyCreator(body));
// 	// };



// 	return <StoreContext.Consumer>{
// 		store => {
// 			//let state = store.getState().dialogsPage;
// 			let onSendMessageClick = () => {
// 				store.dispatch(sendMessageActionCreator());
// 			};
// 			let onNewMessageChange = (body) => {
// 				store.dispatch(updateNewMessageBodyCreator(body));
// 			};

// 			return <Dialogs sendMessage={onSendMessageClick}
// 				updatenewMessageBody={onNewMessageChange}
// 				dialogsPage={store.getState().dialogsPage} />;
// 		}
// 	}
// 	</StoreContext.Consumer>

// }

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => { dispatch(sendMessageActionCreator(newMessageBody)); }
		// updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)); }
	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	//withAuthRedirect
)(Dialogs);