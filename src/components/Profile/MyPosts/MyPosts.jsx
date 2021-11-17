import Post from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredValidate, TextLengthCreator } from '../../Utils/validator/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';

let MaxLength10 = TextLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={TextArea} name='newPostText' placeholder='Text for message'
				validate={[requiredValidate, MaxLength10]} />
			<div>
				<button>Add button</button>
			</div>
		</form>
	)
}

const AddMypostsFormRedux = reduxForm({ form: 'ProfileAddNewPostFrom' })(AddNewPostForm)
window.props = [];

// class MyPosts extends Component {
// 	render() {
// 		window.props.push(this.props)
// 		console.log('RENDER YO');
// 		let postsElements = this.props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />);
// 		let onAddPost = (values) => {
// 			this.props.addPost(values.newPostText);
// 		};
// 		return (
// 			<div className={s.postsBlock}>
// 				<h3>My posts</h3>
// 				<AddMypostsFormRedux onSubmit={onAddPost} />
// 				<div className={s.posts}>
// 					{postsElements}
// 				</div>
// 			</div >
// 		);
// 	}
// }


const MyPosts = (props) => {
	// 	// let posts = [
	// 	// 	{ id: 1, message: "1 Privet", LikesCount: 12 },
	// 	// 	{ id: 2, message: "2 Poka", LikesCount: 11 },
	// 	// 	{ id: 3, message: "3", LikesCount: 1 },
	// 	// 	{ id: 4, message: "4", LikesCount: 344 },
	// 	// 	{ id: 5, message: "5", LikesCount: 555 },
	// 	// 	{ id: 6, message: "6", LikesCount: 667 },
	// 	// ]

	let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount} />)

	// 	// let newPostElement = React.createRef();

	// 	// let onAddPost = () => {
	// 	// 	props.addPost();
	// 	// 	//let action= {type: 'ADD-POST'};
	// 	// 	//let action = addPostActionCreator(); //пример как можно оставить и другой пример на onPostChange
	// 	// 	//props.dispatch(action);
	// 	// 	//props.updateNewPostText('')
	// 	// }

	// 	// let onPostChange = () => {
	// 	// 	let text = newPostElement.current.value;
	// 	// 	props.updateNewPostText(text);
	// 	// 	//props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
	// 	// 	//props.dispatch(updateNewPostTextActionCreator(text));
	// 	// };

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddMypostsFormRedux onSubmit={onAddPost} />
			{/* <div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div>
					<button onClick={onAddPost}>Add button</button>
				</div>
			</div> */}
			<div className={s.posts}>
				{postsElements}
			</div>
		</div >
	);
}

export default MyPosts;