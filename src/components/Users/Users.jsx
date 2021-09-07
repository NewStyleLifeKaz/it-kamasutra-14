import style from "./style.module.css";
import * as axios from "axios";
import userPhotos from "../../assets/image/users.png";
import React from "react";


class Users extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	// props.setUsers([
	// 	{
	// 		id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: true, fullName: 'Dmitry', status: 'I am so pretty', location: { city: 'Minsk', country: 'Belarus' }
	// 	},
	// 	{
	// 		id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: false, fullName: 'Andrey', status: 'Yo bro', location: { city: 'Moscow', country: 'Russia' }
	// 	},
	// 	{
	// 		id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
	// 		followed: true, fullName: 'Sveta', status: 'So cool', location: { city: 'Kiev', country: 'Ukraine' }
	// 	},
	// ])
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return <div>
			{
				this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhotos} className={style.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name} </div>
							<div>{u.status} </div>
						</span>
						<span>
							<div>{'u.location.country'} </div>
							<div>{'u.location.city'} </div>
						</span>
					</span>
				</div >)
			}
		</div >
	}
};
export default Users;
