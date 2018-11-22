import React, { Component } from 'react';
import Controller from './Controller';
import Column from './Column';

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
		let dataObj = {1: [], 2: [], 3: []};
		let tColMax = this.state.tColMax;

		data.forEach((element, index) => {
			dataObj[ Math.round(index/tColMax) ].push(element);
		});

		return dataObj;
	}

	render() {
		let columns = this.createDataFragment(this.state.data);
		return (
		  <div>
		  	<Controller onClickHanlder={this.addNewCard}/>
		  	<div className="data-col-container">
		  		<Column data={columns[1]} index={1}/>
		  		<Column data={columns[2]} index={2}/>
		  		<Column data={columns[3]} index={3}/>
		  	</div>
		  </div>
		);
	}
}

export default Board;
