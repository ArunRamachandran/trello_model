import React from 'react';
import './controller.css'

const Controller = (props) => {
	return (
		<div className="controller">
			<button className="add-ele" onClick={props.onClickHanlder}>Add</button>
			<button className="remove-ele" onClick={props.onDeleteHandler}> Delete</button>
		</div>
	)
};

export default Controller;