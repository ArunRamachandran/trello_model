import React from 'react';

const Contents = (props) => {
	
	function createDataFragement(data) {
		return (
			<h3>Functional element</h3>
		);
	}

	return (
		<div>
			{createDataFragement(props.data)}
		</div>
	)
};

export default Contents;