import MyPostsContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
}

export default Profile;