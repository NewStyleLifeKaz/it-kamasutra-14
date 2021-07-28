import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let postsData = [
		{ id: 1, message: "1 Privet", LikesCount: 12 },
		{ id: 2, message: "2 Poka", LikesCount: 11 },
		{ id: 3, message: "3", LikesCount: 1 },
		{ id: 4, message: "4", LikesCount: 344 },
		{ id: 5, message: "5", LikesCount: 555 },
		{ id: 6, message: "6", LikesCount: 667 },
	]
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
				<Post message={postsData[0].message} LikesCount={postsData[0].LikesCount} />
				<Post message={postsData[1].message} LikesCount={postsData[1].LikesCount} />
				<Post message={postsData[2].message} LikesCount={postsData[2].LikesCount} />
				<Post message={postsData[3].message} LikesCount={postsData[3].LikesCount} />
				<Post message={postsData[4].message} LikesCount={postsData[4].LikesCount} />
				<Post message={postsData[5].message} LikesCount={postsData[5].LikesCount} />
			</div>
		</div>
	);
}

export default MyPosts;