import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../common/FormsControls/FormsControls";
import { requiredValidate, TextLengthCreator } from "../../Utils/validator/validators";

const MaxLength20 = TextLengthCreator(20);

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={TextArea} name='newMessageBody' placeholder='Enter your message'
				validate={[requiredValidate, MaxLength20]} />
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

let AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default AddMessageReduxForm;