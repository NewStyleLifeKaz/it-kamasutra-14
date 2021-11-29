import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, onCurrentPage, users, totalUsersCount, pageSize, ...props }) => {
	//lesson 90
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
		<div>
			{
				users.map(u => <User user={u}
					followingInProgress={props.followingInProgress}
					unfollow={props.unfollow}
					follow={props.follow}
					key={u.id} />
				)
			}
		</div>
	</div>
};
export default Users;