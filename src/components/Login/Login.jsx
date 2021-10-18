import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls";
import { requiredValidate } from "../Utils/validator/validators";

const LoginPageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Login'} name={'login'} component={Input} validate={[requiredValidate]} />
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'} component={Input} validate={[requiredValidate]} />
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me
			</div>
			<button>Login</button>
		</form>
	)
}

const LoginPageReduxForm = reduxForm({ form: 'login' })(LoginPageForm);

const LoginPage = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return <div>
		<h1>Login</h1>
		<LoginPageReduxForm onSubmit={onSubmit} />
	</div>
}

export default LoginPage;