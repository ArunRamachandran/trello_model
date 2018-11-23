import React from 'react';

const Column = (props) => {
	
	function createDataFragement(data) {
		let contents = data.map((element, index) => {
			return (
				<p>{element}</p>
			);
		});

		return contents;
	}

	return (
		<div className={`col-${props.index}`}>
			{createDataFragement(props.data)}
		</div>
	)
};

export default Column;