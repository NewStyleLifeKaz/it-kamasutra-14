import MyPostsContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}
				isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile} />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;