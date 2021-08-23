import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {

	//let state = props.store.getState().profilePage;

	// let addPost = () => {
	// 	let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
	// 	props.store.dispatch(action);
	// };

	// let onPostChange = (text) => {
	// 	props.store.dispatch(updateNewPostTextActionCreator(text));
	// };

	return (
		<StoreContext.Consumer>{
			(store) => {
				let state = store.getState().profilePage;
				let addPost = () => {
					let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
					store.dispatch(action);
				};
				let onPostChange = (text) => {
					store.dispatch(updateNewPostTextActionCreator(text));
				};

				return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
					posts={state.posts}
					newPostText={state.newPostText} />;
			}
		}
		</StoreContext.Consumer>
	)
};

export default MyPostsContainer;