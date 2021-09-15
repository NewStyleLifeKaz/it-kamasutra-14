import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div>
			<div className={s.item}>
				<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;