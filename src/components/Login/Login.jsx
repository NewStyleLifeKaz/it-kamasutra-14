import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import { requiredValidate } from "../Utils/validator/validators";
import styles from './../common/FormsControls/FormsControls.module.css';

const LoginPageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredValidate]} />
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'} type='password' component={Input} validate={[requiredValidate]} />
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me
			</div>
			{props.error && <div className={styles.formSummaryError}>
				{props.error}
			</div>}
			<button>Login</button>
		</form>
	)
}

const LoginPageReduxForm = reduxForm({ form: 'login' })(LoginPageForm);

const LoginPage = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return <div>
		<h1>Login</h1>
		<LoginPageReduxForm onSubmit={onSubmit} />
	</div>
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginPage);