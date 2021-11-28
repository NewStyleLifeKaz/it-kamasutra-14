import style from "./style.module.css";
import userPhotos from "../../assets/image/users.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({ currentPage, onCurrentPage, users, totalUsersCount, pageSize, ...props }) => {

	return <div>
		{/* <div>
			<span className={style.point}>
				{pages.map(p => {
					return <span className={props.currentPage === p && style.selectedPage}
						onClick={() => { props.onCurrentPage(p) }}>{p}</span>
				})}
			</span>
		</div> */}
		<Paginator currentPage={currentPage} onCurrentPage={onCurrentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} />
		{
			users.map(u => <div key={u.id}>
				<span>
					<div>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhotos} className={style.userPhoto} />
						</NavLink>
					</div>
					<div>
						{u.followed
							? <button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
							: <button disabled={props.followingInProgress.some(id => id === u.id)}
								onClick={() => { props.follow(u.id) }} >Follow</button>
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
			</div>)
		}
	</div>
};
export default Users;