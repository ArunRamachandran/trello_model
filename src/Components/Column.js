import React from 'react';
import './columns.css';

const Column = (props) => {
	
	function createDataFragement(data) {
		let contents = data.map((element, index) => {
			return (
				<div className="column-element">
					<p contenteditable="true" onBlur={ (event) => props.updateUserInput(event, index) }>{element}</p>
					<b onClick={ () => props.deleteSpecificCard(index) }>delete</b>
				</div>
			);
		});

		return contents;
	}

	return (
		<div className="column">
			{createDataFragement(props.data)}
		</div>
	)
};

export default Column;