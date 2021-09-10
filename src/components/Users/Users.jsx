import style from "./style.module.css";
import userPhotos from "../../assets/image/users.png";

let Users = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return <div>
		<div>
			<span className={style.point}>
				{pages.map(p => {
					return <span className={props.currentPage === p && style.selectedPage}
						onClick={() => { props.onCurrentPage(p) }}>{p}</span>
				})}
			</span>
		</div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photos.small != null ? u.photos.small : userPhotos} className={style.userPhoto} />
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
};
export default Users;