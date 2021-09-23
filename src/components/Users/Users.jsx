import style from "./style.module.css";
import userPhotos from "../../assets/image/users.png";
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

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
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhotos} className={style.userPhoto} />
						</NavLink>
					</div>
					<div>
						{u.followed
							? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
								props.toggleFollowingProgress(true, u.id);
								axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
									withCredentials: true,
									headers: { 'API-KEY': 'b6244e81-2d5a-4d23-ba7e-ce942eedbdec' }
								})
									.then(response => {
										if (response.data.resultCode == 0) {
											props.unfollow(u.id);
										}
										props.toggleFollowingProgress(false, u.id);
									});
							}} >Unfollow</button>
							: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
								props.toggleFollowingProgress(true, u.id);
								axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
									withCredentials: true,
									headers: { 'API-KEY': 'b6244e81-2d5a-4d23-ba7e-ce942eedbdec' }
								})
									.then(response => {
										if (response.data.resultCode == 0) {
											props.follow(u.id);
										}
										props.toggleFollowingProgress(false, u.id);
									});
							}} >Follow</button>
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