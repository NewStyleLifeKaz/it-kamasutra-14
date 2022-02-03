import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhotos from "../../../assets/image/users.png";
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, ...props }) => {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />;
	}

	const onMainPhotosSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}

	const onSubmit = (formData) => {
		props.saveProfile(formData)
			.then(() => {
				setEditMode(false);
			});
		//setEditMode(false);
	}

	return (
		<div>
			{/* <div className={s.item}>
				<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
			</div> */}
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large || userPhotos} className={s.mainPhoto} />
				{props.isOwner && <input type={'file'} onChange={onMainPhotosSelected} />}

				{editMode
					? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
					: <ProfileData profile={profile} isOwner={props.isOwner} goTOEditMode={() => setEditMode(true)} />}

				<ProfileStatusWithHooks status={props.status} updateStatusThunk={props.updateStatusThunk} />
			</div>
		</div>
	);
}

const ProfileData = ({ profile, isOwner, goTOEditMode }) => {
	return <div>
		{isOwner && <div><button onClick={goTOEditMode}>Edit</button></div>}
		<div>
			<b>Full Name</b>: {profile.fullName}
		</div>
		<div>
			<b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
		</div>
		{profile.lookingForAJob &&
			<div>
				<b>My professional skills</b>: {profile.lookingForAJobDescription}
			</div>
		}
		<div>
			<b>About me</b>: {profile.aboutMe}
		</div>
		<div>
			<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>
	</div>
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;