import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://cdn.vox-cdn.com/thumbor/N6-QGX2FaDUgPW3-RRqoM3dfpkQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979927/jomi_avatar_nickleodeon_ringer.jpg" alt="" />
			post {props.message}
			<div>
				<span>Like </span>{props.LikesCount}
			</div>
		</div>
	);
}

export default Post;