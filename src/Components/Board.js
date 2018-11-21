import React, { Component } from 'react';
import Controller from './Controller';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			tMax: 15,
			tColMax: 5
		}
	}

	addNewCard = () => {
		let data = this.state.data;
	}

	render() {
		return (
		  <div>
		  	<Controller onClick={this.addNewCard}/>
		  </div>
		);
	}
}

export default Board;
