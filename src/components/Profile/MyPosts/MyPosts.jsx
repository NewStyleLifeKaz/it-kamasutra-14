import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add button</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message='1 Privet' LikesCount='0' />
				<Post message="2 Poka" LikesCount="23" />
				<Post message='3' LikesCount='1' />
				<Post message='4' LikesCount='2' />
				<Post message='5' LikesCount='3' />
				<Post message='6' LikesCount='4' />
			</div>
		</div>
	);
}

export default MyPosts;