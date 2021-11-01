import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activeEditMode = () => {
		setEditMode(true);
	}

	const deactiveEditMode = () => {
		setEditMode(false);
		props.updateStatusThunk(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.target.value);
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activeEditMode} >{props.status || '-----'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange}
						autoFocus={true}
						onBlur={deactiveEditMode}
						value={status} />
				</div>
			}
		</div>
	)
}


export default ProfileStatusWithHooks;