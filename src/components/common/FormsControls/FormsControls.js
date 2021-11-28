import { Field } from 'redux-form';
import styles from './FormsControls.module.css';

export const FormsControls = ({ input, meta, FormType, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
			<div>
				<FormType {...input} {...props} />
				{/* {props.children} */}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const TextArea = (props) => {
	return <FormsControls {...props} FormType={'textarea'}></FormsControls>
}
export const Input = (props) => {
	return <FormsControls {...props} FormType={'input'}></FormsControls>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => (<div>
	<Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />{text}
</div>)


// export const TextArea = (props) => {
// 	const { input, meta, ...restProps } = props;
// 	return <FormsControls {...props} ><textarea {...input} {...restProps} /></FormsControls>
// }

// export const Input = (props) => {
// 	const { input, meta, ...restProps } = props;
// 	return <FormsControls {...props}><input {...input} {...restProps} /></FormsControls>
// }





// export const TextArea = ({ input, meta, ...props }) => {
// 	const hasError = meta.touched && meta.error;
// 	return (
// 		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
// 			<div><textarea {...input} {...props} /></div>
// 			{hasError && <span>{meta.error}</span>}
// 		</div>
// 	)
// }
// export const Input = ({ input, meta, ...props }) => {
// 	const hasError = meta.touched && meta.error;
// 	return (
// 		<div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
// 			<div><input {...input} {...props} /></div>
// 			{hasError && <span>{meta.error}</span>}
// 		</div>
// 	)
// }