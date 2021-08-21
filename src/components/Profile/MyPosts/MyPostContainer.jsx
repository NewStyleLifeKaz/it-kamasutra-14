import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

	let state = props.store.getState().profilePage;

	let addPost = () => {
		let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
		props.store.dispatch(action);
	};

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text));
	};

	return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts}
		newPostText={state.newPostText} />;
}

export default MyPostsContainer;