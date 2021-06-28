import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div>
			My posts
			<div>
				New post
			</div>
			<div>
				<textarea></textarea>
				<button>Add button</button>
			</div>
			<div className={s.posts}>
				<Post message='1 Privet' LikesCount='0' />
				<Post message="2 Poka" LikesCount="23" />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;