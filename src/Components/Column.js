import React from 'react';

const Column = (props) => {
	
	function createDataFragement(data) {
		return (
			<h3>Functional element</h3>
		);
	}

	return (
		<div className={`col-${props.index}`}>
			{createDataFragement(props.data)}
		</div>
	)
};

export default Column;