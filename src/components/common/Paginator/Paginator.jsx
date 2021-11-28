import style from "./Paginator.module.css";

let Paginator = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return <div>
		<span className={style.point}>
			{pages.map(p => {
				return <span className={props.currentPage === p && style.selectedPage}
					onClick={() => { props.onCurrentPage(p) }}>{p}</span>
			})}
		</span>
	</div>
};
export default Paginator;

//Lesson 90