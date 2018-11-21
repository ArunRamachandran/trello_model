import React from 'react';
import './controller.css'

const Controller = (props) => {
	return (
		<div className="controller">
			<div className="add-ele" onClick={props.addNewCard}>Add</div>
			<div className="remove-ele">Delete</div>
		</div>
	)
};

export default Controller;