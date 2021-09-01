import style from "./style.module.css"

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
				followed: true, fullName: 'Dmitry', status: 'I am so pretty', location: { city: 'Minsk', country: 'Belarus' }
			},
			{
				id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
				followed: false, fullName: 'Andrey', status: 'Yo bro', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-YY4QxFp_OK4ytMjHDRKl-SYDDDEDZk7jw&usqp=CAU',
				followed: true, fullName: 'Sveta', status: 'So cool', location: { city: 'Kiev', country: 'Ukraine' }
			},
		])
	};

	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={style.userPhoto} />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }} >Follow</button>
						}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName} </div>
						<div>{u.status} </div>
					</span>
					<span>
						<div>{u.location.country} </div>
						<div>{u.location.city} </div>
					</span>
				</span>
			</div >)
		}
	</div >
};

export default Users;