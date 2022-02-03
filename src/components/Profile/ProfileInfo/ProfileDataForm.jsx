import { reduxForm } from "redux-form";
import { CreateField, Input, TextArea } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import styles from "./../../common/FormsControls/FormsControls.module.css"
//Lesson 97
const ProfileDataForm = ({ profile, handleSubmit, error }) => {
	return <form onSubmit={handleSubmit}>
		<div><button>save</button></div>
		{error && <div className={styles.formSummaryError}>
			{error}
		</div>}
		<div>
			<b>Full Name</b>: {CreateField('Full Name', 'fullName', [], Input)}
		</div>
		<div>
			<b>Looking for a job</b>:
			{/* {profile.lookingForAJob ? 'yes' : 'no'} */}
			{CreateField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
		</div>

		<div>
			<b>My professional skills</b>:
			{CreateField('My professional skills', 'lookingForAJobDescription', [], TextArea,)}
		</div>

		<div>
			<b>About me</b>:
			{CreateField('About me', 'aboutMe', [], TextArea,)}
		</div>
		<div>
			<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <div key={key} className={s.contact}>
					<b>{key}: {CreateField(key, 'Contacts.' + key, [], Input)}</b>
				</div>
			})}
		</div>
	</form>
}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataFormRedux;