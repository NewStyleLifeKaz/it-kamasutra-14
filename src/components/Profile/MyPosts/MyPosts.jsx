import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const MyPosts = (props) => {
	// let posts = [
	// 	{ id: 1, message: "1 Privet", LikesCount: 12 },
	// 	{ id: 2, message: "2 Poka", LikesCount: 11 },
	// 	{ id: 3, message: "3", LikesCount: 1 },
	// 	{ id: 4, message: "4", LikesCount: 344 },
	// 	{ id: 5, message: "5", LikesCount: 555 },
	// 	{ id: 6, message: "6", LikesCount: 667 },
	// ]

	let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		//let action= {type: 'ADD-POST'};
		let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
		props.dispatch(action);
		//props.updateNewPostText('')
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
		props.dispatch(updateNewPostTextActionCreator(text));
	};

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={addPost}>Add button</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div >
	);
}

export default MyPosts;