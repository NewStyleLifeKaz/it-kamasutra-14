import MyPostsContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}
				isOwner={props.isOwner} savePhoto={props.savePhoto} />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;