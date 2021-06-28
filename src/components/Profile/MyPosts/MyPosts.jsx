import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
			</div>
		</div>
	);
}

export default MyPosts;