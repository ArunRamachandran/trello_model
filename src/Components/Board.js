import React, { Component } from 'react';
import Controller from './Controller';
import Contents from './Contents';

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
		let data = this.state.data.slice(0);
		data.push('New content');
		this.setState({
			data: data
		})
	}

	createDataFragment = (data) => {
		let dataObj = {1: [], 2: [], 3: []}, content;

		data.forEach((element, index) => {
			dataObj[ Math.round(index/this.state.tColMax) ].push(element);
		});

		Object.keys(dataObj).forEach((key, index) => {
			
		})
	}

	render() {
		return (
		  <div>
		  	<Controller onClick={this.addNewCard}/>
		  	<Contents/>
		  </div>
		);
	}
}

export default Board;
