import cn from "classnames";
import { useState } from "react";
import style from "./Paginator.module.css";


// 93
// Можно добавить ещё:
// useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);
// при уходе со страницы юзеров на другую и при повторном возвращении на неё, пагинация подгоняется под текущую страницу юзеров,
// которая записана в userReducer, но лучше самим увидеть разницу.

let Paginator = ({ portionSize = 10, ...props }) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	//let [portionNumber, setPortionNumber] = useState(1);
	let [portionNumber, setPortionNumber] = useState(Math.floor(props.currentPage / 10) + 1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionNumber = portionNumber * portionSize;

	return <div className={style.paginator}>

		{portionNumber > 1 &&
			<button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

		<span className={style.point}>
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
				.map(p => {
					return <span className={cn({
						[style.selectedPage]: props.currentPage === p
					}, style.pageNumber)}
						key={p}
						onClick={() => { props.onCurrentPage(p) }}>{p}</span>
				})}
			{portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)} >NEXT</button>}
		</span>
	</div>
};
export default Paginator;



//===========================================================================
//Lesson 90

// let Paginator = (props) => {
// 	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
// 	let pages = [];
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i);
// 	}
// 	return <div>
// 		<span className={style.point}>
// 			{pages.map(p => {
// 				return <span className={props.currentPage === p && style.selectedPage}
// 					onClick={() => { props.onCurrentPage(p) }}>{p}</span>
// 			})}
// 		</span>
// 	</div>
// };