import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


// const MyPostsContainer = () => {

// 	//let state = props.store.getState().profilePage;

// 	// let addPost = () => {
// 	// 	let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
// 	// 	props.store.dispatch(action);
// 	// };

// 	// let onPostChange = (text) => {
// 	// 	props.store.dispatch(updateNewPostTextActionCreator(text));
// 	// };

// 	return (
// 		<StoreContext.Consumer>{
// 			(store) => {
// 				let state = store.getState().profilePage;
// 				let addPost = () => {
// 					let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
// 					store.dispatch(action);
// 				};
// 				let onPostChange = (text) => {
// 					store.dispatch(updateNewPostTextActionCreator(text));
// 				};

// 				return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
// 					posts={state.posts}
// 					newPostText={state.newPostText} />;
// 			}
// 		}
// 		</StoreContext.Consumer>
// 	)
// };

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		// updateNewPostText: (text) => {
		// 	let action = updateNewPostTextActionCreator(text);
		// 	dispatch(action);
		// },
		addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)); }
	}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;