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
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
}

export default MyPosts;